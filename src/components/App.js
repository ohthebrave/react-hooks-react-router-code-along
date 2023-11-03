import Home from "./Home";
import NavBar from "./NavBar";
import About from "./About";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";


function App() {
    return (
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    );
  }
  
  export default App;