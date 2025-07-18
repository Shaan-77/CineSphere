import React from "react";

import theaterImage from "../assets/theater-side (2).png"; // Use the image you generated

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-left">
        <h1>
          <span role="img" aria-label="clapper">
            🎬
          </span>{" "}
          About CineSphere
        </h1>
        <p>
          Welcome to <span>CineSphere</span> – your ultimate destination for all
          things cinema.
        </p>
        <p>
          Born from a passion for storytelling and the magic of the silver
          screen, CineSphere is a space curated for movie lovers of all kinds.
          Whether you're looking to explore upcoming films, revisit timeless
          classics, or read insightful reviews, you’ve come to the right place.
        </p>
        <p>
          At CineSphere, we believe that every film has a story not only on
          screen, but behind the scenes too. That’s why we also bring you
          interviews, trivia, and deep dives into the cinematic universe.
        </p>
        <p>
          From Hollywood blockbusters to global indie gems — we celebrate cinema
          in all its forms.
        </p>
        <div className="about-footer">
          <p>📍 Based in: Film City, Hyderabad</p>
          <p>📬 Contact: hello@cinesphere.com</p>
        </div>
      </div>
      <div className="about-right">
        <img src={theaterImage} alt="Theater" />
      </div>
    </div>
  );
};

export default About;
