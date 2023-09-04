import About from "../Components/Home/About/About";
import Banner from "../Components/Home/Banner/Banner";
import Brand from "../Components/Home/Brand/Brand";
import Contact from "../Components/Home/Contact/Contact";
import Portfolio from "../Components/Home/Portfolio/Portfolio";
import Reviews from "../Components/Home/Review/Reviews";
import Services from "../Components/Home/Services/Services";

const Home = () => {
  return (
    <main className="">
      <Banner />
      <Services />
      <About />
      <Portfolio />
      <Reviews />
      <Brand />
      <Contact />
    </main>
  );
};
export default Home;
