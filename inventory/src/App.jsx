import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Topbar from "./components/topbar/Topbar";
import Line from "./components/line/Line";
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
          <Intro/>
          <Portfolio/>
          <Contact/>
    </div>
  );
}


export default App;
