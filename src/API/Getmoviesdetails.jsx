import React from "react";

export const Getmoviesdetails = async ({ params }) => {
  const id = params.movieID;

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=7eca37c1`
    );

    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
