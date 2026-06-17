import About from "../components/about";
import Contact from "../components/contact";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Portfolio from "../components/portfolio";
import Services from "../components/service";

export default function Home() {
  return (
    <main className="container-start">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </main>
  );
}
