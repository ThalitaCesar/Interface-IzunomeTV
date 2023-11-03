import styled from "styled-components";

export const HomeContainer = styled.div`
display:flex;
flex-direction: row;
justify-content:start;
height:100vh;
width:100vw;
overflow-x: hidden;
magin: 0;
border-right:2px solid var(--medium-gray);
border-bottom:2px solid var(--medium-gray);
`
export const ColumnTwo = styled.div`
display:flex;
flex-direction:column;
width:90vw;
height: 100vh;
bottom:0;
@media (max-width: 580px) {
    width:80vw;
    margin-left:65px;
  }
`

export const ColumnOne = styled.div`
display:flex;
flex-direction:column;
width:6vw;
height: 100vh;
`
