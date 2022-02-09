import React from "react";

export default function Project({ name, link, homepage }) {
  return (
    <section
      className="effect-container h-40 border border-charcoal overflow-hidden  w-full lg:w-6/12 md:w-6/12 mx-3 md:mx-0 lg:mx-0"
    >
      <img
        className="w-full effect-image bg-cover"
        alt="screenshot of project"
        src={require(`../../assets/images/${name}.png`)}
      />
      <div className="effect-overlay">
        <div className="effect-text">
          <h1 className="text-center text-charcoal mb-5">{name}</h1>
          <div className="flex flex-around">
            <button className="bg-charcoal w-30 s text-sky font-bold py-2 px-4 border-b-4 border-sky hover:border-charcoal rounded">
              <a
              href={link}
              target="blank"
              alt="project"
              >
                GitHub
              </a>
            </button>
            <button className="bg-charcoal w-30 s text-sky font-bold py-2 px-4 border-b-4 border-sky hover:border-charcoal rounded">
            <a
              href={homepage}
              target="blank"
              alt="project"
              >
                {homepage ? 'Live App' : 'In Progress'}
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="text-charcoal flex">
        <span className="pt-1 ml-2 font-bold text-xl ">{name}</span>
      </div> */
}
