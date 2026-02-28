import { BrowserRouter, Route, Routes } from "react-router-dom";
import Benefits from "./components/Benefits";
import Comparison from "./components/Comparison";
import Contact from "./components/Contact";
import Ecosystem from "./components/Ecosystem";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import ProblemStatement from "./components/ProblemStatement";

// New Pages
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsConditions from "./components/TermsConditions";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <ProblemStatement />
      <Ecosystem />
      <Features />
      <Comparison />
      <Benefits />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;