import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ServiceCategories from "./components/ServiceCategories";
import TrustSection from "./components/TrustSection";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";

function Home() {
  return (
    <div className="container">
      <div className="div1">
        <div className="div1nav">
          <Navbar />
        </div>
        <div className="div1hero">
      <Hero />
      </div>
      <div className="divser">
      <ServiceCategories />
      </div>
      <div className="divtrust">
      <TrustSection />
      </div>
      </div>
</div>
   
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;