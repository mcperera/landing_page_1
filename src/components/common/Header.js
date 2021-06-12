import React, { useState, useEffect } from "react";

function Header() {
  const [isScroll, setIsScroll] = useState(false);
  let prevScrollpos = 0;
  const onScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollpos < currentScrollPos) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    prevScrollpos = window.pageYOffset;
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{ backgroundColor: "#8b9e70" }}
      className={`duration-500 fixed top-0 left-0 right-0 text-white ${
        isScroll ? `shadow-xl` : ``
      }`}>
      <div
        className={`duration-700 max-w-screen-lg w-4/5 mx-auto flex justify-between items-center ${
          isScroll ? "h-24" : "h-32"
        }`}>
        <div className="font-bold text-2xl">Madushan Perera</div>
        <nav className="flex justify-evenly w-4/12">
          <a href="#" className="mx-2">
            Home
          </a>
          <a href="#" className="mx-2">
            About Us
          </a>
          <a href="#" className="mx-2">
            Service
          </a>
          <a href="#" className="mx-2">
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
