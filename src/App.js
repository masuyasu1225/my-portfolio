import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router basename="/my-portfolio">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
