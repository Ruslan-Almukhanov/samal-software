import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Locomotives from "pages/Locomotives";
import Map from "./pages/Map";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/locomotives" element={<Locomotives />} />
          <Route path="/map" element={<Map />} />
        </Route>
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </div>
  );
}

export default App;
