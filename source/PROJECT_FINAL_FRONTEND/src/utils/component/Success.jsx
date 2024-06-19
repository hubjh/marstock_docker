import { useLocation, useNavigate } from "react-router-dom";
import CommonAxios from "../common/CommonAxios";
import { Common } from "../common/Common";
import styled from "styled-components";
import logo from "../../images/LogoSymbolHorizonWhite.svg"
const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  #info {
    width: 40rem;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15rem;
  }

  #logo {
    width: 30rem;
    margin-bottom: 15rem;
  }
  #text {
    font-size: 3rem;
    font-weight: bold;
    color: white;
    margin-bottom: 2rem;
  }
  #minitext {
    font-size: 2rem;
    font-weight: 500;
    color: var(--mainlightpurple);
    margin-bottom: 5rem;
    text-align: center;
  }

  button {
    width: 20rem;
    height: 5rem;
    background-color: var(--mainpurple);
    color: white;
    font-size: 2rem;
    font-weight: bold;
    border-radius: 1.5rem;
    cursor: pointer;
    &:hover {
      background-color: var(--mainlightpurple);
      transform: scale(1.05);
      transition: all 0.1s ease-in-out;
    }
    &:active {
      background-color: var(--mainpurple);
    }
  }

`;


const Success = () => {
  const navigate = useNavigate();
  // url 패스 설정에서 price 변수 가져오기
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const price = searchParams.get("price");

  const onClickSuccess = async () => {
    try {
      const accessToken = Common.getAccessToken();
      const memberDto = {
        point: price,
      };
      const multiDto = {
        accessToken: accessToken,
        memberDto: memberDto,
      };
      const res = await CommonAxios.postTokenAxios(
        "mypage",
        "savePoint",
        multiDto
      );
      console.log("금액 충전 : " + res.data);

      if (res.data === true) {
        alert("결제 성공");
        navigate("/mypage");
      } else {
        alert("결제 실패");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Container>
      <div>
        <div id="info">
          <img id="logo" src={logo} alt="logo"/>
          <div id="text">결제가 완료되었습니다.</div>
          <div id="minitext">가상계좌 충전 결제가 <br/>성공적으로 완료되었습니다.</div>
          <button onClick={onClickSuccess}>결제 완료</button>
        </div>
      </div>
      </Container>
    </>
  );
};

export default Success;
