import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About, Contact, Home, Services, Blog, Projects } from "./components/pages";
import Navbar2 from "./components/Navbar2";

function App() {
  return (
    <div className="App">
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;