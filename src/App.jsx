import Home from "./components/Home";
import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize("G-CPMNN37ZXV");
  return <Home className="dark h-[100vh] w-[100vw]"></Home>;
}

export default App;
