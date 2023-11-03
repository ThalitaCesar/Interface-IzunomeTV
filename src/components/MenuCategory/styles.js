import styled from "styled-components";

export const AppMenu = styled.div`
width: 90vw;
display:flex;
height:33px;
margin:10px;
margin-top:30px;
padding-left:0px;
justify-content: space-around;
color: var(--blue);
align-items: center;
border:2px solid var(--medium-gray);
border-radius:6px;
@media (max-width: 920px) {
    width: 85vw;
    margin-left:40px;
  }
@media (max-width: 580px) {
    flex-direction:column;
    height:100%;
    width: 75vw;
    margin-left:5px;
  };
.selected{
    border:none;
    font-size: 16px;
    cursor:pointer;
    width: 100%;
    height:30px;
    border-radius:0px;
    background: var(--medium-gray);
    color: var(--blue);
};
.button{
    background:none;
    border:none;
    color: var(--strong-gray);
    font-size: 16px;
    cursor:pointer;
    width: 100%;
    height:30px;
    border-radius:0px;
    &:hover{
        background: var(--medium-gray);
        color: var(--blue);
    }
}
`