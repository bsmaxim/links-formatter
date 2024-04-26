import { useEffect, useState } from "react";
import { Input } from "./Input";
import { formatDate } from "../utils/utils";

export const ElectroResourceFormat = () => {
  const [title, setTitle] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [applicationDate, setApplicationDate] = useState<string>("01.01.2024");

  const [result, setResult] = useState<string>();

  useEffect(() => {
    const formattedApplicationDate: Date = new Date(applicationDate);
    const appliactionDateString = formatDate(formattedApplicationDate);

    const newResult = `${title} [Электронный ресурс] URL: ${url} (дата обращения ${appliactionDateString}).`;
    setResult(newResult);
  }, [title, url, applicationDate]);

  return (
    <div>
      <div>
        <h2>Данные:</h2>
        <div>
          <Input
            value={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Название"
          />
          <Input
            value={url}
            name="url"
            type="text"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="URL"
          />
          <Input
            value={applicationDate}
            name="applicationDate"
            type="date"
            onChange={(e) => setApplicationDate(e.target.value)}
            placeholder="Дата обращения"
          />
        </div>
      </div>
      <div>
        <h2>Результат:</h2>
        <p>{result}</p>
      </div>
    </div>
  );
};
