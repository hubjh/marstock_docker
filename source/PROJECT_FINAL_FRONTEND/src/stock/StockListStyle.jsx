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

  width: 16rem;
  height: 4.6rem;
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.3);

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

    &::before {
      left: 0;
      width: 100%;
    }
  }
`;

export const Category02 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 13.8rem;
  height: 4.6rem;
  font-size: 2.5rem;
  color: rgba(255, 255, 255, 0.3);

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

    &::before {
      left: 0;
      width: 100%;
    }
  }
`;

export const Category03 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 13.8rem;
  height: 4.6rem;
  font-size: 2.5rem;
  color: rgba(255, 255, 255, 0.3);

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

    &::before {
      left: 0;
      width: 100%;
    }
  }
`;

export const Category04 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 13.8rem;
  height: 4.6rem;
  font-size: 2.5rem;
  color: rgba(255, 255, 255, 0.3);

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

    &::before {
      left: 0;
      width: 100%;
    }
  }
`;

export const StockInfoBackboard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 113.4rem;
  width: 113.4rem;
  background: rgba(255, 255, 255, 0.1);
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

  @media (max-width: 768px) {
    width: 40rem;
  }
`;

export const StockDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  height: 5rem;

  align-items: center;
`;

export const Div01 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 10.5rem;
  height: 4.6rem;
  font-size: 2.2rem;
  color: rgba(255, 255, 255, 0.3);

  &:hover {
    cursor: pointer;
  }
`;

export const Div02 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 10.5rem;
  height: 4.6rem;
  font-size: 2.2rem;
  color: rgba(255, 255, 255, 0.3);

  &:hover {
    cursor: pointer;
  }
`;

export const StockTitleBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  height: 4rem;

  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 40rem;
  }
`;

export const StockTitle01 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 5.4rem;
  height: 2.7rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--mainlightpurple);

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 5rem;
    font-size: 1.2rem;
  }
`;

export const StockTitle02 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 23.2rem;
  height: 2.7rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--mainlightpurple);

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 6rem;
    font-size: 1.2rem;
  }
`;

export const StockTitle03 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 13.6rem;
  height: 2.7rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--mainlightpurple);

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 5rem;
    font-size: 1.2rem;
  }
`;

export const StockTitle04 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 10.7rem;
  height: 2.7rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--mainlightpurple);

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 5rem;
    font-size: 1.2rem;
  }
`;

export const StockTitle05 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 9rem;
  height: 2.7rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--mainlightpurple);

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 5rem;
    font-size: 1.2rem;
  }
`;

export const StockTitle06 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 15.7rem;
  height: 2.7rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--mainlightpurple);

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 5rem;
    font-size: 1.2rem;
  }
`;

export const StockTitle07 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 15.7rem;
  height: 2.7rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--mainlightpurple);

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 5rem;
    font-size: 1.2rem;
  }
`;

export const StockTitle08 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 15.7rem;
  height: 2.7rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--mainlightpurple);

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 5rem;
    font-size: 1.2rem;
  }
`;

export const StockInfoList = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  height: 2.4rem;

  align-items: center;
  justify-content: center;
`;

export const StockInfo01 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 5.4rem;
  height: 2.4rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 5rem;
    font-size: 1rem;
  }
`;

export const StockInfo02 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 23.2rem;
  height: 2.4rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: #ffffff;

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

    &::before {
      left: 0;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    width: 6rem;
    font-size: 0.7rem;
  }
`;

export const StockInfo03 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 13.6rem;
  height: 2.4rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 5rem;
    font-size: 1rem;
  }
`;

export const StockInfo04 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 10.7rem;
  height: 2.4rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 5rem;
    font-size: 1rem;
  }
`;

export const StockInfo05 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 9rem;
  height: 2.4rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: #ffffff;
  @media (max-width: 768px) {
    width: 5rem;
    font-size: 1rem;
  }
`;

export const StockInfo06 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 15.7rem;
  height: 2.4rem;
  font-size: 1.6rem;
  font-weight: bold;

  color: #ffffff;

  @media (max-width: 768px) {
    width: 5rem;
    font-size: 1rem;
    left: 0.5rem;
  }
`;

export const StockInfo07 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 15.7rem;
  height: 2.4rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 5rem;
    font-size: 1rem;
    left: 0.5rem;
  }
`;

export const StockInfo08 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 15.7rem;
  height: 2.4rem;
  font-size: 1.6rem;
  font-weight: bold;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 5rem;
    font-size: 1rem;
    left: 0.5rem;
  }
`;
