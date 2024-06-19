import styled from "styled-components";

export const StockCommunityContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
`;
export const Example = styled.div`
  width: 100px;
  height: 100px;
  background-color: blue;
  &.b {
    background-color: red;
  }
  &.c {
    background-color: green;
  }
`;

export const CommunityTitleZone = styled.div`
  width: 110rem;
  height: 4rem;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  margin-top: 10rem;
  border-radius: 1.5rem;

  @media (max-width: 768px) {
    width: 40rem;
  }
`;

export const ComTitle01 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 53rem;
  height: 4.4rem;
  font-size: 1.6rem;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 15rem;
    font-size: 1.2rem;
  }
`;

export const ComTitle02 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 19.9rem;
  height: 4.4rem;
  font-size: 1.6rem;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 12rem;
    font-size: 1.2rem;
  }
`;

export const ComTitle03 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 13.2rem;
  height: 4.4rem;
  font-size: 1.6rem;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 8rem;
    font-size: 1.2rem;
  }
`;

export const ComTitle04 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 7.8rem;
  height: 4.4rem;
  font-size: 1.6rem;

  color: #ffffff;

  @media (max-width: 768px) {
    width: 5rem;
    font-size: 1.2rem;
  }
`;

export const CommentBox = styled.div`
  width: 110rem;
  height: 96rem;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 768px) {
    width: 40rem;
  }
`;

export const ComContentZone = styled.div`
  width: 110rem;
  height: 4rem;
  display: flex;
  flex-direction: row;

  position: relative;
  align-items: center;

  border-radius: 1.5rem;

  @media (max-width: 768px) {
    width: 40rem;
  }
`;

export const ComCon01 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 53rem;
  height: 4.4rem;
  font-size: 1.6rem;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 15rem;
    font-size: 1.2rem;
  }
`;

export const ComCon02 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 19.9rem;
  height: 4.4rem;
  font-size: 1.6rem;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 12rem;
    font-size: 1.2rem;
  }
`;

export const ComCon03 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 13.2rem;
  height: 4.4rem;
  font-size: 1.6rem;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 8rem;
    font-size: 1.2rem;
  }
`;

export const ComCon04 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 7.8rem;
  height: 4.4rem;
  font-size: 1.6rem;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 5rem;
    font-size: 1.2rem;
  }
`;

export const BottomCheckZone = styled.div`
  width: 110rem;
  height: 4rem;
  display: flex;
  flex-direction: row;
  position: relative;

  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 40rem;
  }
`;

export const RadioButton = styled.input.attrs({ type: "radio" })`
  display: relative;
  position: relative;

  &:checked + label {
    color: white;
    background: #6633cc;
  }
`;

export const RadioButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.4rem;
  color: #ffffff;

  width: 7rem;
  height: 2.2rem;

  @media (max-width: 768px) {
    width: 8rem;
    font-size: 1rem;
  }
`;

export const LikesButton = styled.button`
  display: flex;
  position: relative;
  width: 4rem;
  height: 3.6rem;
  color: white;
  background: var(--mainpurple);
  font-size: 1.6rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2); // 가장자리를 깎는 효과 추가
  border-radius: 0.5rem;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2), 0px 10px 10px rgba(0, 0, 0, 0.15); // 그림자 효과 조정
  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95); // 클릭 시 눌리는 효과 추가
  }

  @media (max-width: 768px) {
    width: 12rem;
  }
`;

export const DisLikesButton = styled.button`
  display: flex;
  position: relative;
  width: 4rem;
  height: 3.6rem;
  color: white;
  background: var(--mainorange);
  font-size: 1.6rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2); // 가장자리를 깎는 효과 추가
  border-radius: 0.5rem;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2), 0px 10px 10px rgba(0, 0, 0, 0.15); // 그림자 효과 조정

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95); // 클릭 시 눌리는 효과 추가
  }

  @media (max-width: 768px) {
    width: 12rem;
  }
`;
