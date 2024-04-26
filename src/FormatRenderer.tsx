import { memo } from "react";
import { ArxivFormat } from "./components/ArxivFormat";

export enum FormatType {
  ARXIV = 1,
}

interface FormatRendererProps {
  type: FormatType;
}

export const FormatRenderer = memo((props: FormatRendererProps) => {
  const { type } = props;

  const renderObject = {
    [FormatType.ARXIV]: <ArxivFormat />,
  };

  return <div>{renderObject[type]}</div>;
});
