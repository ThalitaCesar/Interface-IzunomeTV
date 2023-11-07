import { Link } from "react-router-dom";
import styled from "styled-components";


export const Div = styled.div`
margin:60px;
margin-right:30px
height:100vh;
margin-left: -30px;
@media (max-width: 920px) {
  margin-right:10px
}
@media (max-width: 580px) {
  margin-left: -25px;
}
`
export const FooterContainer = styled.footer`
background: #292e42;
 width:100%;
  display: flex;
  border-top-right-radius:380px;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 60px;
  left:0;
  margin-left: -30px;
  margin-top:30px;
  box-sizing: border-box;
  bottom: 0;
  overflow-x: hidden;
  border: 2px solid var(--medium-gray);
  @media (max-width: 1300px) {
    border-top-right-radius:280px;
    width:100vw;
  }
  @media (max-width: 820px) {
    border-top-right-radius:0px;
    margin-right:-30px;
    justify-content: center;
    align-items:center;
    padding: 10px 40px;

  }
  @media (max-width: 580px) {
    border-top-right-radius:0px;
  }
  @media (max-width: 480px) {
    border-top-right-radius:0px;
  }
`;

export const UpperRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  color: var(--strong-gray);
  margin:30px;
  align-items:center;
`;

export const Logo = styled.img`
height: 67px;
align-self:center;
@media (max-width: 480px) {
  height: 47px;
  margin-left:-20px;
}

`
export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:30px;
  @media(max-width: 820px) {
    flex-direction: column;

  }
  @media(max-width: 664px) {
    flex-direction: column;
    padding-top:30px;
  }
`;
export const Column = styled.div`
display: flex;
flex-direction: column;
.Footer-title{
    color: #79ba6e;
    font-size: 18px;
    font-weight: 300;
    margin-bottom:16px;
}
`
export const FooterLink = styled(Link)`
  text-decoration: none;
  color: var(--medium-gray);
  font-weight: 300;
  font-size: 16px;
  line-height: 14px;
  padding-bottom:15px;
  &:hover {
    color: #F6B048;
  }
`;
export const SocialNetworksContainer = styled.div`
  display: flex;
  margin-top:40px;
  align-items: center;
  justify-content:center;
  color:var(--white);
  min-width: fit-content;
  @media(max-width: 820px) {
    padding-top:30px;
    flex-direction: column;
  }
  @media (max-width: 480px) {
    width:60vw;
    text-align:center;
  }
  
`;


export const LowerRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  h3 {
    color: #fff;
  }
  p {
    font-size: 0.75rem;
  }
  @media(max-width: 700px) {
    flex-direction: column;
    text-align: start;
  }
`;
