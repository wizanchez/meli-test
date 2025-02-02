import React from "react";

interface ITextWithLineBreaksProps {
  text: string;
}

export const TextWithLineBreaks = (props: ITextWithLineBreaksProps) => {
  const { text } = props;
  const formattedText = text.replace(/\n/g, "<br />");
  return <div dangerouslySetInnerHTML={{ __html: formattedText }} />;
};
