import styled from 'styled-components';

const Container = styled.div`
border: 2px solid var(--medium-gray);
border-radius:16px;
margin-top:40px;
margin-right:30px;
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
.icons{
  display:flex;
  align-items:center;
  justify-content:end;
  font-size:14px;
  font-weight:300;
  width:100%;
  .icon{
      margin-left:10px;
      max-width:100px;
      height:35px;
      padding:10px;
      cursor:pointer;
      align-items:center;
      background: var(--medium-gray);
      border-radius: 6px;
      color: var(--blue);
      display:flex;
      align-item:center;
      justify-content:center;
      &:hover{
          filter: brightness(0.9)
          }
  }
`

export const UserComment = styled.div`
display: flex;
align-items:start;
justify-content:space-between;;
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
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  height: 3.5rem;
  width: 3.5rem;
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
`;

export const UserHeader = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;