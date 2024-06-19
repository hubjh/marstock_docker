import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import StockPage from "./StockPage";

import {
  StockListContainer,
  StockCategory,
  Category01,
  Category02,
  Category03,
  Category04,
  StockInfoBackboard,
  StockDiv,
  Div01,
  Div02,
  StockTitleBox,
  StockTitle01,
  StockTitle02,
  StockTitle03,
  StockTitle04,
  StockTitle05,
  StockTitle06,
  StockTitle07,
  StockTitle08,
  StockInfoList,
  StockInfo01,
  StockInfo02,
  StockInfo03,
  StockInfo04,
  StockInfo05,
  StockInfo06,
  StockInfo07,
  StockInfo08,
} from "./StockListStyle";
import StockSearch from "./stockcomponent/StockSearch";

const StockListPage = ({ stock, setStockList }) => {
  // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [highlightedInfoIndex, setHighlightedInfoIndex] = useState(5); // Default to StockInfo05

  const handleCategoryClick = (event) => {
    const newSelectedCategory = event.target.textContent;
    const newHighlightedInfoIndex = {
      고가: 3,
      EPS: 6,
      PER: 7,
      DIV: 8,
    }[newSelectedCategory];

    if (selectedCategory) {
      selectedCategory.style.color = "rgba(255, 255, 255, 0.7)";
    }
    event.target.style.color = "#ffffff";

    setSelectedCategory(event.target);
    setHighlightedInfoIndex(newHighlightedInfoIndex);
    setStockList(newSelectedCategory);
  };

  const StyledLink = styled(Link)`
    text-decoration: none;
  `;

  return (
    <>
      <InlineContainer
        contents={
          <StockListContainer>
            <StockSearch />
            <StockCategory>
              <Category01 onClick={handleCategoryClick}>고가</Category01>
              <Category02 onClick={handleCategoryClick}>EPS</Category02>
              <Category03 onClick={handleCategoryClick}>PER</Category03>
              <Category04 onClick={handleCategoryClick}>DIV</Category04>
            </StockCategory>
            <StockInfoBackboard>
              <StockTitleBox>
                <StockTitle01>순위</StockTitle01>
                <StockTitle02>종목명</StockTitle02>
                <StockTitle03>현재가</StockTitle03>
                <StockTitle03>고가</StockTitle03>
                <StockTitle04>등락률</StockTitle04>
                <StockTitle05>bps</StockTitle05>
                <StockTitle06>per</StockTitle06>
                <StockTitle07>div</StockTitle07>
                <StockTitle08>eps</StockTitle08>
              </StockTitleBox>
              {stock.map((data, index) => (
                <StockInfoList key={index}>
                  <StockInfo01>{index + 1}</StockInfo01>
                  <StyledLink to={`/StockInfo/${data.종목명}`}>
                    <StockInfo02>{data.종목명}</StockInfo02>
                  </StyledLink>
                  <StockInfo03>{data.종가 ? data.종가 : 0}</StockInfo03>
                  <StockInfo03
                    style={{
                      color:
                        highlightedInfoIndex === 3
                          ? "var(--mainorange)"
                          : "#ffffff",
                    }}
                  >
                    {data.고가 ? data.고가 : 0}
                  </StockInfo03>
                  <StockInfo04>{data.등락률 ? data.등락률 : 0}</StockInfo04>
                  <StockInfo05>{data.BPS ? data.BPS : 0}</StockInfo05>
                  <StockInfo06
                    style={{
                      color:
                        highlightedInfoIndex === 7
                          ? "var(--mainorange)"
                          : "#ffffff",
                    }}
                  >
                    {data.PER ? data.PER : 0}
                  </StockInfo06>
                  <StockInfo07
                    style={{
                      color:
                        highlightedInfoIndex === 8
                          ? "var(--mainorange)"
                          : "#ffffff",
                    }}
                  >
                    {data.DIV ? data.DIV : 0}
                  </StockInfo07>
                  <StockInfo08
                    style={{
                      color:
                        highlightedInfoIndex === 6
                          ? "var(--mainorange)"
                          : "#ffffff",
                    }}
                  >
                    {data.EPS ? data.EPS : 0}
                  </StockInfo08>
                </StockInfoList>
              ))}
            </StockInfoBackboard>
          </StockListContainer>
        }
      ></InlineContainer>
    </>
  );
};

export default StockListPage;
