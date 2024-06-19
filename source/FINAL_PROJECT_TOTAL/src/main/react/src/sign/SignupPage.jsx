import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Background,
  InputContainer,
  Logo,
  InputBox,
  CheckBox,
  CheckBoxLabel,
  Link,
} from "./SignStyle";
import headlogo from "../images/LogoSymbolHorizonWhite.svg";
import NoneBtnModalComponent from "../utils/component/NoneBtnModalComponent";
import CommonAxios from "../utils/common/CommonAxios";
import SmsApi from "../api/SmsApi";

const SignupPage = () => {
  const navigator = useNavigate();
  const emailInputRef = useRef(null);
  useEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, [emailInputRef]);

  const [allAgree, setAllAgree] = useState(false);
  const [termsAgree, setTermsAgree] = useState(false);
  const [privacyAgree, setPrivacyAgree] = useState(false);
  const [openEmailModal, setOpenEmailModal] = useState(false);
  const [sms, setSms] = useState(false);

  // 입력 변수 설정
  const [email, setEmail] = useState();
  const [EPW, setEPW] = useState();
  const [nickName, setNickName] = useState();
  const [tel, setTel] = useState();
  const [cnum, setCnum] = useState();
  const [inputPassword, setInputPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [birth, setBirth] = useState();

  // 회원 가입 상태 체크
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isInputPassword, setIsInputPassword] = useState(false);
  const [isNickName, setIsNickName] = useState(false);
  const [isTel, setIsTel] = useState(false);

  // 회원 가입 전개 연산자
  const isSignupValid = () => {
    const inputVariables = {
      isEmail,
      isNickName,
      isTel,
      isInputPassword,
    };
    // 모든 입력 변수들이 채워져 있는지 확인
    // 스트림 혹은 맵과 같이 input이라는 하나하나 입력의 변수를 활용
    const isAllFilled = Object.values(inputVariables).every(
      (input) => input === true
    );
    // 이용약관 및 개인정보처리방침에 동의했는지 확인
    const isAgreed = allAgree && termsAgree && privacyAgree;
    // 모든 조건을 만족하면 true 반환, 그렇지 않으면 false 반환
    return isAllFilled && isAgreed;
  };

  // 회원 가입
  const handleSignup = async () => {
    if (isSignupValid()) {
      try {
        const res = await CommonAxios.postAxios("member", "sign", {
          memberEmail: email,
          memberPassword: inputPassword,
          phone: tel,
          nickName: nickName,
          birth: birth,
        });
        if (res.status === 200) {
          alert("회원가입 성공!");
          navigator("/signin");
        } else {
          alert("회원가입 실패!");
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      alert("입력 정보를 확인하고 모든 약관에 동의하세요.");
    }
  };

  // 이메일 모달
  const isEmailModal = () => {
    setOpenEmailModal(true);
  };
  const closeEmailModal = () => {
    setOpenEmailModal(false);
  };

  // 약관 동의
  const handleAllAgree = (e) => {
    setAllAgree(e.target.checked);
    setTermsAgree(e.target.checked);
    setPrivacyAgree(e.target.checked);
  };

  // 이메일 인증
  const checkEmail = (e) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const email = e.target.value;
    if (emailRegex.test(email)) {
      // setOpenEmailModal(true);
      setEmail(email);
    }
  };

  // 이메일 모달 오픈
  const onClickEmailCheck = () => {
    setOpenEmailModal(true);

    setEmail(email);
    // 인증함수 실행
    authEmail(email);
    // 모달 오픈
    isEmailModal();
  };

  // 인증 함수
  const authEmail = async (email) => {
    try {
      const res = await CommonAxios.getAxios(
        "member",
        "mailConfirm",
        "email",
        email
      );
      if (res.data === true) {
        // 입력 모달 등장
        alert("이메일 전송");
      } else {
        alert("이미 존재하는 이메일입니다.");
      }
    } catch (error) {
      alert("이메일 전송 실패");
      console.log("이메일 입력:", error);
    }
  };

  // 인증번호 입력
  const onChangeEpw = (e) => {
    setEPW(e.target.value);
  };

  // 입력받은 인증번호 체크
  const checkEPW = async () => {
    try {
      const res = await CommonAxios.getAxios("member", "ePw", "epw", EPW);
      if (res.data === true) {
        alert("인증 성공");
        setIsEmail(true);
      } else {
        alert("인증 실패");
        setIsEmail(false);
      }
    } catch (error) {
      alert("연결 실패");
    }
  };

  // 비밀번호 입력
  const onChangePassword = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    if (passwordRegex.test(passwordCurrent)) {
      setInputPassword(passwordCurrent);
      setIsPassword(true);
    } else {
      setIsPassword(false);
    }
  };
  // 비밀번호 확인
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  // 비밀번호 및 비밀번호 확인 체크
  const checkPassword = () => {
    if (inputPassword !== "" && confirmPassword !== "") {
      if (inputPassword === confirmPassword) {
        setIsInputPassword(true);
      } else {
        setIsInputPassword(false);
      }
    } else {
      setIsInputPassword(false);
    }
  };

  // 닉네임 입력
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };
  // 닉네임 중복 체크
  const onClickCheckNickName = async () => {
    try {
      if (nickName) {
        const checkNickName = await CommonAxios.getAxios(
          "member",
          "nickName",
          "nickName",
          nickName
        );
        // 중복이 없어야 true 설정. false를 받아야 중복이 없는것.
        // console.log(checkNickName.data);
        if (checkNickName.data === true) {
          setIsNickName(true);
        } else {
          setIsNickName(true);
        }
      } else {
        alert("닉네임을 입력하세요");
      }
    } catch (error) {
      console.log("닉네임 입력 정보를 확인하십시오.", error);
    }
  };

  // 휴대전화 번호
  const onChangeTel = (e) => {
    const tel = e.target.value;
    const telReg = /^\d{11}$/;
    if (telReg.test(tel)) {
      setSms(true);
      setTel(tel);
    } else {
      setSms(false);
    }
  };

  // 인증 번호
  const onChangeCnum = (event) => {
    setCnum(event.target.value);
  };

  const CloseSms = () => {
    setSms(false);
  };

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
    try {
      const res = await CommonAxios.getAxios("sms", "check", "cnum", cnum);
      if (res.data === true) {
        alert("인증 성공");
        setIsTel(true);
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
        <InputContainer>
          <div id="title">Sign up</div>
          <div id="inputcontainerin">
            <div className="inputarea">
              <InputBox
                placeholder="E-Mail"
                ref={emailInputRef}
                onChange={checkEmail}
              ></InputBox>
              <div
                className="inputbutton"
                onClick={onClickEmailCheck}
                style={{ top: "34.7rem", left: "49.8rem" }}
              >
                중복확인
              </div>
            </div>
            <div className="checktext">
              {isEmail ? "이메일 확인" : "이메일을 확인하세요."}
            </div>
            <NoneBtnModalComponent
              closeModalHandler={closeEmailModal}
              isOpen={openEmailModal}
              customButton={false}
              closeText="확인"
              content={
                <>
                  <p style={{ color: "var(--mainpurple)", fontWeight: "bold" }}>
                    인증 번호를 입력해주세요.
                  </p>
                  <InputBox
                    style={{
                      backgroundColor: "white",
                      color: "black",
                    }}
                    placeholder="인증번호"
                    onChange={onChangeEpw}
                  ></InputBox>
                  <button
                    style={{
                      border: "1px solid var(--mainlightpurple)",
                      borderRadius: "30px",
                      backgroundColor: "var(--mainpurple)",
                      color: "white",
                      width: "5rem",
                      height: "4rem",
                      marginLeft: "1rem",
                      cursor: "pointer",
                    }}
                    onClick={checkEPW}
                  >
                    확인
                  </button>
                </>
              }
            />
            <InputBox
              placeholder="Password"
              type="password"
              onChange={onChangePassword}
              style={{ width: "28.333rem" }}
            ></InputBox>
            <div className="checktext">
              {isPassword
                ? "유효한 비밀번호 입니다."
                : "비밀번호는 문자, 숫자, 특수문자가 포함된 8~25자 입니다."}
            </div>
            <InputBox
              placeholder="Confirm Password"
              type="password"
              onChange={onChangeConfirmPassword}
              onBlur={checkPassword}
              style={{ width: "28.333rem" }}
            ></InputBox>
            <div className="checktext">
              {isInputPassword
                ? "비밀번호가 일치합니다."
                : "비밀번호를 확인하십시오."}
            </div>
            <div className="inputarea">
              <InputBox
                placeholder="Phone"
                onChange={onChangeTel}
                // onBlur={onBlurSms}
              ></InputBox>
              <div
                className="inputbutton"
                onClick={handleSendMessage}
                style={{ top: "34.7rem", left: "49.8rem" }}
              >
                중복확인
              </div>
            </div>
            <div className="checktext">{}</div>
            <NoneBtnModalComponent
              isOpen={sms}
              customButton={false}
              closeModalHandler={CloseSms}
              closeText="확인"
              content={
                <>
                  <SmsApi
                    onChange={onChangeTel}
                    send={handleSendMessage}
                    cn={handleSendCnum}
                    cnum={cnum}
                    tel={tel}
                    onChangeCnum={onChangeCnum}
                  />
                </>
              }
            />
            <div className="inputarea">
              <InputBox
                placeholder="Nickname"
                onChange={onChangeNickName}
              ></InputBox>
              <div
                className="inputbutton"
                onClick={onClickCheckNickName}
                style={{ top: "34.7rem", left: "49.8rem" }}
              >
                중복확인
              </div>
            </div>
            <div className="checktext">
              {isNickName ? "유효한 닉네임입니다." : ""}
            </div>
            <InputBox
              placeholder="birth (ex. 990811)"
              style={{ width: "28.333rem" }}
              onChange={(e) => setBirth(e.target.value)}
            ></InputBox>
          </div>
          <div id="agreeBox">
            <CheckBoxLabel style={{ fontWeight: "500", fontSize: "1.7rem" }}>
              <CheckBox checked={allAgree} onChange={handleAllAgree} />
              모두 동의
            </CheckBoxLabel>
            <CheckBoxLabel>
              <CheckBox
                checked={termsAgree}
                onChange={(e) => setTermsAgree(e.target.checked)}
              />
              이용약관
            </CheckBoxLabel>
            <CheckBoxLabel>
              <CheckBox
                checked={privacyAgree}
                onChange={(e) => setPrivacyAgree(e.target.checked)}
              />
              개인정보처리방침
            </CheckBoxLabel>
          </div>
          <div id="signbutton" onClick={handleSignup}>
            Sign up
          </div>
        </InputContainer>
      </Background>
    </>
  );
};

export default SignupPage;
