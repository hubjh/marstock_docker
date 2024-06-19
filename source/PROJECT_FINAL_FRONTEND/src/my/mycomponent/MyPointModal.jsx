import React from "react";
import styled from "styled-components";
import PayComponent from "../../utils/component/PayComponent.tsx";
import { useState } from "react";

const StyledModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

const StyledModalContainer = styled.div`
  width: 50rem;
  height: 60rem;
  border-radius: 12px;
  // background-color: rgba(255, 255, 255, 0.88);
  // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: rgba(255, 255, 255, 0.08);
  box-shadow: inset 5px 5px 5px -4px rgba(255, 255, 255, 0.4),
    inset -5px -5px 3px -1px rgba(0, 0, 0, 0.6),
    inset 30px 30px 120px -50px rgba(0, 0, 0, 0.9),
    inset -30px -30px 50px -50px rgba(255, 255, 255, 0.9),
    50px 50px 40px -15px rgba(17, 17, 17, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 5rem;
  display: flex;
  flex-direction: column;
  padding: 25px;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const StyledTitleCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
`;

const StyledTitle = styled.div`
  display: inline-block;
  text-align: center;
  margin-top: 10px;
  font-size: 3.2rem;
  color: #ffffff;
  text-shadow: -4px -4px 6px var(--mainpurple), 3px 3px 6px var(--mainorange);
`;

const StyledBody = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.8rem;
  text-align: center;
  color: #ffffff;
  text-shadow: -4px -4px 6px var(--downblue), 3px 3px 6px var(--upred);
`;

const StyledFooter = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledFooterButton = styled.button`
  width: 150px;
  height: 45px;
  margin: 10px;
  border: none;
  background-color: ${(props) =>
    props.cancel ? "var(--maindarkpurple)" : "var(--mainorange)"};
  color: white;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
`;

const MyPointModal = ({ setOpenModal, member }) => {
  const [showPayComponent, setShowPayComponent] = useState(false);
  return (
    <StyledModalBackground>
      <StyledModalContainer>
        <StyledTitleCloseBtn>
          <StyledButton onClick={() => setOpenModal(false)}>X</StyledButton>
        </StyledTitleCloseBtn>
        <StyledTitle>투자자금 확보</StyledTitle>
        <StyledBody>
          투자금이 필요하시군요? <br />
          투자금을 충전하시겠습니까?
        </StyledBody>

        {showPayComponent && <PayComponent member={member} />}

        {!showPayComponent && (
          <StyledFooter>
            <StyledFooterButton cancel onClick={() => setOpenModal(false)}>
              취소
            </StyledFooterButton>
            <StyledFooterButton
              onClick={() => {
                setShowPayComponent(true);
              }}
            >
              충전하기
            </StyledFooterButton>
          </StyledFooter>
        )}
      </StyledModalContainer>
    </StyledModalBackground>
  );
};

export default MyPointModal;
