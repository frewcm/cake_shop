import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Footer from "./sections/Footer"
import Header from "./sections/Header"
import NavBar from "./sections/NavBar"
import SectionFive from "./sections/SectionFive"
import SectionFour from "./sections/SectionFour"
import SectionOne from "./sections/SectionOne"
import SectionThree from "./sections/SectionThree"
import SectionTwo from "./sections/SectionTwo"

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.2, // lower = smoother, higher = snappier
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="w-full">
        <NavBar />
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <Footer />
      </div>
    </>
  )
}

export default App
