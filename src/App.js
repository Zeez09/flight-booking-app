import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Form from "./component/Form";
import Carousel from "./component/Carousel";
import Checkin from "./Checkin";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import Register from "./pages/Register";
import PrivateRoute from "./utils/Privateroute";

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
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/booking" element={<Booking />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
