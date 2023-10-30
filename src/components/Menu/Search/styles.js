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
 color: var(--strong-gray);
  @media(max-width: 600px) {
    border-radius: 12px;
    padding: 0px 0px;
     },
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
  @media(max-width: 600px) {
    background-color:transparent;
    margin-left: 0px;
    width: 120px;
    }
     `