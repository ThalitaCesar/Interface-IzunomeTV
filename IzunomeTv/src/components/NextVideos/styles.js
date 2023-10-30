import styled from "styled-components";

export const Container = styled.div`
margin-left: -30px;
padding-left:90px;
background: var(--medium-gray);
width:100vw;
margin-top: 120px;
padding-top:40px;
padding-bottom:30px;
`

export const Card = styled.div`
  width: 580px;
  height: 298px;
  flex-shrink: 0;
  border-radius: 20px;
  margin: 30px;
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 10px 30px;
  background: linear-gradient(180deg, rgba(41, 46, 66, 0.00) 0%, rgba(41, 46, 66, 0.70) 61.28%),
              linear-gradient(0deg, rgba(41, 46, 66, 0.40) 0%, rgba(41, 46, 66, 0.40) 100%),
              url(${props => props.backgroundImage});
              background-size: 100%;
              background-repeat: no-repeat;
`;
