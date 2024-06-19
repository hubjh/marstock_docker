import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./utils/style/GlobalStyle";
import MainPage from "./main/MainPage";
import FormPage from "./form/FormPage";
import SigninPage from "./sign/SigninPage";
import SignupPage from "./sign/SignupPage";
import FindIdPage from "./sign/FindIdPage";
import FindPwPage from "./sign/FindPwPage";
import StockPage from "./stock/StockPage";
import StockInfoPage from "./stock/StockInfoPage";
import MyPage from "./my/MyPage";
import AdminPage from "./admin/AdminPage";
import NewsPage from "./news/NewsPage";
import WebSocketComponent from "./utils/common/WebSocket";
import Success from "./utils/component/Success";
import { AuthProvider } from "./context/AuthContext";
import WsTest from "./WsTest";
import SolarSystem from "./utils/style/OrbitPage";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import KakaoLogin from "./api/KaKao";
import ScrollRemote from "./utils/component/ScrollRemote";

function RoutesWithLoading() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // 10 seconds delay
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
        <ScrollRemote/>
      {isLoading ? (
        <SolarSystem />
      ) : (
        <Routes>
          <Route path="/stockpage/:click" element={<StockPage />} />

          <Route path="/" element={<MainPage />} />
          <Route path="/ws" element={<WebSocketComponent />} />
          <Route path="/ws-stockinfo" element={<WsTest />} />

          <Route path="/stockInfo/:name" element={<StockInfoPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/news" element={<NewsPage />} />

          <Route path="/form" element={<FormPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/kakao" element={<KakaoLogin />} />

          <Route path="/findid" element={<FindIdPage />} />
          <Route path="/findpw" element={<FindPwPage />} />
        </Routes>
      )}
    </>
  );
}

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Router>
          <RoutesWithLoading />
          {/* <Routes> */}
          {/* <Route path="/stockpage" element={<StockPage />} />
            <Route path="/test" element={<Test />} />

            <Route path="/" element={<MainPage />} />
            <Route path="/ws" element={<WebSocketComponent />} />
            <Route path="/ws-stockinfo" element={<WsTest />} />

            <Route path="/stockInfo/:name" element={<StockInfoPage />} />
            <Route path="/stockList" element={<StockListPage />} />
            <Route path="/stockIndex" element={<StockIndexPage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/news" element={<NewsPage />} />

            <Route path="/form" element={<FormPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/findid" element={<FindIdPage />} />
            <Route path="/findpw" element={<FindPwPage />} /> */}

          {/* </Routes> */}
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
