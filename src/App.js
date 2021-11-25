import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details/:id" element={<Details />} />
      </Routes>      
    </div>
  );
}

export default App;
