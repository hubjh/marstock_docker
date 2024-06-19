import styled from "styled-components";
import headlogo from "../../images/LogoSymbolHorizonWhite.svg";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Common } from "../common/Common";
import MenuIcon from "../../images/HAMBURGER.png";

const Link = styled(RouterLink)`
  text-decoration: none;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 5rem;
  margin-top: 3rem;
`;

const MidBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5rem;
  width: 120rem;
  height: 100%;
  img {
    height: 3rem;
  }
  .link {
    display: flex;
    width: 40%;
    justify-content: space-between;
    font-size: 1.8rem;
    font-weight: 400;
    div {
      display: inline-block;
      color: white;
      line-height: 1;
    }
  }

  @media (max-width: 768px) {
    width: 44rem;
    padding: 0 3rem;
  }
`;

const MenuContainer = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  width: 4rem;
  height: 99%;
  background-color: rgba(255, 255, 255, 0.08);
  box-shadow: inset 5px 5px 5px -4px rgba(255, 255, 255, 0.4),
    inset -5px -5px 3px -1px rgba(0, 0, 0, 0.6),
    inset 30px 30px 120px -50px rgba(0, 0, 0, 0.9),
    inset -30px -30px 50px -50px rgba(255, 255, 255, 0.9),
    50px 50px 40px -15px rgba(17, 17, 17, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 5rem 0 0 5rem;

  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: ${(props) =>
    props.isOpen ? "transform 0.3s ease-in-out" : "none"};

  @media (min-width: 768px) {
    display: ${(props) => (props.isOpen ? "none" : "none")};
    position: relative;
    width: 4rem;
    height: auto;
    background-color: transparent;
    box-shadow: none;
    backdrop-filter: none;
    border-radius: 0;
    transform: none;
    transition: none;
  }
  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    top: 7rem;
    flex-direction: column;
    align-items: center;
    width: 50%; // adjust this value as needed
    gap: 0;
  }
`;

const Menubutton = styled.img`
  display: none;
  z-index: 2;

  @media (max-width: 769px) {
    display: block;
    cursor: pointer;
  }
`;

const Header = () => {
  // 헤더 로그인 상태 결정
  // 인터셉터 수정 필요: 로그인 상태 관리 필요
  const { updateLoginStatus, isLogin, logout, userRole } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // console.log("isLogin", isLogin);

  useEffect(() => {
    console.log("userRole", userRole);
    updateLoginStatus(userRole);
  }, [isLogin, logout]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Container>
        {isLogin ? (
          <MidBox>
            <Link to="/">
              <img src={headlogo} alt="logo" />
            </Link>
            <Menubutton src={MenuIcon} onClick={toggleMenu} />
            <MenuContainer isOpen={isMenuOpen} className="link">
              <Link to="/stockpage/1">
                <div id="stock">주식</div>
              </Link>
              <Link to="/news">
                <div id="news">뉴스</div>
              </Link>
              <Link to="/mypage">
                <div id="mypage">마이페이지</div>
              </Link>
              <Link to="/" onClick={() => logout()}>
                <div id="logout">로그아웃</div>
              </Link>
            </MenuContainer>
          </MidBox>
        ) : (
          <MidBox>
            <Link to="/">
              <img src={headlogo} alt="logo" />
            </Link>
            <Menubutton src={MenuIcon} onClick={toggleMenu} />
            <MenuContainer isOpen={isMenuOpen} className="link">
              <Link to="/stockpage/1">
                <div id="stock">주식</div>
              </Link>
              <Link to="/news">
                <div id="news">뉴스</div>
              </Link>
              <Link to="/signin">
                <div id="log">로그인</div>
              </Link>
              <Link to="/signup">
                <div id="sign">회원가입</div>
              </Link>
            </MenuContainer>
          </MidBox>
        )}
      </Container>
    </>
  );
};

export default Header;
