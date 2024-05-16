import ReactGA from "react-ga4";
import useEffect from "react";
import "./App.css";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";

ReactGA.initialize("Your-Measurement-ID");

function App() {
  useEffect(() => {
    ReactGA.initialize("G-NZNQ0SG1YY");
  }, []);
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  return (
    <div>
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
