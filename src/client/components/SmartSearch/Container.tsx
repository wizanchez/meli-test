import React from "react";

interface IContainerProps {
  children: React.ReactNode;
}

export const Container = (props: IContainerProps) => {
  const { children } = props;
  return (
    <header className="header">
      <div className="container">
        <div className="row">{children}</div>
      </div>
    </header>
  );
};
