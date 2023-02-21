import styled from "styled-components";

export const AppMenu = styled.div`
position:fixed;
display:flex;
flex-direction:column;
align-items:center;
justify-content: space-between;
height: 100vh;
padding:10px;
margin-top:0px;
padding-top: 30px;
border-right: 1px solid var(--light-gray);
width:6vw;
`

export const ShortMenu = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content: space-between;
 padding-top: 40px;
`

export const Icone = styled.div`
padding-bottom: 18px;
cursor: pointer;
color: var(--medium-gray);
&:hover, &:focus{
    color: var(--blue);
    };
`
export const MenuLinks = styled.div`
&:hover, &:focus{
  color: var(--blue)
  }
`