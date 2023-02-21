import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction: row;
justify-content:start;
height:100vh;
width:100vw;
overflow-x: hidden;
`
export const ColumnTwo = styled.div`
display:flex;
flex-direction:column;
width:90vw;
height: 100vh;
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
height:60px;
margin:10px;
padding-left:0px;
justify-content: space-around;
color: var(--blue);
align-items: center;
.button{
    background:none;
    border:none;
    color: var(--blue);
    font-size: 16px;
    cursor:pointer;
    width: 160px;
    height:30px;
    border-radius:20px;
    &:hover{
        background: var(--medium-gray);
    }
}
`