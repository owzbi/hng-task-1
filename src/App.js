import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";
import I4G from "./Images/I4G (1).png";
import zuriLogo from "./Images/logo.36d2d48a.png";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="contact" element={<Contact />} />
        </Routes>

        <footer>
          <div id="zuri__logo">
            <img src={zuriLogo} alt="Zuri Logo" />
          </div>

          <h5>HNG Internship 9 Frontend Task</h5>

          <div id="I4G__logo">
            <img src={I4G} alt="I4G Logo" />
          </div>
        </footer>
      </Router>
    </div>
  );
}

export default App;
