import Router from "./routes"
import GlobalStyle from "./styles/global"
import { YoutubeProvider } from "./api/YoutubeContext";

function App() {

    return (
        <YoutubeProvider>
            <Router/>
            <GlobalStyle/>
        </YoutubeProvider>

    )
}

export default App
