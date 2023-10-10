import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Form from "./Form";
import Carousel from "./Carousel";
import Checkin from "./Checkin";
import Login from "./Login";
import Signin from "./Signin";
import Booking from "./Booking";


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
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
      </Routes>
    </Router>
  );
}

export default App;