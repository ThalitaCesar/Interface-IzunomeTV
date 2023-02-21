import styled from "styled-components";

export const Container= styled.div`
.Title{
    margin-bottom:30px;
    margin-top:30px;
}
`

export const CarouselContainer= styled.div`
width: 25vw;
height:120px;
display:flex;
flex-direction:row;
.item-name{
  color: var(--strong-gray);
  font-size:14px;
  margin-left:6px;
}
`

export const CarouselItem = styled.div`
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content:space-between;
    border-radius: 6px;
    background-image: 
    url("${(props) => props.backgroundUrl}");
    background-size: 100%;
    background-repeat: no-repeat;
    width: 200px;
    height:120px;
    padding: 12px;
    cursor:pointer;
  }
`
