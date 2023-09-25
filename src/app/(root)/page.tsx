import About from "../Components/Home/About/About";
import Banner from "../Components/Home/Banner/Banner";
import BlogSection from "../Components/Home/BlogSection/BlogSection";
import Brand from "../Components/Home/Brand/Brand";
import Contact from "../Components/Home/Contact/Contact";
import Portfolio from "../Components/Home/Portfolio/Portfolio";
import Reviews from "../Components/Home/Review/Reviews";
import Services from "../Components/Home/Services/Services";

const Home = () => {
  return (
    <main className=" ">
      <Banner />
      <Services />
      <About />
      <Portfolio />
      <Reviews />
      <Brand />
      <BlogSection />
      <Contact />
    </main>
  );
};
export default Home;
