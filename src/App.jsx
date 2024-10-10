import React, { useRef } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar"; 
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  const aboutRef = useRef(null);
  const graphRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToGraph = () => {
    graphRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-[#f2f2f2]"
      style={{
        background:
          "linear-gradient(131deg, rgb(232, 229, 254) 26.82%, rgb(255, 238, 216) 96.89%)",
        minHeight: "100vh",
      }}
    >
      <Navbar scrollToAbout={scrollToAbout} scrollToGraph={scrollToGraph} />

      <Header />
      <Content aboutRef={aboutRef} graphRef={graphRef} />
      <Footer />
    </div>
  );
}

export default App;
