import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root{
  --white:#FFFFFF;
  --blue: #11357d;
  --gray-black:#1e1c1c;
  --light-gray:#e5ebf4 ;
  --medium-gray:#b3c6dd;
  --strong-gray:#5568a0;
  --black: #000000;
  --strong-green: #264d1c;
  --light--green:#79ba6e;
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Poppins', sans-serif;
    ::-webkit-scrollbar {
      width: 8px;
      height: 7px;
      }
      ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
      }
      ::-webkit-scrollbar-thumb {
        background: var(--blue);
        border: 0px none #ffffff;
        border-radius: 3px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: var(--blue);
        
      }
      ::-webkit-scrollbar-thumb:active {
        background: var(--blue);

      }
      ::-webkit-scrollbar-track {
        background:#b3c6dd;
        border: 0px none #ffffff;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-track:hover {
        background: #b3c6dd;
      }
      ::-webkit-scrollbar-track:active {
        background: #b3c6dd;
      }
      ::-webkit-scrollbar-corner {
        background: #b3c6dd;
      }
  }

  body {
    background: rgb(179,198,221);
    background: radial-gradient(circle, rgba(179,198,221,1) 0%, rgba(229,235,244,1) 81%);
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
