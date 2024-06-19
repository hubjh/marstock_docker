import styled from "styled-components";
import backgroundimg from "../images/SignBackground.png";
import mailimg from "../images/Email.svg";
import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)`
  text-decoration: none;
  color: unset;
`;

export const Background = styled.div`
  width: 100%;
  height: 120vh;
  background-image: url(${backgroundimg});
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 10rem;
`;

export const Logo = styled.img`
  /* margin-top: 10rem; */
  height: 4.4rem;
  cursor: pointer;
  transition: hover 0.5s ease-in-out;
  &:hover {
    /* filter: drop-shadow(0 0 30px white); */
    @keyframes pulse {
      0% {
        filter: drop-shadow(0 0 0px rgba(255, 255, 255, 0.7));
      }
      50% {
        filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.7));
      }
      100% {
        filter: drop-shadow(0 0 0px rgba(255, 255, 255, 0.7));
      }
    }
    animation: pulse 2s ease infinite;
    /* transition: all 0.5s ease-in-out; */
  }
`;

export const InputContainer = styled.div`
  width: 48rem;
  height: auto;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: 2rem;
  margin-top: 5rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  #inputcontainerin {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    }
  .inputarea {
    display: flex;
    /* flex-wrap: nowrap; */
    width: 36.6rem;
    gap: 1rem;
    .inputbutton {
    width: 9rem;
    height: 4.3rem;
    background-color: var(--mainpurple);
    color: white;
    border-radius: 1.5rem;
    font-size: 1.3rem;
    line-height: 1.5;
    text-align: center;
    padding: 1rem;
    cursor: pointer;
    &:hover {
      background-color: var(--mainlightpurple);
      transform: scale(1.02);
      transition: all 0.05s ease-in-out;
    }
  }
  }
  .checktext{
    width: 36rem;
    text-align: start;
    font-size: 1.1rem;
    color: var(--mainlightpurple);
  }
  #title {
    font-size: 3rem;
    font-weight: 900;
    color: white;
    margin-bottom: 6rem;
  }
  #linktext {
    width: 36.6rem;
    line-height: 1.2;
    color: var(--mainlightpurple);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.2rem;
    font-weight: 300;
    position: relative;
    top: -1.5rem;
    cursor: pointer;
  }
  #signbutton {
    width: 27.4rem;
    height: 5.2rem;
    color: white;
    background-color: var(--mainpurple);
    font-size: 2rem;
    font-weight: 200;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.5rem;
    cursor: pointer;
    &:hover {
      background-color: var(--mainlightpurple);
      transform: scale(1.02);
      transition: all 0.05s ease-in-out;
    }
    &:active {
      background-color: var(--mainpurple);
    }
  }
  #kakao {
    &:hover {
      box-shadow:  0 0 1px 3px #fae64d;
    }
  }
  #codebutton {
    width: 12rem;
    height: 4rem;
    color: white;
    background-color: var(--mainpurple);
    font-size: 1.5rem;
    font-weight: 200;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.5rem;
    cursor: pointer;
    &:hover {
      background-color: var(--mainlightpurple);
      transform: scale(1.02);
      transition: all 0.05s ease-in-out;
    }
    &:active {
      background-color: var(--mainpurple);
    }
  }
  #agreeBox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.5rem;
  }
`;

export const InputBox = styled.input`
  width: 36.6rem;
  height: 4.3rem;
  box-sizing: border-box;
  border-radius: 1.5rem;
  background-color: ${(props) => props.backgroundColor || "unset"};
  border: solid 1px rgba(255, 255, 255, 0.2);
  color: ${(props) => props.color || "white"};
  padding: 0 1.5rem;

  &:focus {
    outline: none;
    border: solid 2px var(--mainlightpurple);
  }
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  color: white;
  font-weight: 200;
  gap: 1rem;
`;

export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  appearance: none; // 기본 체크박스 숨기기
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 1rem;
  border: solid 1px rgba(255, 255, 255, 0.4);
  box-sizing: border-box;
  &:checked {
    background-color: var(--mainlightpurple);
    box-shadow: inset 0 0 0 3px var(--mainpurple);
  }
`;
