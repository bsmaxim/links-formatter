import { useState } from "react";
import { FormatRenderer, FormatType } from "./components/FormatRenderer";
import "./App.css";

type SelectOption<T> = Record<string, T>;

function App() {
  const [type, setType] = useState<FormatType>(FormatType.ARXIV);
  const selectOptions: SelectOption<FormatType> = {
    arXiv: FormatType.ARXIV,
    electro: FormatType.ELECTRO_RESOURCE,
  };

  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(selectOptions[e.target.value]);
  };

  return (
    <>
      <h1>Vite + React</h1>
      <select onChange={onSelect}>
        {Object.keys(selectOptions).map((value) => {
          return <option value={value}>{value}</option>;
        })}
      </select>

      <FormatRenderer type={type} />
    </>
  );
}

export default App;

