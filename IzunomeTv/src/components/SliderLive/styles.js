import styled, { keyframes } from "styled-components";

export const Container = styled.div`s
overflow-x: hidden;
display:flex;
flex-direction:column;
justify-content:space-between;
width: 1210px; 
height: 400px;
border-radius: 20px;
padding: 30px;
margin: 30px;
margin-bottom:-30px;
background-image: linear-gradient(
    to bottom,
    rgba(0,0,0,0) 1%,
    rgba(0,0,0,0.01) 2%,
    rgba(0,0,0,0.84) 83%,
    rgba(0,0,0,0.91) 90%
  ),
  url("${(props) => props.backgroundUrl}");
  background-size: 100%;
  background-repeat: no-repeat;
   `
export const Content  = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
height:370px;
`

export const Title  = styled.p`
color: var(--white);
font-weight: 700;
font-size: 28px;
`

export const TitleInfo  = styled.h3`
color: var(--blue);
`

export const Text  = styled.p`
color: var(--strong-gray);
font-weight: 300;
font-size: 16px;
display:flex;
justify-content: space-between;
margin-right: 120px;
align-items:start;
margin-top: 30px;
margin-bottom: 60px;
`
export const ButtonGroup  = styled.div`
display: flex;
flex-direction: row;
padding: 20px 0px;
@media(max-width: 600px) {
justify-content: space-between;
 padding-top: 250px;
 align-items: center;
 margin-top:180px;

}
@media(max-width: 375px) {
  margin-top:100px;
 }
 @media(max-width: 360px) {
  margin-top:80px;
 }
`
export const ButtonWatch  = styled.button`
max-width:115px;
display: flex;
cursor:pointer;
margin-right: 16px;
color: var(--white);
background: var(--blue);
border-radius: 16px;
padding: 7px;
align-items:center;
padding-left:7px;
justify-content: space-between;
font-size:16px;
font-weight: 600;
text-align: center;
--border-size: 0.3rem;
border: none;
  &:hover{
  filter: brightness(0.9)
  }
  .p{
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 35px;
    color: var(--light-gray)
    text-shadow: 0px 4px 2px rgba(0, 0, 0, 0.5);
    }
`;
