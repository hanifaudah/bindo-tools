import { Routes, Route } from "react-router-dom";
import "./App.css";

// components
import Layout from "components/Layout";
import Home from "components/Home";
import Kapitalisasi from "components/Kapitalisasi";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kapitalisasi" element={<Kapitalisasi />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
