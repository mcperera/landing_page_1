import React from "react";
import { Header, Footer } from "./common/";

function Layout({ children }) {
  return (
    <div>
      <div className="hidden sm:block">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
      <div className="block sm:hidden">
        <div className="flex flex-col h-screen w-screen justify-center items-center">
          <h1 className="text-2xl mb-2">Mobile View is not available </h1>
          <span className="text-3xl">😥</span>
        </div>
      </div>
    </div>
  );
}

export default Layout;
