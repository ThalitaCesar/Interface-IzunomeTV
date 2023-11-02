import styled from "styled-components";

export const Video = styled.div `
max-width:63vw;
@media (max-width: 924px) {
    max-width:100vw;
    min-width:83vw;
    margin-left:30px;
  }
  @media (max-width: 580px) {
    max-width:90vw;
    min-width:73vw;
    margin-left: -10px;
  }
.flex{
    display:flex;
    justify-content:space-between;
    margin-top:16px;
    @media (max-width: 580px) {
        flex-direction:column;
      }
    .title-video{
        color: var(--strong-gray);
        @media (max-width: 594px) {
            font-size:0.9rem;
            margin-bottom:10px;
          }
    };
    .icons{
        display:flex;
        align-items:center;
        font-size:14px;
  font-weight:300;
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
