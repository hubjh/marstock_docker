import styled from "styled-components";

export const MyPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 10.4rem;
  padding-top: 0.2rem;

  @media (max-width: 768px) {
    width: 40rem;
    padding: 2rem;
  }
`;

export const MyPagetop = styled.div`
  width: 100.5rem;
  height: 35rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.4rem;

  margin-top: 4.2rem;

  @media (max-width: 768px) {
    width: 40rem;
    flex-direction: column;
    height: auto;
  }
`;

export const MyPagetopleft = styled.div`
  width: 40rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 2.1rem;
`;

export const MyPagetopright = styled.div`
  width: 60rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

export const MyPointBox = styled.div`
  width: 100%;
  height: 15.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;

  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
`;

export const PointName = styled.div`
  font-size: 2.6rem;
  display: flex;
  flex-direction: row;
  position: relative;
  color: white;
`;

export const PointWallet = styled.img`
  width: 2.6rem;
  display: flex;
  position: relative;
  left: 1rem;
  height: 2.6rem;
  top: 0.3rem;
`;

export const PointZone = styled.div`
  font-size: 4rem;
  color: white;
`;

export const PointAdd = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.5rem;
  height: 3.6rem;
  border-radius: 1.9rem;
  background-color: var(--mainorange);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover {
    cursor: pointer;
    scale: 1.05;
  }
`;

export const MyTradingINfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 17.2rem;

  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
`;

export const InerRectangle = styled.div`
  position: relative;
  display: flex;
  width: 38rem;
  height: 15.8rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
`;

export const InfoTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.4rem;
  color: white;
`;

export const InfoBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 90%;
  height: 10rem;
`;

export const TotalBuy = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  height: 100%;
  width: 13rem;
  color: var(--mainlightorange);
  font-size: 1.8rem;
`;

export const BuyCount = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 2.8rem;
  width: 13rem;
  color: white;
  font-size: 1.8rem;
`;

export const TotalRevenue = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  height: 100%;
  width: 13rem;
  color: var(--mainlightorange);
  font-size: 1.8rem;
`;

export const RevenueCount = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 2.8rem;
  width: 13rem;
  color: white;
  font-size: 1.8rem;
`;

export const RevenuePercent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;

  height: 100%;
  width: 13rem;
  color: var(--mainlightorange);
  font-size: 1.8rem;
`;

export const PercentCount = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: 2.8rem;
  width: 13rem;
  color: white;
  font-size: 1.8rem;
`;

export const MyAssetBox = styled.div`
  position: relative;
  display: flex;

  align-items: center;
  flex-direction: row;

  width: 60rem;
  height: 5.1rem;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 40rem;
    gap: 2rem;
  }
`;

export const AssetTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.6rem;
  color: white;
  width: 20rem;
  height: 90%;

  @media (max-width: 768px) {
    width: 13rem;
    font-size: 1.8rem;
  }
`;

export const AssetPoint = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  color: white;
  width: 26.7rem;
  height: 90%;

  @media (max-width: 768px) {
    width: 13rem;
    font-size: 2.4rem;
  }
`;

export const UpdownBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  color: white;
  font-size: 1.8rem;
  width: 9.4rem;
  height: 70%;
  background: rgba(255, 102, 0, 0.8);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 19px;

  &:hover {
    cursor: pointer;
    scale: 1.05;
  }

  @media (max-width: 768px) {
    width: 6rem;
    font-size: 1.2rem;
  }
`;

export const GraphBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
  width: 60rem;

  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 40rem;
  }
`;

export const MyPageBottom = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4.2rem;
  height: 58rem;
  width: 100.5rem;

  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 40rem;
  }
`;

export const BottomInnerBox = styled.div`
  position: relative;
  display: flex;
  width: 98rem;
  height: 56rem;
  // justify-content: center;
  flex-direction: column;
  align-items: center;

  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 40rem;
  }
`;

export const BottomTitle = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 3.7rem;
  color: white;
  font-size: 3rem;
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 40rem;
  }
`;

export const TitleLine = styled.div`
  position: relative;
  display: flex;

  height: 0.2rem;
  width: 53.6rem;

  background: #ffffff;
  border-radius: 50px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 40rem;
  }
`;

export const StockInfoBox = styled.div`
  position: relative;
  display: flex;

  align-items: center;
  flex-direction: column;

  height: 94%;
  width: 95rem;

  @media (max-width: 768px) {
    width: 40rem;
  }
`;

export const StockInfoTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  // align-items: center;
  height: 4.2rem;
  width: 100%;
  font-size: 2.2rem;
  font-weight: bold;
  color: var(--mainlightpurple);
  gap: 2.8rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
    height: 2.8rem;
  }
`;

export const StockInfoTitleText = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  color: var(--mainlightpurple);

  display: flex;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1rem;
    height: 1.4rem;
  }
`;

export const NumberBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid red;
  overflow-x: scroll;

  /* Styles for the scrollbar */
  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      to bottom,
      var(--mainpurple),
      var(--mainorange)
    );
    height: 1rem;
    border-radius: 1rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(
      to bottom,
      var(--mainlightpurple),
      var(--mainlightorange)
    );
  }
`;

export const MyStockNumber = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 94%;
  gap: 1.4rem;
  border-top: 1px solid #5b5b5b;

  @media (max-width: 768px) {
    gap: 1.8rem;
  }
`;

export const StockInfoText01 = styled.div`
  font-size: 1.2rem;
  color: #606060;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 24rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    height: 1.4rem;
  }
`;

export const StockInfoText02 = styled.div`
  font-size: 1.2rem;
  color: #606060;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 22rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.6rem;
    width: 32rem;
    right: 0.3rem;
  }
`;

export const StockInfoText03 = styled.div`
  font-size: 1.2rem;
  color: #606060;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 22rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.6rem;
    height: 1.4rem;
  }
`;

export const StockInfoText04 = styled.div`
  font-size: 1.2rem;
  color: #606060;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 22rem;
  right: 1rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.6rem;
    width: 28rem;
    height: 1.4rem;
    right: 0;
  }
`;

export const StockInfoText05 = styled.div`
  font-size: 1.2rem;
  color: #606060;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 22rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.6rem;
    width: 28rem;
    height: 1.4rem;
  }
`;

export const StockInfoText06 = styled.div`
  font-size: 1.2rem;
  color: #606060;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 22rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.6rem;
    width: 28rem;
    height: 1.4rem;
  }
`;

export const StockInfoText07 = styled.div`
  font-size: 1.2rem;
  color: #606060;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 22rem;
  right: 1.2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.6rem;
    width: 28rem;
    height: 1.4rem;
    right: 0.3rem;
  }
`;

export const StockInfoText08 = styled.div`
  font-size: 1.2rem;
  color: #606060;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 22rem;
  right: 1.6rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.6rem;
    width: 32rem;
    height: 1.4rem;
    right: 0.8rem;
  }
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

export const Pagename = styled.div`
  font-size: 3.5rem;
  font-weight: bold;
  color: white;
`;
