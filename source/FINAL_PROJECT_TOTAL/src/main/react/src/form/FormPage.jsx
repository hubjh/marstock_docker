import GlobalStyle from "../utils/style/GlobalStyle";
import Header from "../utils/style/Header";
import Footer from "../utils/style/Footer";
import InlineContainer from "../utils/style/InlineContainer";
import styled from "styled-components";
import { useState } from "react";
import { Container, Example } from "./FormStyle";



const FormPage = () => {
   const [ selectedCategory, setSelectedCategory ] = useState("카테고리1");

   const handleCategoryClick = (category) => {
      setSelectedCategory(category);
   };
   
   // InlineContainer의 color = "orange" 를 입력하면 오렌지색 배경이 나오고, 공백("")인 경우는 보라색 배경이 나온다.
   return (
      <>
         <Header />
         <InlineContainer color=""
         category ={
            <>
            <div onClick={() => handleCategoryClick('카테고리1')} style={selectedCategory === '카테고리1' ? { color: 'var(--mainlightpurple)', fontWeight: 700 } : {}}>카테고리1</div>
            <div onClick={() => handleCategoryClick('카테고리2')} style={selectedCategory === '카테고리2' ? { color: 'var(--mainlightpurple)', fontWeight: 700 } : {}}>카테고리2</div>
            <div onClick={() => handleCategoryClick('카테고리3')} style={selectedCategory === '카테고리3' ? { color: 'var(--mainlightpurple)', fontWeight: 700 } : {}}>카테고리3</div>
            </>
         }
         contents ={
            <Container>
               <Example className="a" style={selectedCategory === '카테고리1' ? {} :{display: 'none'}}/>
               <Example className="b" style={selectedCategory === '카테고리2' ? {} :{display: 'none'}}/>
               <Example className="c" style={selectedCategory === '카테고리3' ? {} :{display: 'none'}}/>
            </Container>
         }> 
         </InlineContainer>
         <Footer />
      </>
   )
}

export default FormPage;