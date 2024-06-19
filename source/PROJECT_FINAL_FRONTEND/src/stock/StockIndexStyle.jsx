import styled, { keyframes } from "styled-components";

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

export const IndexPageTop = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 113rem;
  height: 54rem;

  @media (max-width: 768px) {
    width: 40rem;
  }
`;

export const IndexTopLeft = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;
  width: 84rem;
  height: 54rem;

  @media (max-width: 768px) {
    width: 24rem;
  }
`;

export const LeftPointZone = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  width: 98%;
  height: 12rem;

  @media (max-width: 768px) {
    width: 24rem;
  }
`;

export const Point01 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 26rem;
  height: 11.4rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 24rem;
    height: 12rem;
    flex-direction: column;
  }
`;

export const Kospi = styled.div`
  display: flex;
  position: relative;
  width: 10.3rem;
  height: 3.6rem;
  font-size: 2.2rem;
  font-weight: bold;
  color: #ffffff;
  left: 0.7rem;

  @media (max-width: 768px) {
    width: 22rem;
    align-items: center;
    justify-content: center;
    left: 0;
    font-size: 2.4rem;
  }
`;

export const PointInfo = styled.div`
  display: flex;
  position: relative;
  width: 14rem;
  height: 9rem;

  flex-direction: column;

  @media (max-width: 768px) {
    width: 22rem;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }
`;

export const Num = styled.div`
  width: 13.6rem;
  height: 3.6rem;
  font-size: 2.6rem;
  font-weight: bold;
  color: ${(props) =>
    String(props.value).startsWith("-") ? "var(--downblue)" : "var(--upred)"};

  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 11rem;
    font-size: 2rem;
  }
`;

export const Value = styled.div`
  width: 13.6rem;
  height: 1.8rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) =>
    String(props.value).startsWith("-") ? "var(--downblue)" : "var(--upred)"};

  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Percent = styled.div`
  width: 13.6rem;
  height: 1.8rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) =>
    String(props.value).startsWith("-") ? "var(--downblue)" : "var(--upred)"};

  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Kosdaq = styled.div`
  display: flex;
  position: relative;
  width: 10.3rem;
  height: 3.6rem;
  font-size: 2.2rem;
  font-weight: bold;
  color: #ffffff;
  left: 0.7rem;

  @media (max-width: 768px) {
    width: 22rem;
    align-items: center;
    justify-content: center;
    left: 0;
  }
`;

export const Kospi200 = styled.div`
  display: flex;
  position: relative;
  width: 10.3rem;
  height: 3.6rem;
  font-size: 2.2rem;
  font-weight: bold;
  color: #ffffff;
  left: 0.7rem;

  @media (max-width: 768px) {
    width: 22rem;
    align-items: center;
    justify-content: center;
    left: 0;
  }
`;

export const Point02 = styled.div`
  display: flex;
  position: relative;
  width: 26rem;
  height: 11.4rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  gap: 1.4rem;

  @media (max-width: 768px) {
    width: 24rem;
    height: 12rem;
    flex-direction: column;
    gap: 0;
  }
`;

export const Point03 = styled.div`
  display: flex;
  position: relative;
  width: 26rem;
  height: 11.4rem;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 24rem;
    height: 12rem;
    flex-direction: column;
  }
`;

export const LeftIndexZone = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 98%;
  height: 38rem;

  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 24rem;
  }
`;
export const LeftIndexTopZone = styled.div`
  display: flex;
  height: 10%;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 2.4rem;
  font-weight: bold;
`;
export const LeftIndexTopTitle = styled.div`
  height: 3.6rem;
  width: 20rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 28px;
  margin-left: 4rem;
  color: #ffffff;

  z-index: 3;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const IndexDrop = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40rem;

  height: 3.6rem;
  color: #ffffff;

  font-size: 2rem;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const IndexDropContainer = styled.div`
  display: flex;
  position: absolute;
  margin-top: 3.6rem;
  flex-direction: column;

  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const IndexDropMenu = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 40rem;
  height: 4rem;
  background: rgba(0, 0, 0, 0.4);
  color: #ffffff;
  font-size: 1.6rem;
  z-index: 3;
  border: 1px solid white;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const LeftIndexMainZone = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  /* Styles for the scrollbar */
  &::-webkit-scrollbar {
    width: 1rem; /* Adjust scrollbar thickness */
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

export const LeftIndexMainTitle = styled.div`
  width: 12rem;
  text-align: center;
  /* width: 100%; */
  /* 매매기준율 */
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 20px;
  color: #ab81ff;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 8rem;
  }
`;

export const LeftIndexMainInnerTitle = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
`;

export const LeftIndexMainInnerText = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-around;
`;

export const LeftIndexMainText = styled.div`
  width: 10rem;
  text-align: center;
  /* width: 100%; */
  /* 매매기준율 */
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 13px;
  color: #ffffff;
  margin-top: 15px;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 8rem;
  }
`;

export const LeftTitle = styled.div`
  /* 통화명 */
  width: 1.7rem;
  height: 2.2rem;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 20px;

  color: #ab81ff;
`;

export const IndexTitleZone = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  width: 100%;
  height: 3.6rem;
  border: 1px solid red;
  gap: 1.2rem;
  padding-left: 0.5rem;
`;

export const IndexTitle = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 13.6rem;
  height: 100%;
  color: rgba(255, 255, 255, 0.4);
  font-size: 1.9rem;
  font-weight: bold;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: var(--mainorange);
    transition: all 0.3s;
  }

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);

    &::before {
      left: 0;
      width: 100%;
    }
  }
`;

export const IndexDetail = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  padding-left: 1.5rem;
  border: 1px solid red;
  width: 100%;
  height: 2.2rem;
  margin-top: 0.5rem;
`;

export const DetailName01 = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  width: 17.5rem;
  height: 100%;
  color: var(--mainlightpurple);
  font-size: 1.4rem;
  font-weight: bold;
`;

export const IndexTopRight = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 1.5rem;
  width: 27rem;
  height: 54rem;
`;

export const IndexTopContainer = styled.div`
  width: 100%;
  height: 96%;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  overflow-y: auto;

  /* Styles for the scrollbar */
  &::-webkit-scrollbar {
    width: 1rem; /* Adjust scrollbar thickness */
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

export const IndexTopTitle = styled.div`
  width: 100%;
  height: 12%;
  font-weight: 900;
  font-size: 3rem;
  color: white;
  padding: 10px;

  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;

export const IndexTopRow = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: space-between;
`;

export const IndexTopNum = styled.div`
  color: #ab81ff;
  font-size: 1rem;
  font-weight: 700;
  margin-left: 1.5rem;

  display: flex;
  position: relative;
  justify-content: center;
`;

export const IndexTopName = styled.div`
  color: white;
  /* font-size: 1rem;
  font-weight: 700; */
  width: 6rem;
  display: flex;
  position: relative;
  justify-content: center;
  height: 1.3rem;
  overflow: hidden;
  white-space: nowrap; /* 글자가 넘칠 경우 줄 바꿈 방지 */

  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: 3rem;
  }
`;

export const AnimatedText = styled.span`
  color: white;
  font-size: 1rem;
  font-weight: 700;
  white-space: nowrap; /* 글자가 넘칠 경우 줄 바꿈 방지 */

  /* 애니메이션 적용 */
  animation: ${keyframes`
    from {
      transform: translateX(50%);
    }

    to {
      transform: translateX(-100%);
    }
  `} 6s ease infinite;
`;

export const IndexTopPrice = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 700;
  margin-left: 0.3rem;

  display: flex;
  position: relative;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: 2.6rem;
  }
`;
export const IndexTopRate = styled.div`
  color: white;
  font-size: 1rem;
  font-weight: 700;
  margin-left: 0.5rem;
  margin-right: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: 3rem;
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  color: #ffffff;
  width: 113rem;
  height: 4rem;

  font-size: 2rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 2rem;
  // padding-left: 1rem;

  @media (max-width: 768px) {
    width: 40rem;
  }
`;

export const IndexPageBottom = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  width: 113rem;
  height: 38rem;

  overflow-y: auto;

  @media (max-width: 768px) {
    width: 40rem;
  }
`;

export const BottomTitleBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4.8rem;
  border-bottom: 1px solid #d9d9d9;
`;

export const BoTitle = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 13rem;
  height: 100%;
  font-size: 1.6rem;
  font-weight: lighter;
  color: rgba(255, 255, 255, 0.4);

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: var(--mainorange);
    transition: all 0.3s;
  }

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);

    &::before {
      left: 0;
      width: 100%;
    }
  }
`;

export const KategorieTitle = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: bold;
  width: 100%;
  height: 2.4rem;
  gap: 1.2rem;
  padding: 0 0.5rem;
  margin-top: 1rem;
`;

export const Kategorie01 = styled.div`
  display: flex;
  position: relative;
  width: 3.5rem;
  height: 100%;

  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);

    &::before {
      left: 0;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 14rem;
    font-size: 1rem;
  }
`;

export const Kategorie02 = styled.div`
  display: flex;
  position: relative;
  width: 16.6rem;
  height: 100%;

  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);

    &::before {
      left: 0;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 14rem;
    font-size: 1rem;
  }
`;

export const Kategorie03 = styled.div`
  display: flex;
  position: relative;
  width: 11.4rem;
  height: 100%;

  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);

    &::before {
      left: 0;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 14rem;
    font-size: 1rem;
  }
`;

export const Kategorie04 = styled.div`
  display: flex;
  position: relative;
  width: 9.5rem;
  height: 100%;

  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);

    &::before {
      left: 0;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 20rem;
    font-size: 1rem;
  }
`;

export const Kategorie05 = styled.div`
  display: flex;
  position: relative;
  width: 9rem;
  height: 100%;

  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);

    &::before {
      left: 0;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 14rem;
    font-size: 1rem;
  }
`;

export const Kategorie06 = styled.div`
  display: flex;
  position: relative;
  width: 18.5rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Kategorie07 = styled.div`
  display: flex;
  position: relative;
  width: 12rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Kategorie08 = styled.div`
  display: flex;
  position: relative;
  width: 12rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const Kategorie09 = styled.div`
  display: flex;
  position: relative;
  width: 12rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const KategorieInfo = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: bold;
  width: 100%;
  height: 2.4rem;
  gap: 1.2rem;
  padding: 0 0.5rem;
  margin-top: 1rem;
`;

export const KInfo01 = styled.div`
  display: flex;
  position: relative;
  width: 3.5rem;
  height: 100%;
  color: #ab81ff;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 2rem;
    left: 1rem;
  }
`;

export const KInfo0101 = styled.div`
  display: flex;
  position: relative;
  width: 3.5rem;
  height: 100%;

  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 2rem;
    left: 1rem;
    border: 1px solid red;
  }
`;

export const KInfo02 = styled.div`
  display: flex;
  position: relative;
  width: 16.6rem;
  height: 100%;

  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    width: 12rem;
    left: 1rem;
    height: 4rem;
  }
`;

export const KInfo03 = styled.div`
  display: flex;
  position: relative;
  width: 11.4rem;
  height: 100%;

  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 8rem;
  }
`;

export const KInfo04 = styled.div`
  display: flex;
  position: relative;
  width: 9.5rem;
  height: 100%;

  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 8rem;
  }
`;

export const KInfo05 = styled.div`
  display: flex;
  position: relative;
  width: 9rem;
  height: 100%;

  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 1rem;
    width: 8rem;
  }
`;

export const KInfo06 = styled.div`
  display: flex;
  position: relative;
  width: 18.5rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const KInfo07 = styled.div`
  display: flex;
  position: relative;
  width: 12rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const KInfo08 = styled.div`
  display: flex;
  position: relative;
  width: 12rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

export const KInfo09 = styled.div`
  display: flex;
  position: relative;
  width: 12rem;
  height: 100%;

  align-items: center;
  justify-content: center;
`;
