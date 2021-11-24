import React from "react";

export const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <header className="container mx-auto">
        <h1>誰かが課金するとどうだ明るくなったろうおじさんがサイトを照らしてくれるサービス</h1>
      </header>
      <div className="container mx-auto flex-grow">{children}</div>
      <footer className="container mx-auto">footer</footer>
    </div>
  );
};
