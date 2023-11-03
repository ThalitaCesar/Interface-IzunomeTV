import styled from "styled-components";


export const Container = styled.div`
margin-top:50px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media(max-width: 1024px) {
    padding:2px;
  }
@media(max-width: 580px) {
    padding:20px;
    margin-left:-50px;
    margin-top:0px;
  }
  @media(max-width: 480px) {
    margin-left:-30px;
    margin-top:0px;
    padding:10px;
  }
`;

export const TextContainer = styled.div `
border: 2px solid var(--medium-gray);
border-radius: 16px;
width:70vw;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:30px;
@media(max-width: 580px) {
    font-size: 16px;
    margin-top:30px;
  }
`
export const Title = styled.h3 `
color: var(--blue);
text-align:center;
font-size: 28px;
@media(max-width: 920px) {
    font-size: 18px;
  }
@media(max-width: 580px) {
  font-size: 16px;
  margin-top:30px;
}
`

export const Text = styled.p `
color: var(--strong-gray);
font-weight: 300;
font-size: 16px;
display:flex;
justify-content: space-around;
align-items:start;
margin-top: 30px;
text-align:center;
@media(max-width: 580px) {
  font-size: 12px;
  margin-right: 0px;
  margin-bottom: 0px;
}
`