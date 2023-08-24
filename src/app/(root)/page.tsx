import About from "../Components/Home/About/About";
import Banner from "../Components/Home/Banner/Banner";
import Brand from "../Components/Home/Brand/Brand";
import Contact from "../Components/Home/Contact/Contact";
import PageNotFound from "../Shared/PageNotFound/PageNotFound";


const Home = () => {
  return (
    <main>
      <Banner />
      <About />
      <Brand />
      <PageNotFound />
      <Contact />
    </main>
  );
};
export default Home;