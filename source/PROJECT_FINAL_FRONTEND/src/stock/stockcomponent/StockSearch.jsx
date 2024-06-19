import styled from "styled-components";
import CommonAxios from "../../utils/common/CommonAxios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  }
`;

const SearchInput = styled.input`
  display: flex;
  position: relative;

  width: 100rem;
  height: 6rem;

  background: #ffffff;
  border-radius: 3rem;
  border: none;

  color: #000000;
  font-size: 2rem;
  padding-left: 2rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); /* 볼륨감을 위한 그림자 추가 */

  &::placeholder {
    color: gray;
    padding-left: 1rem;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    width: 30rem;
    height: 4rem;

    &::placeholder {
      font-size: 1.4rem;
    }
  }
`;

const SearchButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12rem;
  height: 6rem;

  background: var(--mainpurple);
  border-radius: 3rem;
  border: 1px solid transparent; /* 투명한 초기 테두리 */
  font-weight: 600;
  font-size: 1.8rem;
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
    height: 4rem;
    font-size: 1.2rem;
  }
`;

const SearchResults = styled.div`
  position: absolute;
  top: 86%;
  left: 6rem;
  width: 86rem;
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 10px 10px 10px 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
  box-sizing: border-box;
  font-size: 1.6rem;
  padding: 3.8rem;

  /* Styles for the scrollbar */
  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      to bottom,
      var(--mainpurple),
      var(--mainorange)
    );
    height: 1rem;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(
      to bottom,
      var(--mainlightpurple),
      var(--mainlightorange)
    );
  }

  @media (max-width: 768px) {
    width: 28rem;
    left: 3.2rem;
  }
`;

const SearchResultItem = styled.div`
  margin-bottom: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  border-top: 1px solid #ccc;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const StockSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  // 검색 입력
  const handleSearch = async (event) => {
    setSearchTerm(event.target.value);
    try {
      const res = await CommonAxios.getAxios(
        "stock",
        "search",
        "query",
        searchTerm
      );
      if (res.status === 200) {
        console.log(searchTerm);
        setList(res.data);
        console.log(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // 검색
  const Search = async () => {
    try {
      const res = await CommonAxios.getAxios(
        "stock",
        "search",
        "query",
        searchTerm
      );
      if (res.status === 200) {
        setList(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <SearchZone>
        <SearchInput
          onChange={(event) => handleSearch(event)}
          placeholder="찾고 싶은 주식을 검색하세요"
          value={searchTerm}
        ></SearchInput>
        <SearchButton onClick={Search}>검색</SearchButton>
        {searchTerm && list.length > 0 && (
          <SearchResults>
            {list.map((item, index) => (
              <SearchResultItem
                key={index}
                onClick={() => {
                  navigate(`/stockInfo/${item}`);
                }}
              >
                {item}
              </SearchResultItem>
            ))}
          </SearchResults>
        )}
      </SearchZone>
    </>
  );
};

export default StockSearch;
