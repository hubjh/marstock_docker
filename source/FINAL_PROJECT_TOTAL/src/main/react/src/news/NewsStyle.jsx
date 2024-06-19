import styled from "styled-components";
import MarsSpace from "../images/MARSSPACE.png";

export const NewsContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5rem;
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

export const NewsPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 230rem;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.7)
    ),
    url(${MarsSpace});
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

export const NewsTitle = styled.div`
  position: relative;
  display: flex;
  width: 110rem;

  align-items: center;
  top: 9rem;
  height: 6.3rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: bold;
  font-size: 3.6rem;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 34rem;
    left: 4rem;
  }
`;

export const NewsTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 44.8rem;

  gap: 2.6rem;

  @media (max-width: 768px) {
    width: 34rem;
    gap: 3rem;
    flex-direction: column;
    height: auto;
  }
`;

export const Realtimezone = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 54.9rem;
  height: 44.8rem;
  gap: 2.4rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  overflow-x: hidden;

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
    width: 34rem;
    height: 46rem;
  }
`;

export const MostViewZone = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 54.9rem;
  height: 44.8rem;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  overflow-y: scroll;
  overflow-x: hidden;

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

  @media (max-width: 768px) {
    width: 34rem;
    height: 60rem;
    gap: 2rem;
  }
`;

export const TopTitile = styled.div`
  display: flex;
  position: relative;
  font-size: 2.2rem;
  color: white;
  font-weight: bold;
  height: 4rem;
  width: 100%;
  top: 1.5rem;
  left: 1.5rem;

  @media (max-width: 768px) {
    height: 2rem;
    font-size: 1.5rem;
  }
`;

export const RealTimeBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50.7rem;
  height: 5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  left: 1.5rem;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 34rem;
    left: 1rem;
  }
`;

export const TopBox = styled.div`
  position: relative;
  display: flex;
  width: 50rem;
  height: 8rem;
  gap: 0.4rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 2.3rem;

  color: #ab81ff;

  @media (max-width: 768px) {
    width: 32rem;
    font-size: 1rem;
  }
`;

export const RealNewsName = styled.div`
  position: relative;
  display: flex;

  width: 4.4rem;

  height: 2.9rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.3rem;
  color: var(--mainlightorange);

  @media (max-width: 768px) {
    width: 3rem;
    font-size: 1rem;
  }
`;

export const BottomBox = styled.div`
  position: relative;
  display: flex;
  width: 50.7rem;
  height: 4.4rem;

  justify-content: center;
  align-items: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.9rem;

  color: #ffffff;

  @media (max-width: 768px) {
    width: 32rem;
    height: 3rem;
    font-size: 0.8rem;
  }
`;

export const RealTime = styled.div`
  position: relative;
  display: flex;
  width: 14rem;
  height: 2.9rem;
  align-items: center;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.9rem;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 10rem;
    font-size: 0.8rem;
  }
`;

export const MostViewBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10rem;
  top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 2rem;
  left: 1.5rem;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 100%;

    font-size: 0.8rem;
  }
`;

export const MostNewsName = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 7.2rem; */
  width: 100%;
  height: 20rem;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 2rem;
  color: var(--mainlightorange);

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.8rem;
  }
`;

export const NewsUploadTime = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12.2rem;
  height: 2.8rem;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 2rem;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 10rem;
    font-size: 0.8rem;
  }
`;

export const NewsBottomTitle = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 3.4rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 2.2rem;
  color: #ffffff;
  top: 3rem;
  left: 1.2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    width: 34rem;
  }
`;

export const NewsBottomContainer = styled.div`
  display: grid;
  position: relative;

  width: 100%;
  height: 100%;
  gap: 2rem;
  grid-template-columns: repeat(2, 54rem);
  grid-template-rows: repeat(5, 12.5rem);

  @media (max-width: 768px) {
    width: 34rem;
    grid-template-columns: repeat(1, 34rem);
    grid-template-rows: repeat(8, 12.5rem);
  }
`;

export const TvNewsBox = styled.div`
  position: relative;
  display: flex;
  width: 54rem;
  height: 12.5rem;
  gap: 1.8rem;
  align-items: center;
  justify-content: center;

  background: rgba(255, 184, 136, 0.12);
  border-radius: 15px;

  @media (max-width: 768px) {
    width: 34rem;
  }
`;

export const NewsImgBox = styled.img`
  display: flex;
  position: relative;
  width: 14.8rem;
  height: 8.3rem;
  border: none;
  border-radius: 1.5rem;
  background: rgba(255, 184, 136, 0.12);

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 8rem;
  }
`;

export const NewsInfoBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;

  gap: 1.5rem;
  width: 34rem;
  height: 8.3rem;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 20rem;
  }
`;

export const TvNewsTitle = styled.div`
  display: flex;
  position: relative;
  width: 34rem;
  height: 2.4rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--mainlightorange);

  @media (max-width: 768px) {
    width: 20rem;
    font-size: 1.2rem;
  }
`;

export const TvnewsInfo = styled.div`
  display: flex;
  position: relative;
  width: 34rem;
  height: 2.4rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: lighter;
  font-size: 1.1rem;
  color: #ffffff;

  @media (max-width: 768px) {
    width: 20rem;
    font-size: 0.8rem;
  }
`;
