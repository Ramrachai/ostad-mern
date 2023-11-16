import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Projects, Services, Team, Testimonials } from "./pages";
import Navbar from "./components/Header/Navbar3"



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
    </div>
  );
}

export default App;