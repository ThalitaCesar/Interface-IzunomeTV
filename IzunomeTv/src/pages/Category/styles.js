import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction: row;
justify-content:start;
height:auto;
width:99.5vw;
overflow-x: hidden;
`
export const ColumnTwo = styled.div`
display:flex;
flex-direction:column;
width:90vw;
height: 100%;
`

export const ColumnOne = styled.div`
display:flex;
flex-direction:column;
width:6vw;
height: 100vh;
`
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