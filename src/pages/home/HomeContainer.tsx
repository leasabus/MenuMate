import React from "react";

export const HomeContainer: React.FC = () => {
  return (
    <>
      <section className="p-20 flex flex-row items-start justify-between w-full h-auto">
        <div className="flex flex-col ">
          <h4 className="font-bold tracking-widest text-xl">
            Welcome to MenuMate
          </h4>
          <h1 className="mt-4 text-6xl font-bold text-orange-dark">
            Your Culinary
          </h1>
          <h1 className="mt-4 text-6xl font-bold text-orange-dark">
            Adventure
          </h1>
          <h1 className="mt-4 text-6xl font-bold text-orange-dark">Awaits!</h1>

          <div className="mt-6 text-start font-semibold text-dark">
            <span>
              Discover global recipes, chef secrets, and food stories that
              <br />
              ignite your passion for cuisine. MenuMate has it all. Join us in
              <br />
              celebrating the art of cooking, one dish at a time. Start your
              <br />
              culinary adventure with MenuMate today!
            </span>
          </div>

          <div className="flex flex-row items-start gap-6 mt-6">
            <button className=" bg-orange text-white hover:text-dark  font-semibold  py-2 px-4 border border-orange hover:bg-white rounded hover:-translate-y-1 hover:scale-110  transition ease-in-out delay-150">
              Add to cart
            </button>
            <button className=" bg-transparent  font-semibold  py-2 px-4 border border-orange hover:bg-orange hover:text-white rounded hover:-translate-y-1 hover:scale-110  transition ease-in-out delay-150">
              Book a table
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center ">
          <img
            src="./public/assets/burguers/home-2.jpg"
            alt=""
            className="rounded-xl"
          />
        </div>
      </section>
    </>
  );
};
