import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Component/NavBar/Navbar";
import { Home } from "./Container/HomePage/HomePage";
import Info from "./Container/Info/Info";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
