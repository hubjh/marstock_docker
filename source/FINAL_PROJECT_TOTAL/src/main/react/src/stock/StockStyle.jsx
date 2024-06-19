import styled from "styled-components";
import MarsMilkeway from "../images/MarsMilkeway.png";

export const StockContainer = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${MarsMilkeway});
  position: absolute;
  top: 0;
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StockHeadTitle = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  // justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  width: 110rem;
  height: 7rem;
  top: 12rem;

  @media (max-width: 768px) {
    width: 40rem;
    left: 3rem;
  }
`;

export const StockHeadTitle01 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 16.6rem;
  height: 6.3rem;
  font-size: 3.5rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);

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
    width: 10rem;
    font-size: 3rem;
  }
`;

export const StockHeadTitle02 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 16.6rem;
  height: 6.3rem;
  font-size: 3.5rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);

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
    width: 12rem;
    font-size: 3rem;
  }
`;

export const StockHeadTitle03 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 16.6rem;
  height: 6.3rem;
  font-size: 3.5rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);

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
    width: 12rem;
    font-size: 3rem;
  }
`;
