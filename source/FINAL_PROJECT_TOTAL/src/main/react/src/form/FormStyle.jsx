import styled from "styled-components";


export const Container =styled.div`
   width: 100%;
   height: 100%;
   padding: 5rem;
`
export const Example = styled.div`
   width: 100px;
   height: 100px;
   background-color: blue;
   &.b{
      background-color: red;
   }
   &.c{
      background-color: green;
   }

`;