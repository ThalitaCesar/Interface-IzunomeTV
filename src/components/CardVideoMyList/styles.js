import styled from "styled-components";



export const CarouselContainer= styled.div`
width: 180px;
height:200px;
display:flex;
flex-direction:column;
.item-name{
  color: var(--strong-gray);
  font-size:16px;
  margin-top:6px;
}

.icons{
  display:flex;
  align-items:center;
  justify-content:end;
  font-size:14px;
  font-weight:300;
  width:100%;
  margin-top: -190px;
  margin-left: 80px;
  @media (max-width: 580px) {
    margin-left: 60px;
    margin-top: -180px;
  }
  .icon{
    display:flex;
    align-items:center;
    justify-content:center;
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
    height:150px;
    padding: 12px;
    cursor:pointer;
    @media (max-width: 580px) {
      width: 250px;
      height:140px;
    }
`