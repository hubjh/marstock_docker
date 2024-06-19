import styled from "styled-components";
import CommonAxios from "../../utils/common/CommonAxios";
import { useState } from "react";
import { Common } from "../../utils/common/Common";

const SearchZone = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110rem;
  height: 10rem;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 40rem;
    height: 6rem;
  }
`;

const SearchInput = styled.textarea`
  display: flex;
  position: relative;
  font-family: "Noto Sans KR", sans-serif;

  width: 100rem;
  height: 20rem;

  background: #ffffff;
  border-radius: 1.5rem;
  border: none;

  color: #000000;
  font-size: 2rem;
  padding: 1rem 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); /* 볼륨감을 위한 그림자 추가 */

  &::placeholder {
    color: gray;
    padding-left: 1rem;
    text-align: center;
    font-size: 2rem;
  }

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 20rem;

  background: var(--mainpurple);
  border-radius: 1.2rem;
  border: 1px solid transparent; /* 투명한 초기 테두리 */
  font-weight: 400;
  font-size: 2.2rem;
  line-height: 29px;

  color: #ffffff;
  opacity: 0.9; /* 유리 효과를 위한 투명도 조절 */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); /* 볼륨감을 위한 그림자 추가 */

  &:hover {
    cursor: pointer;
    scale: 1.005;
    border: 1px solid rgba(255, 255, 255, 0.2); /* 호버 시 테두리 추가 */
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
  }
`;

const StockCommunityUpload = ({ setCheckPost }) => {
  const [content, setContent] = useState("");

  const handleInputChange = (e) => {
    setContent(e.target.value);
  };

  const communityNewPost = async () => {
    try {
      // content가 비어 있는지 체크
      if (content.trim() === "") {
        console.log("post: Content is empty");
        return; // 등록을 막음
      }

      const accessToken = Common.getAccessToken();
      const communityDto = {
        content: content,
      };
      const multiDto = {
        accessToken: accessToken,
        communityDto: communityDto,
      };
      const postResponse = await CommonAxios.postTokenAxios(
        "community",
        "new",
        multiDto
      );

      if (postResponse.status === 200) {
        console.log("post :  success");
        setContent("");
        setCheckPost(true);
      } else {
        console.log("post : False");
      }
    } catch (error) {
      console.error("post : Error:", error);
      throw error;
    }
  };
  return (
    <>
      <SearchZone>
        <SearchInput
          value={content}
          onChange={handleInputChange}
          placeholder="주식에 대해 공유할 내용을 작성해주세요"
        ></SearchInput>
        <SearchButton onClick={communityNewPost}>등록</SearchButton>
      </SearchZone>
    </>
  );
};

export default StockCommunityUpload;
