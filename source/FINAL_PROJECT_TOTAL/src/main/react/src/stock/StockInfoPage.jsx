import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import styled from "styled-components";
import React, { useState } from "react";
import stockgraph from "../images/stockgraph.png";
import StockPage from "./StockPage";
import {
  StockInfoPageContainer,
  StockListContainer,
  StockHeadTitle,
  StockHeadTitle01,
  StockHeadTitle02,
  StockHeadTitle03,
  StockCategory,
  Category01,
  Category02,
  Category03,
  Category04,
  StockInfoBackboard,
  StockDivLeft,
  StockDivRight,
  LeftContainer,
  RightContainer,
  RightLeftContainer,
  StockGraphZone,
  CurrentPrice,
  CurrentPriceNum,
  UpDownCheck,
  Point,
  Percent,
  LeftInfo,
  LeftInfoTitle,
  LeftInfoNum,
  PurchaseBox,
  StockSellingBox,
  StockPurchaseBox,
  SellingTitle,
  PurchaseTitle,
  SellingTop,
  SellingButton,
  SellingBottom,
  SellingItem,
  SellingeTag,
  SellingNum,
  TageNumber,
  ProfitNumber,
  PurchaseTop,
  PurchaseButton,
  PurchaseBottom,
  PurchaseItem,
  PurchaseTag,
  PurchaseNumber,
  PurchaseNum,
} from "./StockInfoStyle";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import WebSocketComponent from "../utils/common/WebSocket";
import CommonAxios from "../utils/common/CommonAxios";
import { Common } from "../utils/common/Common";
import StockInfoChart from "./stockcomponent/StockInfoChart";
import LearningMethodSwitch from "./stockcomponent/LearningSelectSwitch";

const StockInfoPage = () => {
  // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.

  const [purchaseNum, setPurchaseNum] = useState(0);
  const [sellingNum, setSellingNum] = useState(0);
  const [message, setMessage] = useState("");
  const [stock, setStock] = useState([]);
  const [dataCount, setDataCount] = useState(0); // 데이터 카운트 추가

  // 그래프에 사용할 데이터
  const [chartData, setChartData] = useState({
    actual_price: {
      data: [],
      index: [],
    },
    future_price: {
      data: [],
      index: [],
    },
    column_type: "",
    stock_code: "",
  });

  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectLearning, setSelectLearning] = useState(false);

  // 구매 내역 조회
  const [buyDtoList, setBuyDtoList] = useState([]);
  const [price, setPrice] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  // 밀리초 타임스탬프를 이용하여 Date 객체 생성
  const date = new Date(Number(stock.stockDate));

  // 날짜를 원하는 형식으로 변환
  const stockDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;

  // 주식명으로 데이터 조회
  const { name } = useParams();
  useEffect(() => {
    // WebSocket 객체 얻기
    const socket = WebSocketComponent(name);

    socket.onmessage = (event) => {
      const message = event.data;
      try {
        const parsedMessage = JSON.parse(message);
        // console.log("파싱된 JSON 데이터:", parsedMessage);
        // parsedMessage.message를 객체로 변환
        const stockData = JSON.parse(parsedMessage.message);

        // stockData에서 필요한 데이터에 접근
        const latestStock = stockData.latestStock;

        // latestStock 배열의 첫 번째 요소에 접근
        const firstStock = latestStock[0];
        setStock(firstStock);

        setDataCount((prevCount) => prevCount + 1); // 데이터가 들어올 때마다 카운트 증가
      } catch (error) {
        console.error("Failed to parse JSON:", error);
      }
    };

    // 언마운트될 때 WebSocket 연결 닫기
    return () => {
      socket.close();
    };
  }, [name]);

  // 구매 내역 조회
  const getInfo = async () => {
    try {
      const accessToken = Common.getAccessToken();
      const stockDto = {
        종목명: stock.stockName,
      };
      const multiDto = {
        accessToken: accessToken,
        stockDto: stockDto,
      };
      const res = await CommonAxios.postTokenAxios(
        "buyAndSell",
        "getInfo",
        multiDto
      );
      if (res.status === 200) {
        // console.log("구매 내역", res.data);
        setBuyDtoList(res.data.buyDtoList);
        setPrice(res.data.memberDto?.point);
        // console.log(res.data.memberDto?.point);
        setTotalPrice(
          res.data.buyDtoList.reduce(
            (total, data) => total + data.buyPrice * data.buyCount,
            0
          )
        );
        setTotalCount(
          res.data.buyDtoList.reduce((total, data) => total + data.buyCount, 0)
        );
      } else {
        setBuyDtoList([]);
      }
    } catch (e) {
      // console.log(e);
    }
  };

  // 구매 함수
  const onClickBuy = async () => {
    try {
      const accessToken = Common.getAccessToken();
      const buyDto = {
        buyCount: purchaseNum,
        buyPrice: stock.stockClose,
      };
      const stockDto = {
        종목명: stock.stockName,
        종목코드: stock.stockCode,
      };
      const multiDto = {
        accessToken: accessToken,
        buyDto: buyDto,
        stockDto: stockDto,
      };
      const res = await CommonAxios.postTokenAxios(
        "buyAndSell",
        "buy",
        multiDto
      );
      if (res.data) {
        alert("매수 완료");
      } else {
        alert("매수 실패, 매수 가능 시간(09:00 ~ 15:30)");
      }
    } catch (e) {
      // console.log(e);
    }
  };

  // 판매 함수
  const onClickSell = async () => {
    try {
      const accessToken = Common.getAccessToken();
      const buyDto = {
        sellCount: sellingNum,
        sellPrice: sellingNum * stock.stockClose,
      };
      const stockDto = {
        종목명: stock.stockName,
        종목코드: stock.stockCode,
      };
      const multiDto = {
        accessToken: accessToken,
        buyDto: buyDto,
        stockDto: stockDto,
      };
      const res = await CommonAxios.postTokenAxios(
        "buyAndSell",
        "sell",
        multiDto
      );
      if (res.data) {
        alert("매도 완료");
      } else {
        alert("매도 실패, 매도 가능 시간(09:00 ~ 15:30)");
      }
    } catch (e) {
      // console.log(e);
    }
  };

  const stockChartReqDto = {
    stockName: name,
    months: selectedMonth,
    columnType: "종가",
    futureDays: 10,
  };

  const handleChartDataRequest = async () => {
    console.log("arima 실행");
    try {
      const res = await CommonAxios.postAxios(
        "stock",
        "chart",
        stockChartReqDto
      );
      console.log("arima 정보 : ", res.data);
      setChartData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLstm = async () => {
    console.log("lstm 실행");
    try {
      const res = await CommonAxios.postAxios(
        "stock",
        "lstm",
        stockChartReqDto
      );
      console.log("lstm 정보 : ", res.data);
      setChartData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // 구매내역 useEffect
  useEffect(() => {
    if (stock) {
      getInfo();
    }
    if (!selectLearning) {
      handleChartDataRequest();
    } else {
      handleLstm();
    }
  }, [selectLearning, selectedMonth]);

  return (
    <>
      <Header />
      <p style={{ color: "white" }}>{dataCount}</p>
      <InlineContainer
        contents={
          <StockListContainer>
            <StockCategory>
              <Category01>{stock.stockName}</Category01>
              <Category02>{stock.stockCode}</Category02>
              <Category04>{stockDate}</Category04>
            </StockCategory>

            <StockInfoBackboard>
              <StockDivLeft>
                <CurrentPrice>
                  현재가
                  <CurrentPriceNum>
                    {Number(stock.stockClose).toLocaleString()}
                  </CurrentPriceNum>
                </CurrentPrice>

                <UpDownCheck>
                  <Point>등락률</Point>
                  <Percent>{Number(stock.stockFluctuationRate)}%</Percent>
                </UpDownCheck>

                <RightLeftContainer>
                  <LeftContainer>
                    <LeftInfo>
                      <LeftInfoTitle>고가</LeftInfoTitle>
                      <LeftInfoNum>
                        {Number(stock.stockHigh).toLocaleString()}
                      </LeftInfoNum>
                    </LeftInfo>

                    <LeftInfo>
                      <LeftInfoTitle>저가</LeftInfoTitle>
                      <LeftInfoNum>
                        {Number(stock.stockLow).toLocaleString()}
                      </LeftInfoNum>
                    </LeftInfo>

                    <LeftInfo>
                      <LeftInfoTitle>시가</LeftInfoTitle>
                      <LeftInfoNum>
                        {Number(stock.stockOpen).toLocaleString()}
                      </LeftInfoNum>
                    </LeftInfo>

                    <LeftInfo>
                      <LeftInfoTitle>거래량</LeftInfoTitle>
                      <LeftInfoNum>
                        {Number(stock.stockVolume).toLocaleString()}
                      </LeftInfoNum>
                    </LeftInfo>

                    <LeftInfo>
                      <LeftInfoTitle>거래대금</LeftInfoTitle>
                      <LeftInfoNum>
                        {Number(stock.stockTradingValue).toLocaleString()}
                      </LeftInfoNum>
                    </LeftInfo>
                  </LeftContainer>

                  <RightContainer>
                    <LeftInfo>
                      <LeftInfoTitle>BPS</LeftInfoTitle>
                      <LeftInfoNum>
                        {Number(stock.stockBps).toLocaleString()}
                      </LeftInfoNum>
                    </LeftInfo>

                    <LeftInfo>
                      <LeftInfoTitle>PER</LeftInfoTitle>
                      <LeftInfoNum>
                        {Number(stock.stockPer).toLocaleString(undefined, {
                          minimumFractionDigits: 1,
                          maximumFractionDigits: 1,
                        })}
                      </LeftInfoNum>
                    </LeftInfo>

                    <LeftInfo>
                      <LeftInfoTitle>PBR</LeftInfoTitle>
                      <LeftInfoNum>
                        {Number(stock.stockPbr).toLocaleString(undefined, {
                          minimumFractionDigits: 1,
                          maximumFractionDigits: 1,
                        })}
                      </LeftInfoNum>
                    </LeftInfo>

                    <LeftInfo>
                      <LeftInfoTitle>EPS</LeftInfoTitle>
                      <LeftInfoNum>
                        {Number(stock.stockEps).toLocaleString()}
                      </LeftInfoNum>
                    </LeftInfo>

                    <LeftInfo>
                      <LeftInfoTitle>DIV</LeftInfoTitle>
                      <LeftInfoNum>
                        {Number(stock.stockDiv).toLocaleString(undefined, {
                          minimumFractionDigits: 1,
                          maximumFractionDigits: 1,
                        })}
                      </LeftInfoNum>
                    </LeftInfo>

                    <LeftInfo>
                      <LeftInfoTitle>DPS</LeftInfoTitle>
                      <LeftInfoNum>
                        {Number(stock.stockDps).toLocaleString()}
                      </LeftInfoNum>
                    </LeftInfo>
                  </RightContainer>
                </RightLeftContainer>
              </StockDivLeft>

              <StockDivRight>
                <LearningMethodSwitch setSelectLearning={setSelectLearning} />
                {selectLearning ? (
                  <StockInfoChart chartData={chartData} />
                ) : (
                  <StockInfoChart chartData={chartData} />
                )}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <PurchaseButton onClick={() => setSelectedMonth(1)}>
                    30일
                  </PurchaseButton>
                  <SellingButton onClick={() => setSelectedMonth(6)}>
                    6개월
                  </SellingButton>
                  <PurchaseButton onClick={() => setSelectedMonth(12)}>
                    1년
                  </PurchaseButton>
                  {/* <input /> */}
                  {/* <button onClick={handleChartDataRequest}>버튼</button> */}
                </div>

                {/* <StockGraphZone alt="주식그래프" src={stockgraph} /> */}

                <PurchaseBox>
                  <StockSellingBox>
                    <SellingTop>
                      <SellingTitle>매도</SellingTitle>
                      <SellingButton onClick={() => onClickSell()}>
                        매도
                      </SellingButton>
                      {message && (
                        <div
                          style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            width: "30rem",
                            height: "4rem",
                            fontSize: "2rem",
                            color: "white",
                            fontWeight: "bold",
                            margin: "auto",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "0.5rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {message}
                        </div>
                      )}
                    </SellingTop>

                    <SellingBottom>
                      <SellingItem>
                        <SellingeTag>매입가</SellingeTag>
                        <TageNumber>
                          {buyDtoList &&
                            buyDtoList[0]?.buyPrice.toLocaleString()}
                          ...
                        </TageNumber>
                      </SellingItem>

                      <SellingItem>
                        <SellingeTag>보유수량</SellingeTag>
                        <TageNumber>
                          {Number(totalCount).toLocaleString()}
                        </TageNumber>
                      </SellingItem>

                      <SellingItem>
                        <SellingeTag>현재가</SellingeTag>
                        <TageNumber>
                          {Number(stock.stockClose).toLocaleString()}
                        </TageNumber>
                      </SellingItem>

                      <SellingItem>
                        <SellingeTag>매도수량</SellingeTag>
                        <SellingNum
                          onChange={(e) => setSellingNum(e.target.value)}
                        ></SellingNum>
                      </SellingItem>

                      <SellingItem>
                        <SellingeTag>매입금</SellingeTag>
                        <TageNumber>
                          {Number(totalPrice).toLocaleString()}
                        </TageNumber>
                      </SellingItem>

                      <SellingItem>
                        <SellingeTag>매도가격</SellingeTag>
                        <TageNumber>
                          {Number(
                            stock.stockClose * sellingNum
                          ).toLocaleString()}
                        </TageNumber>
                      </SellingItem>

                      <SellingItem>
                        <SellingeTag>평가금</SellingeTag>
                        <TageNumber>
                          {Number(
                            stock.stockClose * totalCount
                          ).toLocaleString()}
                        </TageNumber>
                      </SellingItem>

                      <SellingItem>
                        <SellingeTag>수익률</SellingeTag>
                        <ProfitNumber>
                          {(
                            ((stock.stockClose * totalCount - totalPrice) /
                              totalPrice) *
                            100
                          ).toFixed(5)}
                          %
                        </ProfitNumber>
                      </SellingItem>
                    </SellingBottom>
                  </StockSellingBox>

                  <StockPurchaseBox>
                    <PurchaseTop>
                      <PurchaseTitle>매수</PurchaseTitle>
                      <PurchaseButton onClick={onClickBuy}>매수</PurchaseButton>
                      {message && (
                        <div
                          style={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            right: 0,
                            width: "30rem",
                            height: "4rem",
                            fontSize: "2rem",
                            color: "white",
                            fontWeight: "bold",
                            margin: "auto",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "0.5rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          {message}
                        </div>
                      )}
                    </PurchaseTop>

                    <PurchaseBottom>
                      <PurchaseItem>
                        <PurchaseTag>현재보유잔고</PurchaseTag>
                        <PurchaseNumber>
                          {Number(price).toLocaleString()}
                        </PurchaseNumber>
                      </PurchaseItem>

                      <PurchaseItem>
                        <PurchaseTag>매수수량</PurchaseTag>
                        <PurchaseNum
                          onChange={(e) => setPurchaseNum(e.target.value)}
                        ></PurchaseNum>
                      </PurchaseItem>

                      <PurchaseItem>
                        <PurchaseTag>매수가격</PurchaseTag>
                        <PurchaseNumber>
                          {Number(
                            purchaseNum * stock.stockClose
                          ).toLocaleString()}
                        </PurchaseNumber>
                      </PurchaseItem>
                    </PurchaseBottom>
                  </StockPurchaseBox>
                </PurchaseBox>
              </StockDivRight>
            </StockInfoBackboard>
          </StockListContainer>
        }
      ></InlineContainer>
    </>
  );
};

export default StockInfoPage;
