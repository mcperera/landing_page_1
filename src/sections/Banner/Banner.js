import React from "react";

import { jumboArea } from "./Banner.module.css";

function Banner() {
  return (
    <section id="banner" className="pt-24 pb-24">
      <div className={`${jumboArea} pt-28`}>
        <div className="max-w-screen-lg w-4/5 mx-auto text-white">
          <div className="flex justify-between">
            <div>
              <h1 className="mb-4 font-bold text-4xl">
                Furniture that <br /> every one <br /> loves
              </h1>
              <p>
                We have 5000+ Review and our customers trust on our <br />{" "}
                Furniture and Quality products
              </p>
            </div>
            <div className="mr-16">
              <img src="/images/bannerImg1.png" alt="banner-img1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
