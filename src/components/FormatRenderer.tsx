import { memo } from "react";
import { ArxivFormat } from "./ArxivFormat";
import { ElectroResourceFormat } from "./ElectroResourceFormat";

export enum FormatType {
  ARXIV = 1,
  ELECTRO_RESOURCE = 2
}

interface FormatRendererProps {
  type: FormatType;
}

export const FormatRenderer = memo((props: FormatRendererProps) => {
  const { type } = props;

  const renderObject = {
    [FormatType.ARXIV]: <ArxivFormat />,
    [FormatType.ELECTRO_RESOURCE]: <ElectroResourceFormat />
  };

  return <div>{renderObject[type]}</div>;
});
