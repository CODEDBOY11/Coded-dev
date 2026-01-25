import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/services";
import Contact from "./components/sections/contact";
import Principles from "./components/sections/Principles";
import About from "./components/sections/About";
import Footer from "./components/layout/footer";
import AppLayout from "./components/layout/AppLayout";

const App = () => {
  return (
    <AppLayout>
      <Navbar />
      <Hero />
      <Projects />
      <Services />
      <Principles />
      <Contact />
      <About />
      <Footer />
    </AppLayout>
  );
};

export default App;
