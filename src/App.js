import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Form from "./component/Form";
import Carousel from "./component/Carousel";
import Checkin from "./Checkin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/carousel" element={<Carousel />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/navbar" element={<Navbar />}></Route>
        <Route path="/checkin" element={<Checkin />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
