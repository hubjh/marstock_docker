import styled from "styled-components";
import { useState } from "react";

const SearchZone = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40rem;
  height: 4rem;
  flex-direction: row;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 30rem;
  }
`;

const SearchInput = styled.input`
  display: flex;
  position: relative;


  width: 30.5rem;
  height: 2.8rem;

  background: #ffffff;
  border-radius: 3rem;
  border: none;

  color: #000000;
  font-size: 1.6rem;
  padding-left: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); /* 볼륨감을 위한 그림자 추가 */

  &::placeholder {
    color: gray;
    /* padding-left: rem; */
    font-size: 1.6rem;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 20rem;
  }
`;

const SearchButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.8rem;
  height: 2.8rem;

  background: var(--mainpurple);
  border-radius: 3rem;
  border: 1px solid transparent; /* 투명한 초기 테두리 */
  font-weight: 400;
  font-size: 1.6rem;
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

  @media (max-width: 768px) {
    width: 4rem;
    height: 2.8rem;
    font-size: 0.8rem;
  }
`;

const StockCommunitySearch = ({ setSearchKeyword, setCheckSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchKeyword(inputValue);
    setCheckSearch(true);
  };
  return (
    <>
      <SearchZone>
        <SearchInput
          value={inputValue}
          onChange={handleInputChange}
          placeholder="검색어를 입력하세요"
        ></SearchInput>
        <SearchButton onClick={handleSearch}>검색</SearchButton>
      </SearchZone>
    </>
  );
};

export default StockCommunitySearch;
