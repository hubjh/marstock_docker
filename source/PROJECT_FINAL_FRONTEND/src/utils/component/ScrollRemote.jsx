import { useEffect, useState } from "react"
import styled from "styled-components";

const Button = styled.button`
   z-index: 5;
   width: 6rem;
   height: 6rem;
   border-radius: 50%;
   border: none;
   background-color: rgba(255, 255, 255, 0.1);
   box-shadow: inset 0 0 10px 2px #ffffff22;
   font-weight: 800;
   font-size: 1.5rem;
   font-family: "Noto Sans KR", sans-serif;
   color: white;
   position: fixed;
   left: 90%;
   top: 50%;
   @media (max-width: 768px) {
      left: 80%;
   }
   cursor: pointer;
   opacity: ${props => (props.visible ? 1 : 0)}; /* visible 상태에 따라 opacity 값을 변경 */
  transition: opacity 0.5s ease-in-out; /* opacity에 transition을 적용 */
   &:hover {
      background-color: rgba(255, 255, 255, 0.9);
      color: var(--mainpurple);
   
   }
`


const ScrollRemote = () => {
   const [visible, setVisible] = useState(false);

   // 스크롤 위치에 따라 버튼을 보이거나 숨김
   const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
         setVisible(true);
      } else {
         setVisible(false);
      }
   };

   // 페이지 최상단으로 스크롤
   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      });
   };

   useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
      }, []);

      return (
         <div className="scroll-to-top">
            
               <Button visible={visible} onClick={scrollToTop}>
                  ▲<br/>
                  TOP
               </Button>
            
         </div>
      );
   };

export default ScrollRemote;
