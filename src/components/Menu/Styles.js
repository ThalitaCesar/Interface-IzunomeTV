import styled from "styled-components";

export const AppMenu = styled.div`
width: 94vw;
display:flex;
height:75px;
padding: 20px 15px;
top: 0; 
justify-content: space-between;
align-items: center;
z-index: 1000; 
@media (max-width: 1024px) {
  padding-left:60px;
  padding-right:30px;
  width:100vw;
}
@media (max-width: 580px) {
  padding-left:30px;
  width:90vw;
  height:70px;
}
@media (max-width: 480px) {
}
,
`

export const LinkIcon = styled.a`
text-decoration:none;
color: var(--medium-gray);
margin-right:7px;
@media (max-width: 580px) {
  margin-right:2px;
}
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
@media (max-width: 580px) {
 display:none;
}
`