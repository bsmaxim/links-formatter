import { memo, useEffect, useState } from "react";
import { Input } from "./Input";
import { formatAuthors, formatDate } from "../utils/utils";

interface ArxivFormatProps {}

export const ArxivFormat = memo((props: ArxivFormatProps) => {
  const {} = props;
  const [authors, setAuthors] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [updateDate, setUpdateDate] = useState<string>("01.01.2022");
  const [applicationDate, setApplicationDate] = useState<string>("01.01.2024");

  const [result, setResult] = useState<string>();

  useEffect(() => {
    const formattedAuthors = formatAuthors(authors);

    const formattedUpdateDate: Date = new Date(updateDate);
    const updateDateString = formatDate(formattedUpdateDate);

    const formattedApplicationDate: Date = new Date(applicationDate);
    const appliactionDateString = formatDate(formattedApplicationDate);

    const newResult = `${formattedAuthors} ${title} [Электронный ресурс] // arXiv.org ${formattedUpdateDate.getFullYear()}. Дата обновления: ${updateDateString}. URL: ${url} (дата обращения ${appliactionDateString}).`;
    setResult(newResult);
  }, [authors, title, updateDate, applicationDate]);

  return (
    <>
      <div>
        <h2>Данные:</h2>
        <div>
          <Input
            value={authors}
            name="authors"
            onChange={(e) => setAuthors(e.target.value)}
            placeholder="Авторы"
          />
          <Input
            value={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Название"
          />
          <Input
            value={updateDate}
            name="updateDate"
            type="date"
            onChange={(e) => setUpdateDate(e.target.value)}
            placeholder="Дата обновления"
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
    </>
  );
});
