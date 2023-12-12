import styled from "styled-components";



export const CarouselContainer= styled.div`
width: 270px;
height:220px;
display:flex;
flex-direction:column;
.item-name{
  color: var(--strong-gray);
  font-size:14px;
  margin-top:6px;
}

`

export const CarouselItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: 8px;
    background-image: url("${(props) => props.backgroundUrl}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    width: 270px;
    height: 150px;
    padding: 12px;
    cursor: pointer;

    @media (max-width: 580px) {
        width: 250px;
        height: 140px;
    }
`;
