import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import { Recidencies } from "./components/Recidencies";
import Value from "./components/Value";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="app ">
      <div className="bg-[#131110]  ">
        <div className="white-gradient top-10 left-0" />
        <Navbar />
        <Hero />
      </div>
      <Companies/>
      <Recidencies/>
      <Value/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}
