import React from "react";

export const GetMoviesApiData = async () => {
  try {
    const response = await fetch(
      "https://www.omdbapi.com/?i=tt3896198&apikey=7eca37c1&s=titanic&page=1"
    );

    const data = response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
