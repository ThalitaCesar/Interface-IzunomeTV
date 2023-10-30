import styled from "styled-components";

export const CarouselContainer= styled.div`
width: 180px;
height:200px;
display:flex;
.item-name{
  color: var(--strong-gray);
  font-size:16px;
  margin-top:6px;
}
`

export const CarouselItem = styled.div`
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content:space-between;
    border-radius: 8px;
    background-image: 
    url("${(props) => props.backgroundUrl}");
    background-size: 100%;
    background-repeat: no-repeat;
    width: 270px;
    height:170px;
    padding: 12px;
    cursor:pointer;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--medium-gray);
  border-radius: 50px;
  padding: 8px;
  width: 36px;
  height: 36px;
`;

export const ArrowIcon = styled.span`
  font-size: 20px;
  color: var(--blue);
`;
