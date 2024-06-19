import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import { useState, useEffect } from "react";
import { MyStockNumber } from "../my/MyStyle";
import CommonAxios from "../utils/common/CommonAxios";
import formatDate from "../utils/component/FormatDate";

import {
  AdminContainer,
  AdminHello,
  Hello1,
  Hello2,
  MemberListBox,
  MemberListTitle,
  LitstTitle01,
  LitstTitle02,
  LitstTitle03,
  LitstTitle04,
  LitstTitle05,
  LitstTitle06,
  MemberListInfo,
  ListInfo01,
  ListInfo02,
  ListInfo03,
  ListInfo04,
  ListInfo05,
  ListInfo06,
  MemberStockInfoBox,
  MemberStockTitle,
  StockTitle01,
  StockTitle02,
  StockTitle03,
  StockTitle04,
  StockTitle05,
  StockTitle06,
  StockTitle07,
  StockTitle08,
  StockTitle09,
  MemberStockInfo,
  StockListInfo01,
  StockListInfo02,
  StockListInfo03,
  StockListInfo04,
  StockListInfo05,
  StockListInfo06,
  StockListInfo07,
  StockListInfo08,
  StockListInfo09,
} from "./AdminStyle";
import AdminSearch from "./admincomponent/AdminSearch";

const AdminPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [checkSearch, setCheckSearch] = useState(false);
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

  const handleCheckSearch = () => {
    setCheckSearch(false);
    setKeyword("");
  };

  // 구매 내역 조회
  const getInfo = async (email) => {
    try {
      // const accessToken = Common.getAccessToken();
      const memberDto = {
        memberEmail: email,
      };
      const multiDto = {
        // accessToken: accessToken,
        memberDto: memberDto,
      };
      const res = await CommonAxios.postAxios("admin", "getUserBuy", multiDto);
      if (res.status === 200) {
        console.log(res.data);
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
    const adminFetchData = async () => {
      try {
        const response = await CommonAxios.getPageableAxios("admin", "search", {
          keyword,
          currentPage,
          pageSize: 10,
          orderBy: "memberEmail,desc",
        });
        console.log(response.data.totalPages); // 토탈 페이지
        console.log(response.data); // 토탈 페이지
        setSearchResults(response.data.content);
      } catch (error) {
        console.error("Error searching:", error);
      }
    };

    if (checkSearch) {
      adminFetchData();
      handleCheckSearch();
    }
  }, [checkSearch]);

  return (
    <>
      <Header />

      <AdminHello>
        <Hello1>Welcome</Hello1>
        <Hello2>Admin !</Hello2>
      </AdminHello>

      <InlineContainer
        color=""
        contents={
          <AdminContainer>
            <AdminSearch
              setKeyword={setKeyword}
              setCheckSearch={setCheckSearch}
            />

            <MemberListBox>
              <MemberListTitle>
                <LitstTitle01>E-mail</LitstTitle01>
                <LitstTitle02>닉네임</LitstTitle02>
                <LitstTitle03>핸드폰</LitstTitle03>
                <LitstTitle04>가입일</LitstTitle04>
                <LitstTitle05>생년월일</LitstTitle05>
                <LitstTitle06>활동여부</LitstTitle06>
              </MemberListTitle>

              {searchResults.map((member, index) => (
                <MemberListInfo
                  key={index}
                  onClick={() => getInfo(member.memberEmail)}
                >
                  <ListInfo01>{member.memberEmail}</ListInfo01>
                  <ListInfo02>{member.nickName}</ListInfo02>
                  <ListInfo03>{member.phone}</ListInfo03>
                  <ListInfo04>{formatDate(member.registrationDate)}</ListInfo04>
                  <ListInfo05>{formatDate(member.birth)}</ListInfo05>
                  <ListInfo06>
                    {member.authority === "ROLE_USER"
                      ? "일반"
                      : member.authority}
                  </ListInfo06>
                </MemberListInfo>
              ))}
            </MemberListBox>

            <MemberStockInfoBox>
              <MemberStockTitle>
                <StockTitle01>종목명</StockTitle01>
                <StockTitle02>종목코드</StockTitle02>
                <StockTitle03>매입가</StockTitle03>
                <StockTitle04>매입수량</StockTitle04>
                <StockTitle05>총 매입가</StockTitle05>
                {/* <StockTitle06>현재가</StockTitle06>
                <StockTitle07>수익률</StockTitle07>
                <StockTitle08>총 수익액</StockTitle08> */}
                <StockTitle09>날짜</StockTitle09>
              </MemberStockTitle>

              {stockList.map((stock, index) => (
                <MemberStockInfo key={index}>
                  <StockListInfo01>{stock.name}</StockListInfo01>
                  <StockListInfo02>{stock.code}</StockListInfo02>
                  <StockListInfo03>
                    {Number(stock.buyPrice).toLocaleString()}
                  </StockListInfo03>
                  <StockListInfo04>
                    {Number(stock.buyCount).toLocaleString()}
                  </StockListInfo04>
                  <StockListInfo05>
                    {Number(stock.buyPrice * stock.buyCount).toLocaleString()}
                  </StockListInfo05>
                  {/* <StockListInfo06>
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
                  </StockListInfo06>
                  <StockListInfo07>
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
                  </StockListInfo07> */}
                  <StockListInfo09>{stock.date}</StockListInfo09>
                </MemberStockInfo>
              ))}

              {/* <MemberStockInfo>
                <StockListInfo01>삼성전자</StockListInfo01>
                <StockListInfo02>005930</StockListInfo02>
                <StockListInfo03>73,000</StockListInfo03>
                <StockListInfo04>100</StockListInfo04>
                <StockListInfo05>73,000,000</StockListInfo05>
                <StockListInfo06>65,700</StockListInfo06>
                <StockListInfo07>-10%</StockListInfo07>
                <StockListInfo08>6,570,000</StockListInfo08>
                <StockListInfo09>구매날짜</StockListInfo09>
              </MemberStockInfo> */}
            </MemberStockInfoBox>
          </AdminContainer>
        }
      ></InlineContainer>
      <Footer />
    </>
  );
};
export default AdminPage;
