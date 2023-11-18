import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Projects, Services, Team, Testimonials } from "./pages";
import Navbar from "./components/Header/Navbar3"
import Footer from "./components/Footer"
import Subscribe from "./components/Subscribe/Subscribe"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonial" element={<Testimonials />} />
        </Routes>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;