import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import {
  Circle,
  Container,
  InCircle,
  Shadow,
  Space,
  WelcomeBanner,
  InfoContainer,
  Ball,
  RotatingElement,
  CardContainer,
  GuideContainer,
} from "./MainStyle";
import marscircle from "../images/MarsCircle.png";
import { useEffect, useState} from "react";
import aurora from "../images/BackAurora.svg";
import NoneBtnModalComponent from "../main/NoneBtnModalComponent";
import Recommendation from "../images/Recommendation.png";
import Backstar from "../images/BackStar.png";
import BackstarReverse from "../images/BackStarReverse.png";
import CommonAxios from "../utils/common/CommonAxios";
import { useNavigate } from "react-router-dom";
import ScrollRemote from "../utils/component/ScrollRemote";
const MainPage = () => {
  const navigator = useNavigate();
  // 가이드 내용 표시를 위한 상태
  const [selectedGuide, setSelectedGuide] = useState(null);
  // 가이드 내용 표시를 위한 스크롤 상태
  const [scrollPosition, setScrollPosition] = useState(0);
  // 웰컴배너 표시를 위한 상태
  const [openBanner, setOpenBanner] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mainData, setMainData] = useState([]);
  // 선택된 주식 이름을 저장하는 상태 변수
const [selectedStock, setSelectedStock] = useState(null);

  const navigate = useNavigate();

  const closeBanner = () => {
    setOpenBanner(false);
    setOpenInfo(true);
    sessionStorage.setItem("openBanner", "true");
  };

  useEffect(() => {
    const fetchMainDataList = async () => {
      try {
        const res = await CommonAxios.getAxios("common", "main", "", "");
        setMainData(res.data);
        console.log("메인데이터 : ", res.data);

        //       // 이하 if문들은 단순 데이터 조회여부를 확인하는 콘솔출력용입니다.
        //       //뉴스 데이터를 가져오는 코드
        //       if (res.data) {
        //          if(res.data.crawlMajorNewsDtoList) {
        //          res.data.crawlMajorNewsDtoList.map(item => {
        //          console.log(`주요뉴스 날짜: ${item.date}`);
        //          console.log(`주요뉴스 URL: ${item.link}`);
        //          console.log(`주요뉴스 언론사: ${item.media}`);
        //          console.log(`주요뉴스 뉴스명: ${item.name}`);
        //          console.log(`주요뉴스 뉴스내용: ${item.summary}`);
        //             });
        //          }
        //          // 국내지수를 가져오는 코드
        //          if(res.data.crawlDomesticIndicatorsDtoList) {
        //             res.data.crawlDomesticIndicatorsDtoList.map(item => {
        //                console.log(`국내지수 명칭: ${item.crawlDomesticIndicatorsName}`);
        //                console.log(`국내지수 가격: ${item.crawlDomesticIndicatorsPrice}`);
        //                console.log(`국내지수 등락률: ${item.crawlDomesticIndicatorsChange}`);
        //             });
        //          }
        //          // 해외지수를 가져오는 코드
        //          if(res.data.crawlOverseasIndicatorsDtoList) {
        //             res.data.crawlOverseasIndicatorsDtoList.map(item => {
        //                console.log(`해외지수 명칭: ${item.name}`);
        //                console.log(`해외지수 가격: ${item.price}`);
        //                console.log(`해외지수 등락률: ${item.change}`);
        //             });
        //          }
        //          // 금리를 가져오는 코드
        //          if(res.data.crawlRateDtoList) {
        //             res.data.crawlRateDtoList.map(item => {
        //                console.log(`금리 명칭: ${item.name}`);
        //                console.log(`금리 가격: ${item.interestRate}`);
        //                console.log(`금리 등락률: ${item.change}`);
        //             });
        //          }
        //          // 검색상위주식을 가져오는 코드
        //          if(res.data.crawlSearchDtos) {
        //             res.data.crawlSearchDtos.map(item => {
        //                console.log(`검색상위주식 명칭: ${item.searchName}`);
        //                console.log(`검색상위주식 검색비율: ${item.searchCount}`);
        //                console.log(`검색상위주식 현재가: ${item.searchUpdown}`);
        //                console.log(`검색상위주식 전일비: ${item.searchPrice}`);
        //                console.log(`검색상위주식 거래량: ${item.searchMarketCap}`);
        //                console.log(`검색상위주식 등락률: ${item.searchChangeRate}`);
        //             });
        //          }
        //          // 거래상위주식을 가져오는 코드
        //          if(res.data.crawlStockDtoList) {
        //             res.data.crawlStockDtoList.map(item => {
        //                console.log(`거래상위주식 명칭: ${item.name}`);
        //                console.log(`거래상위주식 등락여부: ${item.upDown}`);
        //                console.log(`거래상위주식 현재가: ${item.price}`);
        //                console.log(`거래상위주식 등락률: ${item.rate}`);
        //             });
        //          }
        //  } else {
        //    console.log('mainData is undefined');
        //  } // 콘솔용 if문 끝 이곳까지 주석처리 하면 mainData 만 콘솔로 출력됩니다.
      } catch (e) {
        console.error(e);
      }
    };
    fetchMainDataList();
  }, []);

  useEffect(() => {
    const sessionOpen = sessionStorage.getItem("openBanner");
    if (sessionOpen === null) {
      setOpenBanner(true);
    } else {
      setOpenInfo(true);
    }
  }, []);

const randomStock = () => {
  setIsModalOpen(true);
  console.log("랜덤주식");
}
  // 랜덤 주식 이름을 선택하는 함수
const selectRandomStock = () => {
  const randomIndex = Math.floor(Math.random() * mainData.crawlSearchDtos.length);
  return mainData.crawlSearchDtos[randomIndex].searchName;
};
// 모달이 열릴 때마다 랜덤 주식 이름을 선택
useEffect(() => {
  if (isModalOpen) {
    const intervalId = setInterval(() => {
      setSelectedStock(selectRandomStock());
    }, 50); // 3초 동안 매 100ms마다 주식 이름 변경

    // 3초 후에 주식 이름 변경 중지
    setTimeout(() => {
      clearInterval(intervalId);
    }, 3000);
    

    return () => {
      clearInterval(intervalId); // 컴포넌트 unmount 시에도 interval clear
    };
  }
}, [isModalOpen, selectedStock]);

// '이동' 버튼 클릭 핸들러
const handleMoveClick = () => {
  navigate(`/Stockinfo/${selectedStock}`);
  setIsModalOpen(false);
};

// '닫기' 버튼 클릭 핸들러
const handleCloseClick = () => {
  setIsModalOpen(false);
};
  // 종목 토론 이동
  const ToDisc = () => {
    navigator("/stockpage/0");
  };

  // 안내 표시 칸 클릭시
  useEffect(() => {
    console.log("현재 표시가이드 : ", selectedGuide)
    // selectedGuide에 따라 해당 이미지를 표시하는 로직을 작성합니다.
  }, [selectedGuide]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
      console.log("스크롤 위치 : ", scrollPosition)
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <NoneBtnModalComponent
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        content={selectedStock}
        closeText="닫기"
        closeModalHandler={handleCloseClick}
        onMove={handleMoveClick}
        closeButtonStyle={{ b: "blue", textColor: "" }}
      />
      <Space>
        <Container open={openBanner}>
          <img id="star" src={Backstar} alt="backstar" />
          <img id="starreverse" src={BackstarReverse} alt="backstarreverse" />
          <img id="aurora" src={aurora} alt="aurora" />
          {/* <img id="aurora"  alt="aurora"/> */}
          <img id="circle" src={marscircle} alt="mars" />
          <WelcomeBanner open={openBanner}>
            <div id="text">
              <div id="bigtext"
               
              >
                주식의 흐름을 그리다<br />
                MARSTOCK
              </div>
              <div id="smalltext"
              >
                환영합니다! MARSTOCK 은 주식시장의 흐름을 분석하고 시각화하여
                실시간으로 제공하는 플랫폼입니다. 
                우리는 투자 경험을 향상시키기 위해 현명한 결정을 내리는 데
                도움이 되는 다양한 도구와 리소스를 제공합니다.
                우리의 독특한 기능 중 하나는 사용자들에게 제공하는 모의투자
                기회입니다.
                <br />
                <br />
                여러분은 가상 자본을 이용하여 실제 주식시장의 상황을 경험하고
                다양한 전략을 시험해볼 수 있습니다.
                이를 통해 실전과 유사한 환경에서 투자 스킬을 향상시키고 미래의
                투자에 대한 자신감을 쌓을 수 있습니다.
                <br />
                <br />
                MARSTOCK 은 주식 투자에 대한 지식을 증진하고, 사용자들이
                자신만의 투자 전략을 개발하며 성공을 이룰 수 있도록 지원합니다.
                함께 성장하고 배우며, 더 나은 금융 미래를 향해 함께 나아가는
                여정에 참여해보세요!
              </div>
            </div>
            <div id="startbutton" onClick={closeBanner}>
              시작하기
            </div>
          </WelcomeBanner>
          <CardContainer open={openInfo}>
            <div className="card" id="card1" onClick={ToDisc}>
              종목토론
            </div>
            <div className="card" id="card2" onClick={randomStock}>
              랜덤주식
            </div>
            <div className="card" id="card3" onClick={() => navigate("/mypage")}>
              MARSTOCK <br/> 모의투자 현황
            </div>
            <div
              className="card"
              id="card4"
              onClick={() => navigate("/stockpage/1")}
            >
              실시간 차트
            </div>
          </CardContainer>
          <InfoContainer open={openInfo}>
            <div className="infobox" id="oneinfo">
              <div id="infoline" style={{ cursor: "pointer" }}>
                <div id="title">주요뉴스</div>
                {mainData &&
                  mainData.crawlMajorNewsDtoList &&
                  mainData.crawlMajorNewsDtoList
                    .slice(0, 10)
                    .map((news, index) => (
                      <div
                        id="infolist"
                        key={index}
                        onClick={() => window.open(news.link, "_blank")}
                      >
                        <div id="name">
                          {news.name.length > 28
                            ? news.name.substring(0, 25) + "..."
                            : news.name}
                        </div>
                        <div id="media">
                          {news.media.length > 8
                            ? news.media.substring(0, 6) + "..."
                            : news.media}
                        </div>
                      </div>
                    ))}
              </div>
            </div>
            <div className="infobox" id="twoinfo">
              <div id="infoline">
                <div id="title">거래상위</div>
                {mainData &&
                  mainData.crawlStockDtoList &&
                  mainData.crawlStockDtoList
                    .slice(0, 10)
                    .map((stock, index) => (
                      <div id="infolist">
                        <div id="name" style={{ display: "flex", gap: "2rem" }}>
                          <div id="rank" style={{ width: "3rem" }}>
                            {index + 1}
                          </div>
                          {stock.name.length > 25
                            ? stock.name.substring(0, 22) + "..."
                            : stock.name}
                        </div>
                        <div id="price">{stock.price}</div>
                      </div>
                    ))}
              </div>
            </div>
            <div className="infobox" id="threeinfo">
              <div div id="infoline">
                <div id="title">시장지표</div>
                <div id="threeinfobox">
                  <div className="threein" id="info1">
                    <div id="infotitle">국내지수</div>
                    {mainData &&
                      mainData.crawlDomesticIndicatorsDtoList &&
                      mainData.crawlDomesticIndicatorsDtoList.map(
                        (domestic, index) => (
                          <div id="infoin">
                            <div
                              className="in"
                              id="inname"
                              style={{ width: "28%" }}
                            >
                              {domestic.crawlDomesticIndicatorsName}
                            </div>
                            <div className="in" style={{ width: "28%" }}>
                              {domestic.crawlDomesticIndicatorsPrice}
                            </div>
                            <div
                              className="in"
                              id="inchange"
                              style={{
                                width: "28%",
                                color:
                                  domestic.crawlDomesticIndicatorsChange.includes(
                                    "+"
                                  )
                                    ? "var(--upred)"
                                    : domestic.crawlDomesticIndicatorsChange.includes(
                                        "0.00"
                                      )
                                    ? "var(white)"
                                    : "var(--downblue)",
                              }}
                            >
                              {domestic.crawlDomesticIndicatorsChange
                                .replace("+", "　▲")
                                .replace("-0.00", "　0")
                                .replace("-", "　▼")}
                            </div>
                          </div>
                        )
                      )}
                  </div>
                  <div className="threein" id="info2">
                    <div id="infotitle">해외지수</div>
                    {mainData &&
                      mainData.crawlOverseasIndicatorsDtoList &&
                      mainData.crawlOverseasIndicatorsDtoList.map(
                        (domestic, index) => (
                          <div id="infoin">
                            <div
                              className="in"
                              id="inname"
                              style={{ width: "28%" }}
                            >
                              {domestic.name}
                            </div>
                            <div className="in" style={{ width: "28%" }}>
                              {domestic.price}
                            </div>
                            <div
                              className="in"
                              id="inchange"
                              style={{
                                width: "28%",
                                color: domestic.change.includes("상승")
                                  ? "var(--upred)"
                                  : domestic.change.includes("하락")
                                  ? "var(--downblue)"
                                  : "white",
                              }}
                            >
                              {domestic.change
                                .replace("상승", "▲")
                                .replace("하락", "▼")}
                            </div>
                          </div>
                        )
                      )}
                  </div>
                  <div className="threein" id="info3">
                    <div id="infotitle">금리</div>
                    {mainData &&
                      mainData.crawlRateDtoList &&
                      mainData.crawlRateDtoList.map((rate, index) => (
                        <div id="infoin">
                          <div
                            className="in"
                            id="inname"
                            style={{ width: "28%" }}
                          >
                            {rate.name}
                          </div>
                          <div className="in" style={{ width: "28%" }}>
                            {rate.interestRate}
                          </div>
                          <div
                            className="in"
                            id="inchange"
                            style={{
                              width: "28%",
                              color: rate.change.includes("상승")
                                ? "var(--upred)"
                                : rate.change.includes("하락")
                                ? "var(--downblue)"
                                : "white",
                            }}
                          >
                            {rate.change
                              .replace("상승", "▲")
                              .replace("하락", "▼")
                              .replace("보합", "")}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </InfoContainer>

          <GuideContainer open={openInfo} selectedGuide={selectedGuide}>
            <div className="guide" id="guide01" onClick={() => setSelectedGuide(selectedGuide === 'guide01' ? null : 'guide01')}>
              기본가이드
            </div>
            <div className="guide" id="guide02" onClick={() => setSelectedGuide(selectedGuide === 'guide02' ? null : 'guide02')}>
              모의투자 가이드
            </div>
            <div id="guide01info" className="guideinfo"></div>
            <div id="guide02info" className="guideinfo"></div>
          </GuideContainer>
        </Container>
      </Space>
      <Footer />
    </>
  );
};
export default MainPage;
