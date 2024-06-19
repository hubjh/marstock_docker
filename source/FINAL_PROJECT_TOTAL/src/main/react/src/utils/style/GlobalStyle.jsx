import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
   box-sizing: border-box;

   ::-webkit-scrollbar {
         width: 1rem;
  }

  ::-webkit-scrollbar-track {
    background: rgba(17,17,128,0.0001);
    backdrop-filter: blur(2rem);

}

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, var(--mainpurple), var(--mainorange));
    height: 1rem;
    border-radius: 1rem;
  

  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, var(--mainlightpurple), var(--mainlightorange));
  }


  } 

  body {
   margin: 0px;
   padding: 0px;
   font-family: 'Noto Sans KR', sans-serif;
   background-color: var(--mainblack);

   ::-webkit-scrollbar {
    width: 30px;

   }



   
  }

  html {
   font-size: 10px;
  }

  :root {
   --mainblack: #111111; // 배경 검은색
	--maindarkpurple: #330033; // 흰배경용 어두운보라
	--mainpurple: #6633cc; // 메인 보라색
	--mainlightpurple: #ab81ff; // 보조 연보라색
   --downblue: #5c76ff; // 하락 파랑
   --upred: #ff5c5c; // 상승 빨강
   --mainorange: #ff6600; // 메인 주황색
   --mainlightorange: #ff954f; // 메인 연주황색
   --gradientorange: linear-gradient(to top, rgba(17, 17, 17, 0.5) 15%, rgba(255, 102, 0, 0.5) 100% ); 
   --gradientpurple: linear-gradient(to top, rgba(17, 17, 17, 0.5) 15%, rgba(102, 51, 204, 0.5) 100% ); 
  }
`;

export default GlobalStyle;
