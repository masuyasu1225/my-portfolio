import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home.js";
import Navbar from "./Navbar";

const homeUrl = process.env.PUBLIC_URL;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={homeUrl} element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
