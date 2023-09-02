import About from "../Components/Home/About/About";
import Banner from "../Components/Home/Banner/Banner";
import Brand from "../Components/Home/Brand/Brand";
import Contact from "../Components/Home/Contact/Contact";
import Services from "../Components/Home/Services/Services";

const Home = () => {
  return (
    <main className="">
      <Banner />
      <Services />
      <About />
      <Brand />
      <Contact />
    </main>
  );
};
export default Home;
