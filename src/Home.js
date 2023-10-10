import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import Carousel from "./component/Carousel";
import Footer from "./component/Footer";
import Form from "./component/Form";

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
