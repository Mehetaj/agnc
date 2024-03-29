import About from "../Components/Home/About/About";
import Banner from "../Components/Home/Banner/Banner";
import BlogSection from "../Components/Home/BlogSection/BlogSection";
import Brand from "../Components/Home/Brand/Brand";
import Contact from "../Components/Home/Contact/Contact";
import Portfolio from "../Components/Home/Portfolio/Portfolio";
import Reviews from "../Components/Home/Review/Reviews";
import Services from "../Components/Home/Services/Services";
import SubscribeUs from "../Components/Home/SubscribeUs/SubscribeUs";

const Home = () => {
  return (
    <main className="main">
      <div className="dark:bg-[#061126] py-10">
        <Banner />
        <Services />
      </div>
      <About />
      <Portfolio />
      <Reviews />
      <Brand />
      <BlogSection />
      <Contact />
      <SubscribeUs />
    </main>
  );
};
export default Home;
