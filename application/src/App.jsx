import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Utilities/Homepage";
import ShortUrlRedirect from "./components/Utilities/ShortUrlRedirect ";
import Toggle from "./components/Utilities/Toggle";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:urlCode" element={<ShortUrlRedirect />} />
      </Routes>
      <>
        <Toggle />
      </>
    </div>
  );
}

export default App;
