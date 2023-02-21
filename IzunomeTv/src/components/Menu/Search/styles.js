import styled from "styled-components";

export const SearchbarContainer = styled.div`
  background-color: node;
  border: 2px solid var(--medium-gray);
  padding: 10px 15px;
  display: flex;
  align-items: center;
  border-radius: 22px;
  margin: 0 10px;
  width: 385px;
  height: 50px;

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
  @media(max-width: 600px) {
    background-color:transparent;
    margin-left: 0px;
    width: 120px;
    }
     `