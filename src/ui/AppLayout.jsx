import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import Portfolio from "../components/Portfolio";
import SocialLinks from "../components/SocialLinks";

function AppLayout() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      <SocialLinks />
    </>
  );
}

export default AppLayout;
