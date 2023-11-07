import styled from 'styled-components';

export const Wrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: stretch;
  color: white;
`;

export const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  position: relative;
  text-align: left;
  @media (max-width: 580px) {
    display:none;
    
  }
`;

export const RightSection = styled.div`
  background-color: #292e42;
  flex: 1;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 16px;
  color: var(--medium-gray);
  width:50vw;
`;

export const BackgroundImage = styled.div`
  background-size: cover;
  width:50vw;
  position: relative;
  height:100vh;
  background-image: linear-gradient(
    to bottom,
    rgba(41, 46, 66,0.2) 1%,
    rgba(41, 46, 66,0.2) 2%,
    rgba(41, 46, 66,0.84) 83%,
    rgba(41, 46, 66,0.91) 90%
  ),
  url("${ (props) => props.backgroundUrl}");
`;


export const Content = styled.div`
height:100vh;
width:50vw;
padding:60px;
  display:flex;
  flex-direction:column;
  align-items:start;
  justify-content:center;
  color: var (--medium-gray);
  h1{
    font-size:44px;
    @media (max-width: 718px) {
        font-size:24px;
      }
  }
  p{
    font-weight: 300;
    font-size:18px;
    margin-top:10px;
    @media (max-width: 718px) {
        font-size:14px;
      }
  }
`;

export const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  border-radius: 8px;
  margin-top:20px;
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items:start;
`;

export const FormInput = styled.input`
background-color: #292e46;
padding: 10px 15px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 0px;
margin: 10px 0px;
width: 400px;
border:none;
margin-bottom:0px;
height: 60px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
color: var(--light-gray);
&::placeholder {
    color: var(--medium-gray);
    font-weight: bold;
  }
@media (max-width: 1024px) {
  width: 320px;
}
@media (max-width: 580px) {
  width: 320px;
}
`;

export const FormButton = styled.button`
  padding: 12px;
  font-size: 18px;
  width: 400px;
  background: rgba(17, 53, 125, 0.9);
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;
  margin-top:30px;
  &:hover {
    filter: brightness(0.9)
  }
  @media (max-width: 1024px) {
    width: 320px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin: 16px 0;

  span {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    color: var(--medium-gray);
    font-weight: bold;
    font-size: 20px;
    border: 2px solid var(--medium-gray);
    border-radius: 50%;
    margin-right: 8px;
    cursor:pointer;
  }
`;
export const Logo = styled.img`
height: 48px;
align-self:center;
margin-bottom: 50px;

`

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translate(-50%, -50%);
  span{
    cursor:pointer;
  }
`;

export const LinkIcon = styled.a`
text-decoration:none;
color: var(--light-gray);
margin-right:12px;
@media (max-width: 580px) {
  margin-right:2px;
}
&:hover, &:focus{
color: var(--blue)
}
`