import styled from "styled-components";

export const ContainerOverview = styled.div`

margin:60px;
margin-right:30px
`

export const Title = styled.h3`
color: var(--blue);
margin-top:30px;
`

export const FlexTitle = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin-top:30px;
`

export const Button = styled.div`
margin:30px;
max-width:115px;
display: flex;
cursor:pointer;
color: var(--medium-gray);
border: 1px solid var(--medium-gray);
border-radius: 25px;
padding: 7px;
align-items:center;
padding-left:7px;
justify-content: space-between;
font-size:14px;
font-weight: 600;
text-align: center;
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
`