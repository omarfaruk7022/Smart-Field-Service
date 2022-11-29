import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./Components/Pages/Contact";
import Footer from "./Components/Pages/Footer";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Pages/Navbar";
// import Profiles from "./Components/Pages/Profiles";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/profiles/:id" element={<Profiles />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
