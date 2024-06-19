import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import pointwallet from "../images/wallet.png";
import { useEffect, useState } from "react";
import {
  MyPageContainer,
  Pagename,
  MyPagetop,
  MyPagetopleft,
  MyPagetopright,
  MyPointBox,
  PointName,
  PointWallet,
  PointZone,
  PointAdd,
  MyTradingINfo,
  InerRectangle,
  InfoTitle,
  InfoBox,
  TotalBuy,
  TotalRevenue,
  RevenuePercent,
  BuyCount,
  RevenueCount,
  PercentCount,
  MyAssetBox,
  AssetTitle,
  AssetPoint,
  UpdownBox,
  GraphBox,
  MyPageBottom,
  BottomInnerBox,
  BottomTitle,
  TitleLine,
  StockInfoBox,
  StockInfoTitle,
  StockInfoTitleText,
  MyStockNumber,
  NumberBox,
  StockInfoText01,
  StockInfoText02,
  StockInfoText03,
  StockInfoText04,
  StockInfoText05,
  StockInfoText06,
  StockInfoText07,
  StockInfoText08,
} from "./MyStyle";
import MyChart from "./mycomponent/MyChart";
import MyPointModal from "./mycomponent/MyPointModal";
import CommonAxios from "../utils/common/CommonAxios";
import { Common } from "../utils/common/Common";
import WebSocketComponent from "../utils/common/WebSocket";

const MyPage = () => {
  // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.
  //내 주식 데이터 10개 반복, 추후에 데이터 불러오면, 무한스크롤? or 페이지네이션 적용.

  const [member, setMember] = useState("");
  const [stockList, setStockList] = useState([
    {
      name: "",
      code: "",
      buyCount: "",
      buyPrice: "",
      date: "",
    },
  ]);
  const [nameList, setNameList] = useState([]);
  const [socketList, setSocketList] = useState([]);

  // mypage controller
  const getMyPage = async () => {
    try {
      const accessToken = Common.getAccessToken();
      const multiDto = {
        accessToken: accessToken,
      };
      const res = await CommonAxios.postTokenAxios(
        "mypage",
        "getData",
        multiDto
      );

      if (res.status === 200) {
        setMember(res.data.memberDto);
        // stockDtoList와 buyDtoList의 유효성 검사
        if (
          res.data.stockDtoList &&
          res.data.buyDtoList &&
          res.data.stockDtoList.length === res.data.buyDtoList.length
        ) {
          const stockListData = [];
          for (let i = 0; i < res.data.stockDtoList.length; i++) {
            const stockData = {
              name: res.data.stockDtoList[i].종목명,
              code: res.data.stockDtoList[i].종목코드,
              buyCount: res.data.buyDtoList[i].buyCount,
              buyPrice: res.data.buyDtoList[i].buyPrice,
              date: res.data.buyDtoList[i].date,
            };

            stockListData.push(stockData);
          }
          const sortedStockList = stockListData.slice().sort((a, b) => {
            // Date 객체를 비교하여 정렬
            return new Date(b.date) - new Date(a.date);
          });
          setStockList(sortedStockList);
          // 웹소켓을 위한 이름 리스트 생성
          // set 객체를 활용한 중복값 제거
          const names = [...new Set(sortedStockList.map((data) => data.name))];
          console.log("names", names);
          setNameList(names);
        } else {
          console.error(
            "Invalid data: stockDtoList or buyDtoList is undefined or their lengths are different"
          );
        }
      } else {
        console.log("false");
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMyPage();
  }, []);

  useEffect(() => {
    const sockets = [];
    const getLatist = () => {
      setSocketList([]);
      for (const nameData of nameList) {
        const socket = WebSocketComponent(nameData, "");
        sockets.push(socket);
        socket.onmessage = (event) => {
          const message = event.data;
          try {
            const parsedMessage = JSON.parse(message);
            const stockObject = eval(`(${parsedMessage.message})`);
            // socketList에 return 값을 저장
            setSocketList((prevList) => {
              const newList = [...prevList, stockObject];
              if (newList.length > 3) {
                newList.shift();
              }
              // console.log("socketList :", newList);
              // console.log("member", member);
              return newList;
            });
          } catch (error) {
            console.error("Failed to parse JSON:", error);
          }
        };
      }
    };

    getLatist();

    // cleanup 함수
    return () => {
      // 모든 WebSocket 연결을 닫음
      sockets.forEach((socket) => {
        if (socket && socket.close) {
          socket.close();
        }
      });
    };
  }, [nameList]);

  const [openModal, setOpenModal] = useState(false); // 이 줄 추가

  return (
    <>
      <Header />
      <InlineContainer
        color=""
        contents={
          <MyPageContainer>
            <Pagename>{member?.nickName}님의 Portfolio</Pagename>

            <MyPagetop>
              <MyPagetopleft>
                <MyPointBox>
                  <PointName>
                    My Point
                    <PointWallet alt="포인트지갑" src={pointwallet} />
                  </PointName>
                  <PointZone>
                    {Number(member?.point).toLocaleString()}
                  </PointZone>
                  <PointAdd
                    onClick={() => {
                      console.log("Button clicked");
                      setOpenModal(true);
                    }}
                  >
                    충전하러 가기
                  </PointAdd>
                </MyPointBox>

                <MyTradingINfo>
                  <InerRectangle>
                    <InfoTitle>거래내역[매매내역]</InfoTitle>
                    <InfoBox>
                      <TotalBuy>
                        총 매입가
                        <BuyCount>
                          {Number(
                            stockList.reduce(
                              (sum, data) =>
                                sum + data.buyPrice * data.buyCount,
                              0
                            )
                          ).toLocaleString()}
                        </BuyCount>
                      </TotalBuy>

                      <TotalRevenue>
                        총 수익
                        <RevenueCount>
                          {Number(
                            stockList.reduce(
                              (sum, stock) =>
                                sum +
                                socketList
                                  .filter((socket) =>
                                    socket.latestStock.some(
                                      (data) => data?.stockName === stock.name
                                    )
                                  )
                                  .map(
                                    (filteredSocket) =>
                                      filteredSocket.latestStock.find(
                                        (data) => data?.stockName === stock.name
                                      )?.stockClose || 0
                                  ) *
                                  stock.buyCount,
                              0
                            )
                          ).toLocaleString()}
                        </RevenueCount>
                      </TotalRevenue>

                      <RevenuePercent>
                        수익률
                        <PercentCount>
                          {(
                            ((stockList.reduce(
                              (sum, stock) =>
                                sum +
                                socketList
                                  .filter((socket) =>
                                    socket.latestStock.some(
                                      (data) => data?.stockName === stock.name
                                    )
                                  )
                                  .map(
                                    (filteredSocket) =>
                                      filteredSocket.latestStock.find(
                                        (data) => data?.stockName === stock.name
                                      )?.stockClose || 0
                                  ) *
                                  stock.buyCount,
                              0
                            ) -
                              stockList.reduce(
                                (sum, data) =>
                                  sum + data.buyPrice * data.buyCount,
                                0
                              )) /
                              stockList.reduce(
                                (sum, data) =>
                                  sum + data.buyPrice * data.buyCount,
                                0
                              )) *
                            100
                          ).toLocaleString()}
                          %
                        </PercentCount>
                      </RevenuePercent>
                    </InfoBox>
                  </InerRectangle>
                </MyTradingINfo>
              </MyPagetopleft>

              <MyPagetopright>
                <MyAssetBox>
                  <AssetTitle>My Asset</AssetTitle>
                  <AssetPoint>
                    {Number(
                      stockList.reduce(
                        (sum, stock) =>
                          sum +
                          socketList
                            .filter((socket) =>
                              socket.latestStock.some(
                                (data) => data?.stockName === stock.name
                              )
                            )
                            .map(
                              (filteredSocket) =>
                                filteredSocket.latestStock.find(
                                  (data) => data?.stockName === stock.name
                                )?.stockClose || 0
                            ) *
                            stock.buyCount,
                        0
                      ) + member?.point
                    ).toLocaleString()}
                  </AssetPoint>
                  <UpdownBox>
                    {Number(
                      ((stockList.reduce(
                        (sum, stock) =>
                          sum +
                          socketList
                            .filter((socket) =>
                              socket.latestStock.some(
                                (data) => data?.stockName === stock.name
                              )
                            )
                            .map(
                              (filteredSocket) =>
                                filteredSocket.latestStock.find(
                                  (data) => data?.stockName === stock.name
                                )?.stockClose || 0
                            ) *
                            stock.buyCount,
                        0
                      ) +
                        member?.point -
                        (stockList.reduce(
                          (sum, data) => sum + data.buyPrice * data.buyCount,
                          0
                        ) +
                          member?.point)) /
                        (stockList.reduce(
                          (sum, data) => sum + data.buyPrice * data.buyCount,
                          0
                        ) +
                          member?.point)) *
                        100
                    ).toLocaleString()}
                    %
                  </UpdownBox>
                </MyAssetBox>

                <GraphBox>
                  <MyChart stockList={stockList} socketList={socketList} />
                </GraphBox>
              </MyPagetopright>
            </MyPagetop>

            <MyPageBottom>
              <BottomInnerBox>
                <BottomTitle>현재 보유 주식</BottomTitle>
                <TitleLine />

                <StockInfoBox>
                  <StockInfoTitle>
                    <StockInfoTitleText>종목명</StockInfoTitleText>
                    <StockInfoTitleText>종목 코드</StockInfoTitleText>
                    <StockInfoTitleText>매입가</StockInfoTitleText>
                    <StockInfoTitleText>매입 수량</StockInfoTitleText>
                    <StockInfoTitleText>총 매입가</StockInfoTitleText>
                    <StockInfoTitleText>현재가</StockInfoTitleText>
                    <StockInfoTitleText>수익률</StockInfoTitleText>
                    <StockInfoTitleText>구매 일자</StockInfoTitleText>
                  </StockInfoTitle>

                  <NumberBox>
                    {stockList.map((stock, index) => (
                      <MyStockNumber key={index}>
                        <StockInfoText01>{stock.name}</StockInfoText01>
                        <StockInfoText02>{stock.code}</StockInfoText02>
                        <StockInfoText03>
                          {Number(stock.buyPrice).toLocaleString()}
                        </StockInfoText03>
                        <StockInfoText04>
                          {Number(stock.buyCount).toLocaleString()}
                        </StockInfoText04>
                        <StockInfoText05>
                          {Number(
                            stock.buyPrice * stock.buyCount
                          ).toLocaleString()}
                        </StockInfoText05>
                        <StockInfoText06>
                          {Number(
                            socketList
                              .filter((socket) =>
                                socket.latestStock.some(
                                  (data) => data?.stockName === stock.name
                                )
                              )
                              .map(
                                (filteredSocket) =>
                                  filteredSocket.latestStock.find(
                                    (data) => data?.stockName === stock.name
                                  )?.stockClose || 0
                              )
                          ).toLocaleString()}
                        </StockInfoText06>
                        <StockInfoText07>
                          {Number(
                            ((socketList
                              .filter((socket) =>
                                socket.latestStock.some(
                                  (data) => data?.stockName === stock.name
                                )
                              )
                              .map(
                                (filteredSocket) =>
                                  filteredSocket.latestStock.find(
                                    (data) => data?.stockName === stock.name
                                  )?.stockClose || 0
                              ) -
                              stock.buyPrice) /
                              stock.buyPrice) *
                              100
                          ).toLocaleString()}
                          %
                        </StockInfoText07>
                        <StockInfoText08>{stock.date}</StockInfoText08>
                      </MyStockNumber>
                    ))}
                  </NumberBox>
                </StockInfoBox>
              </BottomInnerBox>
            </MyPageBottom>
          </MyPageContainer>
        }
      ></InlineContainer>

      <Footer />
      {openModal && (
        <MyPointModal setOpenModal={setOpenModal} member={member} />
      )}
    </>
  );
};

export default MyPage;
