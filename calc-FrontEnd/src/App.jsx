import { useState } from "react";
import { callApi } from "./api";
import "./App.css";   // Import external CSS

function App() {
  const [A, setA] = useState("");
  const [B, setB] = useState("");
  const [result, setResult] = useState("");

  const handleOperation = async (operation) => {
    try {
      const res = await callApi("GET", `${operation}/${A}/${B}`);
      setResult(res);
    } catch {
      setResult("Error calling API");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Arithmetic Calculator</h1>

      <div className="input-box">
        <input
          type="number"
          placeholder="Enter A"
          value={A}
          onChange={(e) => setA(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter B"
          value={B}
          onChange={(e) => setB(e.target.value)}
        />
      </div>

      <div className="button-box">
        <button onClick={() => handleOperation("add")}>Add</button>
        <button onClick={() => handleOperation("sub")}>Sub</button>
        <button onClick={() => handleOperation("mul")}>Mul</button>
        <button onClick={() => handleOperation("div")}>Div</button>
        <button onClick={() => handleOperation("mod")}>Mod</button>
      </div>

      <div className="result">
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
}

export default App;
