import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineGooglePlus,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#8b9e70" }} className=" mx-auto">
      <div className="max-w-screen-lg h-72 w-4/5 mx-auto flex flex-col justify-center items-center text-white text-center">
        <h1 className="font-bold text-xl py-6">Madushan Perera</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          incidunt dignissimos sapiente, reiciendis voluptate aut natus corrupti
          veniam ducimus ab. Harum quo consectetur tenetur, delectus assumenda
          facilis ad corporis quae?
        </p>
        <div className="w-32 flex justify-between text-2xl mt-8">
          <AiOutlineTwitter className="cursor-pointer hover:text-gray-200" />
          <AiFillFacebook className="cursor-pointer hover:text-gray-200" />
          <AiOutlineGooglePlus className="cursor-pointer hover:text-gray-200" />
          <AiFillInstagram className="cursor-pointer hover:text-gray-200" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
