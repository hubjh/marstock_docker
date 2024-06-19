import { useState } from "react";
import { Background, InputContainer, Logo, InputBox, Link } from "./SignStyle";
import headlogo from "../images/LogoSymbolHorizonWhite.svg";
import CommonAxios from "../utils/common/CommonAxios";
import NoneBtnModalComponent from "../utils/component/NoneBtnModalComponent";

const FindIdPage = () => {
  const [tel, setTel] = useState();
  const [cnum, setCnum] = useState();
  const [email, setEmail] = useState([]);
  const [isModal, setIsModal] = useState(false);

  // SMS를 보내는 함수
  const handleSendMessage = async () => {
    try {
      const res = await CommonAxios.getAxios("sms", "send-mms", "tel", tel);
      console.log("휴대전화 번호", tel);
      console.log(res.data);
      if (res.data.statusCode === "2000") {
        alert("문자가 발송되었습니다.");
      } else {
        alert("전화 번호를 확인하십시오!!");
      }
    } catch (error) {
      // 오류 발생 시 처리
      alert("전화 번호 및 네트워크 연결을 확인하세요.");
      console.error("SMS 전송 실패:", error);
    }
  };

  // 인증 번호를 보내는 함수
  const handleSendCnum = async () => {
    const memberDto = {
      cnum: cnum,
      phone: tel,
    };
    try {
      const res = await CommonAxios.postAxios("sms", "findEmail", memberDto);
      if (res.status === 200) {
        console.log(res.data);
        setEmail(res.data);
        setIsModal(true);
        alert("인증 성공");
      } else {
        alert("인증 실패");
      }
    } catch (error) {
      console.log("인증 연결 실패", error);
    }
  };
  return (
    <>
      <Background>
        <Link to="/">
          <Logo src={headlogo} alt="logo" />
        </Link>
        <InputContainer style={{ gap: "2rem" }}>
          <div id="title">Find Id</div>
          <InputBox
            id="inputid"
            placeholder="Phone"
            onChange={(event) => setTel(event.target.value)}
          ></InputBox>
          <div id="codebutton" onClick={handleSendMessage}>
            인증번호 전송
          </div>
          <InputBox
            id="inputpw"
            placeholder="Code"
            onChange={(event) => setCnum(event.target.value)}
          ></InputBox>
          <div id="codebutton" onClick={handleSendCnum}>
            인증번호 확인
          </div>
          <div id="linktext">
            <Link
              to={"/findpw"}
              style={{ textAlign: "center", marginTop: "2rem" }}
            >
              <span id="forgetpw">비밀번호가 기억나지 않아요</span>
            </Link>
          </div>
          <Link to={"/signup"}>
            <div id="linktext" style={{ textAlign: "center" }}>
              아직 계정이 없으신가요?
            </div>
          </Link>
          <NoneBtnModalComponent
            closeModalHandler={() => setIsModal(false)}
            isOpen={isModal}
            customButton={false}
            closeText="확인"
            content={
              <>
                <p>회원님의 이메일.</p>
                {email.map((data, index) => (
                  <p key={index}>{data}</p>
                ))}
              </>
            }
          />
        </InputContainer>
      </Background>
    </>
  );
};

export default FindIdPage;
