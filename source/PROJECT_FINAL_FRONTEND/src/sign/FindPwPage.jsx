import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import styled from "styled-components";
import { useState } from "react";
import { Background, InputContainer, Logo, InputBox, Link } from "./SignStyle";
import headlogo from "../images/LogoSymbolHorizonWhite.svg";
import CommonAxios from "../utils/common/CommonAxios";

const FindPwPage = () => {
  const [email, setEmail] = useState();
  const [EPW, setEPW] = useState();
  // 인증 함수
  const authEmail = async () => {
    try {
      const res = await CommonAxios.getAxios(
        "member",
        "findPasswordCheck",
        "email",
        email
      );
      if (res.data === true) {
        alert("이메일 전송");
      } else {
        alert("이미 존재하는 이메일입니다.");
      }
    } catch (error) {
      alert("이메일 전송 실패");
      console.log("이메일 입력:", error);
    }
  };

  // 입력받은 인증번호 체크
  const checkEPW = async () => {
    console.log(EPW);
    console.log(email);
    const memberDto = {
      memberEmail: email,
      cnum: EPW,
    };
    try {
      const res = await CommonAxios.postAxios(
        "member",
        "findPassword",
        memberDto
      );
      if (res.status === 200) {
        console.log(res.data);
        alert("새로운 비밀번호 : " + res.data);
      } else {
        alert("인증 실패");
      }
    } catch (error) {
      alert("연결 실패");
    }
  };

  return (
    <>
      <Background>
        <Link to="/">
          <Logo src={headlogo} alt="logo" />
        </Link>
        <InputContainer style={{ gap: "2rem" }}>
          <div id="title">Find Pw</div>
          <InputBox
            id="inputid"
            placeholder="E-Mail"
            onChange={(event) => setEmail(event.target.value)}
          ></InputBox>
          <div id="codebutton" onClick={authEmail}>
            인증번호 전송
          </div>
          <InputBox
            id="inputpw"
            placeholder="Code"
            value={EPW}
            onChange={(event) => setEPW(event.target.value)}
          ></InputBox>
          <div id="codebutton" onClick={checkEPW}>
            인증번호 확인
          </div>
          <div id="linktext">
            <Link
              to={"/findid"}
              style={{ textAlign: "center", marginTop: "2rem" }}
            >
              <span id="forgetpw">이메일이 기억나지 않아요</span>
            </Link>
          </div>
          <Link to={"/signup"}>
            <div id="linktext" style={{ textAlign: "center" }}>
              아직 계정이 없으신가요?
            </div>
          </Link>
        </InputContainer>
      </Background>
    </>
  );
};

export default FindPwPage;
