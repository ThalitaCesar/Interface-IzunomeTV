
import styled from "styled-components";


export const Flex = styled.div`
display: flex;
  justify-content: start; 
  align-items: start; 
  margin-right:0;
@media (max-width: 920px) {
  flex-direction:column;
}
`

export const TextProfile = styled.p`
color: var(--strong-gray);
margin-bottom:30px;
margin-top:7px;
a{
    color: var(--blue)
}
`

export const ButtonSave = styled.button `
display: flex;
cursor:pointer;
margin-top: 16px;
margin-left:-30px;
color: var(--white);
height: 46px;
padding: 19px 25px;
align-items: center;
flex-shrink: 0;
border-radius: 15px;
background: rgba(17, 53, 125, 0.9);
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
backdrop-filter: blur(4px);
justify-content: center;
font-size:16px;
font-weight: 400;
text-align: center;
border: none;
@media(max-width: 580px) {
height: 52px;
margin-left:0px;
}
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