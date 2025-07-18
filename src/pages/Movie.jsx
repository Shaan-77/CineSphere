import React from "react";
import { useLoaderData } from "react-router-dom";
import { Card } from "../Components/UI/Card";

const Movie = () => {
  const moviesData = useLoaderData();

  return (
    <>
      <div className="">
        <ul className="container grid grid-three--cols">
          {moviesData.Search.map((currMovie) => {
            return <Card key={currMovie.imdbID} currMovie={currMovie} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Movie;
