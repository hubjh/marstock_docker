import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import React, { useState, useEffect } from "react";
import CommonAxios from "../utils/common/CommonAxios";
import WebSocketComponent from "../utils/common/WebSocket";
import { useNavigate } from "react-router-dom";
import {
  StockContainer,
  StockHeadTitle,
  StockHeadTitle01,
  StockHeadTitle02,
  StockHeadTitle03,
} from "./StockStyle";
import StockIndexPage from "./StockIndexPage";
import StockListPage from "./StockListPage";
import StockCommunityPage from "./StockCommunityPage";
import { useParams } from "react-router-dom";

const StockPage = () => {
  const [num, setNum] = useState();
  const [switchTitle, setSwitchTitle] = useState("주식");
  const [stockList, setStockList] = useState("고가");
  const [stock, setStock] = useState([]);
  // 데이터 프롭스
  // 인덱스
  const [all, setAll] = useState({
    crawlDomesticIndicatorsDtoList: [],
    crawlExchangeDtoList: [],
    crawlMarketDtoList: [],
    crawlOilDtoList: [],
    crawlGoldDtoList: [],
    crawlMetalDtoList: [],
    crawlEnergyDtoList: [],
    crawlArgDtoList: [],
    crawlStockDtoList: [],
    crawlSearchDtos: [],
  });

  const { click } = useParams();
  const navigate = useNavigate();

  // 데이터 가져오는 switch 케이스
  const getIndex = async (socket) => {
    switch (switchTitle) {
      case "시장지표":
        if (all.crawlMarketDtoList.length === 0) {
          try {
            // 시장 지표는 비동기 restfull api 사용
            socket.close();
            const res = await CommonAxios.getAxios("common", "index", "", "");
            console.log("인덱스", res.data);
            if (res.status === 200) {
              setAll(res.data);
              console.log("시장지표 실행");
            } else {
              console.log("인덱스 : False");
            }
          } catch (e) {
            console.log(e);
          }
        } else {
          console.log("시장지표 존재");
        }
        break;
      case "주식":
        console.log("주식 페이지 : ", stockList);
        switch (stockList) {
          case "고가":
            getStock(socket);
            break;
          case "PER":
            getStock(socket);
            break;
          case "EPS":
            getStock(socket);
            break;
          case "DIV":
            getStock(socket);
            break;
          default:
            console.log("주식 switch 케이스 오류");
            break;
        }
        break;
      default:
        console.log("switch 케이스 오류");
        break;
    }
  };

  const getStock = async (socket) => {
    // const socket = WebSocketComponent("stockList", "", stockList);

    // onmessage 이벤트 핸들러를 정의하여 데이터를 처리하고 상태를 업데이트합니다.
    socket.onmessage = (event) => {
      const message = event.data;
      // console.log("getStock 메세지", message);
      // 여기서 데이터 처리 또는 상태 업데이트를 수행할 수 있습니다.
      try {
        const parsedMessage = JSON.parse(message);
        // console.log("제이슨 타입", parsedMessage.message);
        // eval은 내장 함수로 만약 문자열이 객체형식이면 객체 형태로 반환한다.
        const stockObject = eval(`(${parsedMessage.message})`);
        setNum(parsedMessage.type);
        setStock(stockObject);
      } catch (error) {
        console.error("Failed to parse JSON:", error);
      }
    };
  };

  // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.
  const [selectedHeadTitle, setSelectedHeadTitle] = useState(null);
  const [showStockListPage, setShowStockListPage] = useState(true);
  const [showStockIndexPage, setShowStockIndexPage] = useState(false);
  const [showStockDiscussionPage, setShowStockDiscussionPage] = useState(false);

  const handleHeadTitleClick01 = (event) => {
    if (selectedHeadTitle) {
      selectedHeadTitle.style.color = "rgba(255, 255, 255, 0.7)";
    }
    event.target.style.color = "#ab81ff";
    setSelectedHeadTitle(event.target);
    setShowStockListPage(true);
    setShowStockIndexPage(false);
    setShowStockDiscussionPage(false);
    setSwitchTitle("주식");
  };

  const handleHeadTitleClick02 = (event) => {
    if (selectedHeadTitle) {
      selectedHeadTitle.style.color = "rgba(255, 255, 255, 0.7)";
    }
    event.target.style.color = "#ab81ff";
    setSelectedHeadTitle(event.target);
    setSwitchTitle("종목토론");
    setShowStockListPage(false);
    setShowStockIndexPage(false);
    setShowStockDiscussionPage(true);
  };

  const handleHeadTitleClick03 = (event) => {
    if (selectedHeadTitle) {
      selectedHeadTitle.style.color = "rgba(255, 255, 255, 0.7)";
    }
    event.target.style.color = "#ab81ff";
    setSelectedHeadTitle(event.target);
    setShowStockListPage(false);
    setShowStockDiscussionPage(false);
    setShowStockIndexPage(true);
    setSwitchTitle("시장지표");
  };

  // 데이터 컨트롤 useEffect
  useEffect(() => {
    // console.log(click);
    if (click === "0") {
      setSwitchTitle("종목토론");
      setShowStockListPage(false);
      setShowStockIndexPage(false);
      setShowStockDiscussionPage(true);
      navigate("/stockpage/1", { replace: true });
    } else {
      const socket = WebSocketComponent("stockList", stockList);
      getIndex(socket);
      return () => {
        // 컴포넌트가 언마운트되면 WebSocket 연결을 닫습니다.
        socket.close();
      };
    }
  }, [switchTitle, stockList]);

  return (
    <>
      <Header />
      <StockContainer>
        <StockHeadTitle>
          <StockHeadTitle01 onClick={handleHeadTitleClick01}>
            주식
          </StockHeadTitle01>
          <StockHeadTitle02 onClick={handleHeadTitleClick02}>
            종목토론
          </StockHeadTitle02>
          <StockHeadTitle03 onClick={handleHeadTitleClick03}>
            시장지표
          </StockHeadTitle03>
        </StockHeadTitle>
        {<p style={{ color: "white" }}>{num}</p>}

        {showStockListPage && (
          <StockListPage stock={stock} setStockList={setStockList} />
        )}
        {showStockDiscussionPage && <StockCommunityPage />}
        {showStockIndexPage && <StockIndexPage all={all} />}
      </StockContainer>
      <Footer />
    </>
  );
};

export default StockPage;
