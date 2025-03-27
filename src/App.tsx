// @ts-nocheck
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Catalog from "./components/Catalog";
import Locations from "./components/Locations";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="font-sans bg-[#f7f7f7] text-[#000]">
        <Navbar />
        <About />
        <Catalog />
        <Locations />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
