import styled from "styled-components";

export const AppMenu = styled.div`
width: 96vw;
display:flex;
height:75px;
margin-left:-30px;
padding: 20px 15px;
padding-left: 30px;
justify-content: space-between;
align-items: center;
border-bottom:2px solid var(--medium-gray);
border-top:2px solid var(--medium-gray);
border-right:2px solid var(--medium-gray);
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