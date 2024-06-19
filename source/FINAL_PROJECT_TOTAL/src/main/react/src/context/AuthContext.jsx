import React, { createContext, useContext, useState } from "react";
import { Common } from "../utils/common/Common";
// createContext를 사용하여 새로운 컨텍스트를 생성
const AuthContext = createContext();

// AuthProvider 컴포넌트 정의
export const AuthProvider = ({ children }) => {
  // 회원의 역할 정보 체크 및 어드민인 경우 기능 추가, 헤더 변경
  const [userRole, setUserRole] = useState(null); // 사용자 역할(Role) 상태
  const [isLogin, setIsLogin] = useState(false);

  // 상태 체크
  const updateLoginStatus = (userRole) => {
    if (userRole) {
      console.log("로그인 상태입니다.");
      setIsLogin(true);
    } else {
      console.log("로그인 상태가 아닙니다.");
      setIsLogin(false);
    }
  };

  // 로그인
  const login = (role) => {
    setIsLogin(true);
    setUserRole(role);
  };
  // 로그아웃
  const logout = () => {
    console.log("로그아웃 함수 실행");
    // 로그아웃 시 액세스 토큰과 사용자 역할 상태를 초기화
    setUserRole(null);
    const accessToken = Common.getAccessToken();
    if (accessToken) {
      window.localStorage.clear();
      setIsLogin(false);
    } else {
      setIsLogin(false);
    }
  };

  // 컨텍스트 프로바이더 반환
  return (
    <AuthContext.Provider
      value={{ userRole, isLogin, updateLoginStatus, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 컨텍스트 훅(useAuth) 정의
export const useAuth = () => {
  return useContext(AuthContext);
};
