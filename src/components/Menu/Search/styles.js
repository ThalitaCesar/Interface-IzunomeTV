import styled from "styled-components";

export const SearchbarContainer = styled.div`
  background-color: var(--medium-gray);
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  margin: 0 10px;
  width: 385px;
  height: 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
  color: var(--strong-gray);
  @media (max-width: 1024px) {
    width: 285px;
  }
  @media (max-width: 580px) {
    width: 135px;
  }
`;

export const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  margin-left: 15px;
  font-size: 0.9rem;
  width: 315px;
  height: 50px;
  color: var(--strong-gray);
  &::placeholder {
    color: var(--strong-gray);
  }
  @media(max-width: 580px) {
    background-color:transparent;
    width: 100px;
    }
     `