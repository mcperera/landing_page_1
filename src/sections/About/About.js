import React from "react";
import { ItemCard } from "../../components/common/";

function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-screen-lg w-4/5  mx-auto">
        <div class="grid gap-x-8 gap-y-4 grid-cols-4">
          <div>
            <h1 className="text-3xl font-bold mb-6">
              Why we are <br /> best in our <br /> Town!
            </h1>
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              omnis ut maiores ad, aliquid ullam obcaecati suscipit at
              cupiditate non animi!
            </p>
            <p className="mt-2">
              Lorem ipsum dolor sittempora aliquid ullam obcaecati suscipit at
              cupiditate non animi!
            </p>
            <div className="h-28 flex justify-center items-center">
              <img
                className="h-10 w-10 hover:shadow-2xl cursor-pointer"
                src="/images/arrow.svg"
                alt="arrow"
              />
            </div>
          </div>
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </section>
  );
}

export default About;
