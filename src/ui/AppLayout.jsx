import About from "../components/About";
import Home from "../components/Home";
import NavBar from "../components/NavBar";

function AppLayout() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
    </>
  );
}

export default AppLayout;
