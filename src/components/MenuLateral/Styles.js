import styled from "styled-components";

export const AppMenu = styled.div`
  background-color: var(--light-gray);
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  height: 100vh;
  padding: 10px;
  margin-top: 0px;
  padding-top: 30px;
  z-index: 9999; 
  border: 2px solid var(--medium-gray);
  width: ${(props) => (props.isHovered ? '240px' : '5vw')};
  &:hover {
    width: 240px;
  }

  /* Adicione o evento onMouseLeave aqui */
  &:hover::after {
    content: '';
    position: fixed;
    top: 0;
    left: 187px;
    width: 100%;
    height: 100%;
    background: rgba(41, 46, 66, 0.7);
    z-index: 9998;
  }
  
  /* Use pointer-events para evitar a detecção de hover no overlay */
  &::after {
    pointer-events: none;
  }
  p, a {
    margin-left: 10px;
    margin-top: 1px;
    font-size: 14px;
    text-decoration: none;
    color: var(--strong-gray);
    
    &:hover, &:focus {
      color: var(--blue);
    };
  }
`;

export const ShortMenu = styled.div`
 display:flex;
 flex-direction:column;
 align-items:start;
 justify-content: space-between;
 padding-top: 40px;

`

export const Icone = styled.div`
padding-bottom: 18px;
cursor: pointer;
color: var(--strong-gray);
display:flex;
justify-content:center;
align-item:center;
&:hover, &:focus{
    color: var(--blue);
    };
`
export const MenuLinks = styled.div`
display:flex;
justify-content:center;
align-items:center;
&:hover, &:focus{
  color: var(--blue)
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); 
  z-index: 9998; 
  display: ${(props) => (props.isHovered ? 'block' : 'none')};
`;