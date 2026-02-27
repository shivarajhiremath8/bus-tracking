import Benefits from "./components/Benefits"; // NEW
import Comparison from "./components/Comparison";
import Contact from "./components/Contact";
import Ecosystem from "./components/Ecosystem"; // NEW
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import ProblemStatement from "./components/ProblemStatement";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <ProblemStatement />
      <Ecosystem /> {/* Shows them HOW it works practically */}
      <Features />
      <Comparison />
      <Benefits />  {/* Shows them WHY it saves them money/time */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;