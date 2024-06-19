// import { useEffect, useState } from "react";
// import WebSocketComponent from "./common/WebSocket";
// import CommonAxios from "./common/CommonAxios";

// const Test = () => {
//   const [num, setNum] = useState();
//   const [switchTitle, setSwitchTitle] = useState("주식");
//   const [stockList, setStockList] = useState("고가");
//   const [stock, setStock] = useState([]);
//   // 데이터 프롭스
//   // 인덱스
//   const [all, setAll] = useState({
//     crawlExchangeDtoList: [],
//     crawlMarketDtoList: [],
//     crawlOilDtoList: [],
//     crawlGoldDtoList: [],
//     crawlMetalDtoList: [],
//     crawlEnergyDtoList: [],
//     crawlArgDtoList: [],
//     crawlStockDtoList: [],
//   });

//   // 데이터 가져오는 switch 케이스
//   const getIndex = async () => {
//     switch (switchTitle) {
//       case "시장지표":
//         if (all.crawlMarketDtoList.length === 0) {
//           try {
//             const res = await CommonAxios.getAxios("common", "index", "", "");
//             console.log("인덱스", res.data);
//             if (res.status === 200) {
//               setAll(res.data);
//               console.log("시장지표 실행");
//             } else {
//               console.log("인덱스 : False");
//             }
//           } catch (e) {
//             console.log(e);
//           }
//         } else {
//           console.log("시장지표 존재");
//         }
//         break;
//       case "주식":
//         console.log("주식 페이지 : ", stockList);
//         switch (stockList) {
//           case "고가":
//             getStock();
//             break;
//           case "PER":
//             getStock();
//             break;
//           case "EPS":
//             getStock();
//             break;
//           case "DIV":
//             getStock();
//             break;
//           default:
//             console.log("주식 switch 케이스 오류");
//             break;
//         }
//         break;
//       default:
//         console.log("switch 케이스 오류");
//         break;
//     }
//   };

//   // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.
//   const [selectedHeadTitle, setSelectedHeadTitle] = useState(null);
//   const [showStockListPage, setShowStockListPage] = useState(true);
//   const [showStockIndexPage, setShowStockIndexPage] = useState(false);
//   const [showStockDiscussionPage, setShowStockDiscussionPage] = useState(false);

//   const handleHeadTitleClick01 = (event) => {
//     if (selectedHeadTitle) {
//       selectedHeadTitle.style.color = "rgba(255, 255, 255, 0.7)";
//     }
//     event.target.style.color = "#ab81ff";
//     setSelectedHeadTitle(event.target);
//     setShowStockListPage(true);
//     setShowStockIndexPage(false);
//     setShowStockDiscussionPage(false);
//     setSwitchTitle("주식");
//   };

//   const handleHeadTitleClick02 = (event) => {
//     if (selectedHeadTitle) {
//       selectedHeadTitle.style.color = "rgba(255, 255, 255, 0.7)";
//     }
//     event.target.style.color = "#ab81ff";
//     setSelectedHeadTitle(event.target);
//     setSwitchTitle("종목토론");
//     setShowStockListPage(false);
//     setShowStockIndexPage(false);
//     setShowStockDiscussionPage(true);
//   };

//   const handleHeadTitleClick03 = (event) => {
//     if (selectedHeadTitle) {
//       selectedHeadTitle.style.color = "rgba(255, 255, 255, 0.7)";
//     }
//     event.target.style.color = "#ab81ff";
//     setSelectedHeadTitle(event.target);
//     setShowStockListPage(false);
//     setShowStockDiscussionPage(false);
//     setShowStockIndexPage(true);
//     setSwitchTitle("시장지표");
//   };

//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const handleCategoryClick = (event) => {
//     if (selectedCategory) {
//       selectedCategory.style.color = "rgba(255, 255, 255, 0.7)";
//     }
//     event.target.style.color = "#ffffff";
//     setSelectedCategory(event.target);
//     setStockList(event.target.textContent);
//   };

//   const getStock = async (socket) => {
//     try {
//       // onmessage 이벤트 핸들러를 정의하여 데이터를 처리하고 상태를 업데이트합니다.
//       socket.onmessage = (event) => {
//         const message = event.data;

//         // 여기서 데이터 처리 또는 상태 업데이트를 수행할 수 있습니다.
//         try {
//           const parsedMessage = JSON.parse(message);
//           console.log("제이슨 타입", parsedMessage.message);
//           // eval은 내장 함수로 만약 문자열이 객체형식이면 객체 형태로 반환한다.
//           const stockObject = eval(`(${parsedMessage.message})`);
//           setNum(parsedMessage.type);
//           setStock(stockObject);
//         } catch (error) {
//           console.error("Failed to parse JSON:", error);
//         }
//       };
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     const socket = WebSocketComponent("stockList", "", stockList);
//     getIndex(socket);
//     return () => {
//       // 컴포넌트가 언마운트되면 WebSocket 연결을 닫습니다.
//       socket.close();
//     };
//   }, [switchTitle, stockList, stock]);

//   return (
//     <>
//       <button onClick={handleCategoryClick}>고가</button>
//       <button onClick={handleCategoryClick}>EPS</button>
//       <button onClick={handleCategoryClick}>PER</button>
//       <button onClick={handleCategoryClick}>DIV</button>
//       {<p style={{ color: "white" }}>{num}</p>}
//       {stock.map((data, index) => (
//         <p key={index}>
//           <p style={{ color: "white" }}>{index + 1}</p>
//           <p to="/StockInfo">
//             <p style={{ color: "white" }}>{data.종목명}</p>
//           </p>
//           <p style={{ color: "white" }}>{data.고가}</p>
//           <p style={{ color: "white" }}>{data.등락률}</p>
//           <p style={{ color: "white" }}>{data.BPS}</p>
//           <p style={{ color: "white" }}>{data.PER}</p>
//           <p style={{ color: "white" }}>{data.DIV}</p>
//           <p style={{ color: "white" }}>{data.EPS}</p>
//         </p>
//       ))}
//     </>
//   );
// };

// export default Test;
