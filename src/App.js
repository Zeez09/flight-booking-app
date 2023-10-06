import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/submit" element={<Submit />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/carousel" element={<Carousel />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/failure" element={<Failure />}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;