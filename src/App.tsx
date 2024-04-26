import { useState } from "react";
import { FormatRenderer, FormatType } from "./FormatRenderer";
import './App.css'

function App() {
  const [type, setType] = useState<FormatType>(FormatType.ARXIV);

  return (
    <>
      <h1>Vite + React</h1>
      <FormatRenderer type={FormatType.ARXIV} />
    </>
  );
}

export default App;

