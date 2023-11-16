import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Projects, Services, Team, Testimonials } from "./pages";
import Header from "./components/Header/Header"
import { Header2 } from "./components/Header/Header2";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Header2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonials />} />
      </Routes>
    </div>
  );
}

export default App;