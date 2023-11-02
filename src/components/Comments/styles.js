import styled from 'styled-components';

const Container = styled.div`
border: 2px solid var(--medium-gray);
border-radius:16px;
margin-top:40px;
margin-right:30px;
@media (max-width: 1300px) {
  width:55vw;
  margin-left:30px;
}
  @media (max-width: 920px) {
    width:83vw;
    margin-left:30px;
  }
  @media (max-width: 624px) {
    width:75vw;
    margin-left:-15px;
    margin-bottom:50px;
  }
`;

export default Container;

export const UserCommentFlex = styled.div`
display:flex;
flex-direction:column;
margin-top: 30px;
display: flex;
align-items:start;
justify-content:space-between;;
padding: 1rem 1rem;
border-radius: 0.5rem;
margin-left:30px;
margin-right:30px;
@media (max-width: 624px) {
  padding:0;
}
.icons{
  display:flex;
  align-items:center;
  justify-content:end;
  font-size:14px;
  font-weight:300;
  width:100%;
  .icon{
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:10px;
    width:35px;
    max-width:120px;
    font-size:14px;
    font-weight:300px;
    height:35px;
    padding:5px;
    cursor:pointer;
    align-items:center;
    background: var(--medium-gray);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
    border-radius: 4px;
    cursor: pointer;
    color: var(--blue);
  }
`

export const UserComment = styled.div`
display: flex;
align-items:start;
justify-content:space-between;
`;

export const Input = styled.textarea`
  width:790px;
  position: relative;
  background:none;
  margin-bottom:10px;
  margin-top:16px;
  margin-left:20px;
  color: var(--strong-gray);
  height: 40px;
  border-bottom:1px solid var(--strong-gray);
  resize: none;
  border-left:none;
  border-top:none;
  border-right:none;
  &::placeholder {
    font-size: 0.875rem;
  color: var(--strong-gray);
  }
  @media (max-width: 1300px) {
    width:540px;
  }
  @media (max-width: 1024px) {
    width:400px;
  }
  @media (max-width: 920px) {
    width:590px;
  }
  @media (max-width: 820px) {
    width:520px;
  }

  @media (max-width: 780px) {
    width:480px;
  }
  @media (max-width: 718px) {
    width:450px;
    height: 50px;
  }
  @media (max-width: 624px) {
    width:260px;
    height: 50px;
  }

  @media (max-width: 500px) {
    width:160px;
    height: 50px;
  }
`

export const ContainerComments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin:20px;
  max-height: 400px;
  overflow:auto;
  padding: 1rem;
  
`;



export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items:start;
  justify-content:space-between;;
  padding: 1rem 1rem;
  background-color: var(--medium-gray);
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  height: 3.5rem;
  width: 3.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 0.25rem;
  display:flex;
  justify-content:start;
  align-items:center;
`;

export const UserName = styled.span`
  font-weight: bold;
  color: var(--blue);
  margin-left:9px;
  @media (max-width: 624px) {
    font-size: 12px;
  }
`;

export const UserText = styled.span`
  font-size: 0.875rem;
  color: var(--strong-gray);
  margin-top: 15px;

`;

export const Timestamp = styled.div`
  padding: 0.5rem 1rem;
  color: var(--blue);
  font-size: 0.875rem;
  @media (max-width: 624px) {
    font-size: 10px;
  }
`;

export const UserHeader = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;