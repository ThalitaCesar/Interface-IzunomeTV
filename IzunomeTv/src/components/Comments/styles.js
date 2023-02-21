import styled from 'styled-components';

const Container = styled.div`

.answer {
    margin-top: 60px;
    margin-right:30px;
    width:820px;
    border-bottom: 2px solid var(--blue);
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  .input {
    position: relative;
    margin-bottom:0px;
    border:none;
    resize: none;
    &__field {
      box-sizing: border-box;
      display: block;
      width: 600px;
      border:none;
      resize: none;
      background: transparent;
      }
    }
  }
`;

export default Container;
