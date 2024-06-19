import { useEffect, useState } from "react";
import styled from "styled-components";

// 모달 전체 틀
export const ModalContainer = styled.div`
  // Modal을 구현하는데 전체적으로 필요한 CSS를 구현
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-family: "Noto Sans KR", sans-serif;
`;

// Modal 표시시 뒷배경 처리
export const ModalBackground = styled.div`
  z-index: 5; //위치지정 요소
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

// Modal 오픈 버튼
export const ModalButton = styled.button`
  background-color: ${(props) => props.bgColor || "var(--mainlightpurple)"};
  color: ${(props) => props.textColor || "white"};
  text-decoration: none;
  border: none;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  padding: ${(props) => props.padding || "1rem"};
  border-radius: 30px;
  font-size: ${(props) => props.fontSize || "1.5rem"};
  font-weight: 600;
  line-height: ${(props) => props.lineHeight || "auto"};

  cursor: grab;
`;

export const ExitButton = styled(ModalButton)`
  background-color: ${(props) => props.bgColor || "var(--mainpurple)"};
  color: ${(props) => props.textColor || "white"};
  border-radius: 5rem;
  text-decoration: none;
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.textColor || "white"};
`;

export const ModalView = styled.div.attrs((props) => ({ role: "dialog" }))`
  // Modal창 CSS를 구현합니다.
  display: flex;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  align-items: center;
  flex-direction: column;
  border-radius: 2rem;
  width: auto;
  min-width: 30rem;
  max-width: 100rem;
  padding: 1rem;
  height: auto;
  > div.desc {
    margin: 4rem;
    font-size: 2.4rem;
    font-weight: 800;
    @media screen and (max-width: 767px) {
      margin: 6vw;
      font-size: 3vw;
    }
  }
  @media screen and (max-width: 767px) {
    min-width: 30vw;
    max-width: 80vw;
    padding: 2vw;
  }
`;
// 사용법
/*
사용하고자 하는 파일에서 아래와 같이 useState를 선언합니다.
ex// const [isModalOpen, setIsModalOpen] = useState(false);
모달컴포넌트를 선언할 때 
<NoneBtnModalComponent 
      isOpen={isModalOpen} // useState로 선언한 변수를 isOpen에 넣습니다.
      setIsOpen={setIsModalOpen} // useState로 선언한 변수를 setIsOpen에 넣습니다.
      content="공연 등록이 완료되었습니다." // 모달창에 표시할 내용을 content에 넣습니다.
      close={{ func: closeModalAndNavigate, text: "닫기"}}  // 모달창을 닫을 때 실행할 함수와 버튼에 표시할 텍스트를 close에 넣습니다.
      func 또는 text 하나씩 단독사용도 가능합니다.
      customButton="확인" // 모달창에 표시할 버튼 텍스트를 customButton에 넣습니다. 안 써도 됩니다.
      closeButtonStyle={{ b: "blue", textColor: "wgColorhite" }} // 모달창을 닫을 때 버튼의 배경색과 글자색을 설정합니다. 따로 사용하지 않으면
      기본 스타일이 적용됩니다. 배경과 글자색만 쓸 수 있습니다.
      
    />
    아래와 같이 설정합니다.
*/
/*  수정 조영준
  <NoneBtnModalComponent 
      isOpen={isModalOpen} // useState로 선언한 변수를 isOpen에 넣습니다.
      
      content="공연 등록이 완료되었습니다." // 모달창에 표시할 내용을 content에 넣습니다.
      close={false}}  // 기존의 setter 입력에서 단순하게 false 입력으로 변경
      closeText="확인, 닫기 등등" // 기존의 방식에서 props 추가
      closeModalHandler={isOpen을 컨트롤하는 함수}
      customButton="확인" // 모달창에 표시할 버튼 텍스트를 customButton에 넣습니다. 안 써도 됩니다.
      closeButtonStyle={{ b: "blue", textColor: "wgColorhite" }} // 모달창을 닫을 때 버튼의 배경색과 글자색을 설정합니다. 따로 사용하지 않으면
      기본 스타일이 적용됩니다. 배경과 글자색만 쓸 수 있습니다.
      
    />

*/
export const NoneBtnModalComponent = ({
  isOpen,
  content,
  customButton,
  closeText,
  closeButtonStyle,
  closeModalHandler,
  onMove,
}) => {
  const [stock, setStock] = useState(null);

  useEffect(() => {
    let intervalId;
    if (isOpen) {
      intervalId = setInterval(() => {
        // 주식 데이터를 랜덤으로 업데이트하는 로직
        const newStock = Math.random(); // 이 부분은 실제 주식 데이터로 교체해야 합니다.
        setStock(newStock);
      }, 3000);
    } else {
      setStock(null);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isOpen]);
  // 모달 닫기 제어
  const customButtonHandler = () => {
    if (customButton && customButton.func) {
      customButton.func();
    }
  };

  return (
    <>
      {isOpen ? (
        <ModalContainer>
          <ModalBackground onClick={closeModalHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
            <div className="desc">{content}</div>
              {/* <div className="stock">{stock}</div> 주식 데이터를 표시하는 부분 */}
              {customButton && (
                <ExitButton onClick={customButtonHandler}>
                  {customButton && customButton.text}
                </ExitButton>
              )}
              <ExitButton onClick={onMove}>이동</ExitButton> {/* '이동' 버튼 */}
              <ExitButton onClick={closeModalHandler} {...closeButtonStyle}>
                {closeText}
              </ExitButton>
            </ModalView>
          </ModalBackground>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default NoneBtnModalComponent;
