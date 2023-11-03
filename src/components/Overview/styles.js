import styled from "styled-components";

export const ContainerOverview = styled.div`
margin:60px;
margin-right:30px
height:100vh;
@media (max-width: 920px) {
  margin-right:10px
}
@media (max-width: 580px) {
  margin:20px;
  margin-right:0px
  margin-left:60px;
}
`

export const Title = styled.h3`
color: var(--blue);
margin-top:30px;
@media (max-width: 580px) {
  font-size:16px;
}
`

export const FlexTitle = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin-top:30px;
`

export const Button = styled.div`
margin:30px;
display: flex;
cursor:pointer;
color: var(--strong-gray);
border: 2px solid var(--medium-gray);
border-radius: 4px;
padding:5px 12px ;
align-items:center;
justify-content: space-between;
font-size:14px;
font-weight: 400;
text-align: center;
min-width:90px;
  &:hover{
  background: var(--medium-gray);
  color: var(--blue)
  }
  .p{
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 35px;
    color: var(--light-gray)
    text-shadow: 0px 4px 2px rgba(0, 0, 0, 0.5);
    }
    @media (max-width: 580px) {
      margin:0;
      margin-top:30px;
      margin-bottom:30px;
      margin-left:10px;
      min-width:80px;
      padding:5px 5px ;
      height:40px;
    }
`