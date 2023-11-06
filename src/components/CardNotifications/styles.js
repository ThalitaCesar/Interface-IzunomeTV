import styled from 'styled-components';

const Container = styled.div`
border: 2px solid var(--medium-gray);
border-radius:16px;
margin-top:40px;
margin-right:30px;
margin-left:30px;
@media (max-width: 1300px) {
  margin-left:30px;
}
  @media (max-width: 920px) {
    width:83vw;
    margin-left:40px;
  }
  @media (max-width: 624px) {
    width:75vw;
    margin-left:-5px;
    margin-bottom:50px;
  }
`;

export default Container;



export const ContainerNotifications = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin:20px;
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
  width:100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  height: 3.5rem;
  width: 3.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
`;

export const Info = styled.div`
  display: flex;
  gap: 0.25rem;
  display:flex;
  width: 70%;
  justify-content:start;
  align-items:center;
`;

export const Title = styled.span`
  font-weight: bold;
  color: var(--blue);
  margin-left:9px;
  @media (max-width: 624px) {
    font-size: 17px;
  }
`;

export const Text = styled.span`
  font-size: 0.875rem;
  color: var(--strong-gray);
  margin-top: 15px;

`;

export const CloseButton = styled.div`
  padding: 0.5rem 1rem;
  color: var(--light-gray);
  font-size: 25px;
  width: 10%;
`;
export const Header = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;
