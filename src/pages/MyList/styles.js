import styled from "styled-components";


export const Container = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
margin-top: 40px;
width:94vw;
padding-bottom:50px;
@media (max-width: 1300px) {
  padding-bottom:30px;
}
@media (max-width: 580px) {
  width:60vw;
}
`;


export const GridContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr); 
height:60vh;
gap: 24px;
padding: 16px;
width:90vw;
margin-bottom: 40px;
@media (max-width: 1300px) {
  grid-template-columns: repeat(2, 1fr); 
  height:100%;
  width:90vw;
}

@media (max-width: 580px) {
  grid-template-columns: repeat(1, 1fr); 
  width:60vw;
}
`;

export const Title = styled.h3 `
color: var(--blue);
text-align:center;
font-size: 28px;
margin-bottom:40px;
@media(max-width: 920px) {
    font-size: 26px;
    margin-top:20px;
  }
@media(max-width: 580px) {
  font-size: 20px;
}
`


