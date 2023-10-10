import Navbar from "./Navbar";
import Banner from "./Banner";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Form from "./Form";

function Home() {
  return (
    <>
      <div className="page-wrap">
        <Navbar />
        <Banner />
        <Form />
        <Carousel />
        <Footer />
      </div>
    </>
  );
}

export default Home;
