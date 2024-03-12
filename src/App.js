import { Route, Routes } from "react-router-dom";
import "./App.css";
import Introduce from "./pages/Introduce";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Introduce />} />
        <Route path="/quiz/:difficulty/:amount" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
