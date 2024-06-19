import styled from "styled-components";

export const StockListContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
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

export const StockCategory = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  height: 5rem;

  align-items: center;

  right: 2rem;

  @media (max-width: 768px) {
    width: 40rem;
    left: 0.4rem;
  }
`;

export const Category01 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 20rem;

  height: 4.8rem;
  font-size: 2.5rem;
  font-weight: black;
  color: #ffffff;
`;

export const Category02 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;

  width: 12rem;
  height: 1.4rem;
  font-size: 2rem;
  font-weight: lighter;
  color: #ffffff;
`;

export const Category03 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;

  width: 7rem;
  height: 1.4rem;
  font-size: 2rem;
  font-weight: lighter;
  color: #ffffff;
`;

export const Category04 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;

  width: 12rem;
  height: 1.4rem;
  font-size: 2rem;
  font-weight: lighter;
  color: #ffffff;
`;

export const StockInfoBackboard = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 120rem;
  width: 113.4rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 40rem;
    height: 100%;
    flex-direction: column;
  }
`;

export const StockDivLeft = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 28.3rem;
  height: 100%;

  align-items: center;
  padding-top: 5rem;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 40rem;
    gap: 0.5rem;
    padding-top: 0.6rem;
    height: 80%;
  }
`;

export const RightLeftContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 100%;

  align-items: center;
  padding-top: 5rem;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 40rem;
    gap: 0.5rem;
    flex-direction: row;
    padding-top: 0.6rem;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 28.3rem;
  height: 100%;

  align-items: center;
  padding-top: 5rem;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 20rem;
    padding-top: 0.6rem;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 28.3rem;
  height: 100%;

  align-items: center;
  padding-top: 5rem;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 20rem;
    padding-top: 0.6rem;
  }
`;

export const CurrentPrice = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 24rem;
  height: 6rem;

  color: white;
  font-size: 2rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const CurrentPriceNum = styled.div`
  display: flex;
  position: relative;
  width: 15.7rem;
  height: 5.8rem;

  font-size: 4rem;
  font-weight: bold;
  align-items: center;
  justify-content: center;
`;

export const UpDownCheck = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 24rem;
  height: 6rem;

  color: var(--upred);
  font-size: 2rem;
  font-weight: bold;
  align-items: center;
  gap: 2rem;
`;

export const Point = styled.div`
  display: flex;
  position: relative;
  width: 10.7rem;
  height: 2.7rem;
  align-items: center;
  justify-content: center;
`;

export const Percent = styled.div`
  display: flex;
  position: relative;
  width: 10.7rem;
  height: 2.7rem;
  align-items: center;
  justify-content: center;
`;

export const LeftInfo = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 24rem;
  height: 4rem;
  color: white;

  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 18rem;
    gap: 0.5rem;
  }
`;

export const LeftInfoTitle = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;

  width: 9.7rem;
  height: 4rem;
  color: white;
  align-items: center;
  font-size: 2rem;
  font-weight: lighter;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const LeftInfoNum = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;

  width: 14.8rem;
  height: 4rem;
  color: white;
  align-items: center;
  justify-content: right;
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const StockDivRight = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 84.9rem;
  height: 100%;

  align-items: center;
  padding-top: 7rem;

  gap: 6rem;

  @media (max-width: 768px) {
    width: 40rem;
    gap: 2rem;
    padding-top: 0.6rem;
  }
`;

export const StockGraphZone = styled.img`
  display: flex;
  position: relative;
  width: 81.7rem;
  height: 36.6rem;

  @media (max-width: 768px) {
    width: 38rem;
    height: 20rem;
  }
`;

export const PurchaseBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 40rem;
  flex-direction: row;
  gap: 2rem;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 40rem;
    flex-direction: column;
  }
`;

export const StockSellingBox = styled.div`
  position: relative;
  display: flex;
  width: 44rem;
  height: 44rem;
  flex-direction: column;
  gap: 4rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 5rem 3rem;

  @media (max-width: 768px) {
    width: 40rem;
    height: 20rem;
    flex-direction: column;
    padding: 2rem 2rem;
    gap: 1rem;
  }
`;

export const StockPurchaseBox = styled.div`
  display: flex;
  position: relative;
  width: 33.7rem;
  height: 44rem;
  flex-direction: column;
  gap: 5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 5rem 3rem;

  @media (max-width: 768px) {
    width: 40rem;
    height: 20rem;
    flex-direction: column;
    padding: 2rem 2rem;
    gap: 1rem;
  }
`;

export const SellingTop = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 5.2rem;
  flex-direction: row;

  @media (max-width: 768px) {
    width: 34rem;
  }
`;

export const SellingTitle = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 5.2rem;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const SellingButton = styled.button`
  display: flex;
  position: relative;
  width: 14rem;
  height: 5.2rem;
  color: white;
  background: var(--mainorange);
  font-size: 2.5rem;
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

export const SellingBottom = styled.div`
  display: grid;
  position: relative;
  width: 38rem;
  height: 20rem;

  align-items: center;
  grid-template-columns: repeat(2, 1fr); // 4열 생성
  grid-template-rows: repeat(4, 1fr); // 2행 생성

  @media (max-width: 768px) {
    width: 34rem;
  }
`;

export const SellingItem = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 19rem;
  height: 3.2rem;

  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 16rem;
    height: 2.8rem;
  }
`;

export const SellingeTag = styled.div`
  position: relative;
  display: flex;
  width: 9rem;
  height: 3.2rem;
  align-items: center;
  justify-content: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;

  color: #ff954f;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const SellingNum = styled.input`
  position: relative;
  display: flex;
  width: 9rem;
  height: 3.2rem;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
`;

export const TageNumber = styled.div`
  position: relative;
  display: flex;
  width: 9rem;
  height: 3.2rem;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;

  color: #ffffff;
`;

export const ProfitNumber = styled.div`
  position: relative;
  display: flex;
  width: 12rem;
  height: 3.2rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 3rem;

  color: #ff954f;
`;

export const PurchaseTitle = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 5.2rem;
  color: white;
  font-size: 3rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

export const PurchaseTop = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 5.2rem;
  flex-direction: row;

  @media (max-width: 768px) {
    width: 34rem;
  }
`;

export const PurchaseButton = styled.button`
  display: flex;
  position: relative;
  width: 14rem;
  height: 5.2rem;
  color: white;
  background: var(--mainpurple);
  font-size: 2.5rem;
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

export const PurchaseBottom = styled.div`
  position: relative;
  display: flex;
  width: 28rem;
  height: 20rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 34rem;
    gap: 1rem;
  }
`;

export const PurchaseItem = styled.div`
  position: relative;
  display: flex;
  width: 28rem;
  height: 3rem;

  flex-direction: row;

  @media (max-width: 768px) {
    height: 2.8rem;
  }
`;

export const PurchaseTag = styled.div`
  position: relative;
  display: flex;
  width: 14rem;
  height: 3rem;

  color: var(--mainpurple);
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 16rem;
    height: 2.8rem;
  }
`;

export const PurchaseNumber = styled.div`
  position: relative;
  display: flex;
  width: 14rem;
  height: 3rem;

  color: #ffffff;
  font-size: 2rem;
  font-weight: bold;
`;

export const PurchaseNum = styled.input`
  position: relative;
  display: flex;
  width: 9rem;
  height: 3.2rem;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
`;
