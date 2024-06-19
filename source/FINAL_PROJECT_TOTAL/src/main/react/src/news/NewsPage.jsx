import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import newssumb from "../images/tvnewsimg.png";
import styled from "styled-components";
import React, { useEffect, useState } from "react";

import {
  NewsPageContainer,
  NewsContainer,
  NewsTitle,
  NewsTopContainer,
  Realtimezone,
  MostViewZone,
  TopTitile,
  RealTimeBox,
  TopBox,
  MostViewBox,
  MostNewsName,
  NewsBottomTitle,
  NewsBottomContainer,
  TvNewsBox,
  NewsImgBox,
  NewsInfoBox,
  TvnewsInfo,
} from "./NewsStyle";
import NewsSearch from "./newscomponent/NewsSearch";
import CommonAxios from "../utils/common/CommonAxios";

const NewsPage = () => {
  // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.
  const [tvNews, setTvNews] = useState([]);
  const [mnNews, setMnNews] = useState([]);
  const [rtNews, setRtNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await CommonAxios.getAxios("news", "getNews");
        if (res.status === 200) {
          // console.log(res.data);
          setTvNews(res.data[0]);
          setMnNews(res.data[1]);
          setRtNews(res.data[2]);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getNews();
  }, []);

  // 뉴스 링크 이동
  const handleImageClick = (news) => {
    // 새 창으로 열기
    window.open(news.link, "_blank");
  };

  return (
    <>
      <Header />
      <NewsPageContainer>
        <NewsTitle>뉴스</NewsTitle>
        <InlineContainer
          color="orange"
          contents={
            <NewsContainer>
              <NewsSearch />
              <NewsTopContainer>
                <Realtimezone>
                  <TopTitile>가장 많이 본 뉴스</TopTitile>

                  {mnNews &&
                    mnNews.map((news, index) => (
                      <RealTimeBox
                        key={index}
                        onClick={() => handleImageClick(news)}
                      >
                        <TopBox>{news && news.description}</TopBox>
                      </RealTimeBox>
                    ))}
                </Realtimezone>

                <MostViewZone>
                  <TopTitile>실시간 속보</TopTitile>

                  {rtNews.map((news, index) => (
                    <MostViewBox key={index}>
                      <MostNewsName onClick={() => handleImageClick(news)}>
                        {news.description}
                      </MostNewsName>
                    </MostViewBox>
                  ))}
                </MostViewZone>
              </NewsTopContainer>

              <NewsBottomTitle>TV뉴스</NewsBottomTitle>

              <NewsBottomContainer>
                {tvNews.map((news, index) => (
                  <TvNewsBox key={index}>
                    <NewsImgBox
                      alt="뉴스썸네일"
                      src={news.thumb}
                      onClick={() => handleImageClick(news)}
                    ></NewsImgBox>

                    <NewsInfoBox>
                      <TvnewsInfo>{news.description}</TvnewsInfo>
                    </NewsInfoBox>
                  </TvNewsBox>
                ))}
              </NewsBottomContainer>
            </NewsContainer>
          }
        ></InlineContainer>
      </NewsPageContainer>
      <Footer />
    </>
  );
};

export default NewsPage;
