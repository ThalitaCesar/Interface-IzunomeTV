import styled from "styled-components";

export const AppMenu = styled.div`
width: 90vw;
display:flex;
height:60px;
margin:20px;
padding-left:0px;
justify-content: space-between;
align-items: center;
`

export const LinkIcon = styled.a`
text-decoration:none;
color: var(--medium-gray);
margin-right:7px;
&:hover, &:focus{
color: var(--blue)
}
`

export const MenuLinks = styled.div`
&:hover, &:focus{
  color: var(--blue)
  }
`

export const Logo = styled.img`
height: 24px;
align-self:center;
`