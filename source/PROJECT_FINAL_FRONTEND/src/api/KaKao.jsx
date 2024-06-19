import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CommonAxios from "../utils/common/CommonAxios";
import { Common } from "../utils/common/Common";
import { useAuth } from "../context/AuthContext";

const KakaoLogin = () => {
  const { login } = useAuth();
  const usenavigator = useNavigate();

  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");

  // 카카오 인증 코드가 변경 될 때, 실행
  useEffect(() => {
    handleKakao();
  }, [code]);

  // 카카오 이메일을 발급받고 토큰 발급
  const handleKakao = async () => {
    console.log("코드의 값 : ", code);
    try {
      const res = await CommonAxios.getAxios("member", "kakao", "code", code);
      if (res.status === 200) {
        const kakao = res.data;
        console.log("카카오 이메일 : ", kakao);
        const response = await CommonAxios.getAxios(
          "member",
          "isExist",
          "email",
          kakao
        );
        console.log("카카오 이메일 중복 체크", response);
        if (response.data === true) {
          // 아이디 존재 => main 페이지로 이동 및 토큰 발급
          // 카카오 로그인 토큰 발급
          const kakaoRes = await CommonAxios.getAxios(
            "member",
            "kakaoToken",
            "email",
            kakao
          );
          console.log("카카오 토큰", kakaoRes);
          Common.setAccessToken(kakaoRes.data.accessToken);
          login(kakaoRes.data.role);
          alert("로그인 성공");
          usenavigator("/");
        } else {
          // 아이디 존재 x => 회원 가입
          alert("회원 가입이 필요합니다.");
          usenavigator("/signup");
        }
      }
    } catch (error) {
      console.log("카카오 로그인 연결 실패 : ", error);
    }
  };
};

export default KakaoLogin;
