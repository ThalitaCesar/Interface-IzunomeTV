import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: linear-gradient(90deg, rgba(102,208,204,0.6166841736694677) 0%, rgba(252,215,60,0.6306897759103641) 50%, rgba(234,100,81,0.3169642857142857) 100%);  color: #c6c6c6;
  width:1280px;
  display: flex;
  border-top-right-radius:80px;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 60px;
  left:0;
  margin-top:30px;
  box-sizing: border-box;
  bottom: 0;
  overflow-x: hidden;
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
    color: var(--light--green);
    font-size: 18px;
    margin-bottom:16px;
}
`
export const FooterLink = styled(Link)`
  text-decoration: none;
  color: var(--strong-gray);
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  padding-bottom:15px;
  &:hover {
    color: var(--light--green);
  }
`;
export const SocialNetworksContainer = styled.div`
  display: flex;
  margin-top:40px;
  align-items: center;
  justify-content:center;
  color:var(--light--green);
  min-width: fit-content;
  @media(max-width: 820px) {
    padding-top:30px;
    flex-direction: column;
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
