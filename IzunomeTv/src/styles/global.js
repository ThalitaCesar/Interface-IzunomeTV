import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root{
  --white:#FFFFFF;
  --blue: #11357d;
  --gray-black:#1e1c1c;
  --light-gray:#edeff3 ;
  --medium-gray:#b8bdc7;
  --strong-gray:#1C1C1C;
  --black: #000000;
  --strong-green: #264d1c;
  --light--green: #45843a;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Poppins', sans-serif;
    ::-webkit-scrollbar {
      width: 7px;
      height: 7px;
      }
      ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
      }
      ::-webkit-scrollbar-thumb {
        background: #666666;
        border: 0px none #ffffff;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: var(--blue);
      }
      ::-webkit-scrollbar-thumb:active {
        background: var(--blue);

      }
      ::-webkit-scrollbar-track {
        background:#EDEDED;
        border: 0px none #ffffff;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-track:hover {
        background: #666666;
      }
      ::-webkit-scrollbar-track:active {
        background: #666666;
      }
      ::-webkit-scrollbar-corner {
        background: #666666;
      }
  }

  body {
    background-color: var(--white);
    color: var(--medium-gray);
  }
  .notification-container {
    top: 64px;
    width: initial;
    max-width: 500px;
  }
  .padding-containers {
    padding: 15px 0;
  }
  .padding-containers > div {
    padding: 7px;
  }

  .padding-children > div {
    padding: 7px !important;
  }
  .autocomplete .MuiPaper-root {
    position: absolute;
    z-index: 999;
    min-width: initial !important;
    max-width: calc(100% - 53px);
  }
`;

export default GlobalStyle;
