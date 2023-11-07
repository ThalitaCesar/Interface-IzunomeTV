import styled from "styled-components";

export const Container = styled.div `
margin-left: -30px;
padding-left:90px;
background: var(--medium-gray);
width:100vw;
margin-top: 120px;
padding-top:40px;
padding-bottom:30px;
@media (max-width: 1400px) {
  padding-left:30px;
}
@media (max-width: 1200px) {
  padding-left:60px;
}
@media (max-width: 924px) {
  margin-top: 40px;
  padding-top:20px;
  padding-bottom:0px;
}
@media (max-width: 624px) {
  padding-left:40px;
  margin-top: 40px;
}
`

export const FlexCardsNextVideo = styled.div `
display:flex;
margin-bottom:60px;
@media (max-width: 1180px) {
  flex-direction:column;
}
`

export const Card = styled.div `
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
              @media (max-width: 1300px) {
                margin-left:0px;
              }
              @media (max-width: 1186px) {
                width: 85vw;
                height: 298px;
              }
              @media (max-width: 580px) {
                width: 75vw;
                height: 158px;
                background: none;
                background-image: url(${props => props.backgroundImage});
                background-size: 100%;
              }
`;

export const Content = styled.div `
display:flex;
flex-direction:column;
justify-content:end;
height: 298px;

@media(max-width: 580px) {
  height: 158px;
  justify-content:end;
}
`

export const Title = styled.p `
color: var(--light-gray);
font-weight: 300;
font-size: 16px;
@media(max-width: 580px) {
  display:none;
}
`

export const TitleSection = styled.h3`
color: var(--blue);
margin-top:30px;
@media (max-width: 580px) {
  font-size:16px;
}
`