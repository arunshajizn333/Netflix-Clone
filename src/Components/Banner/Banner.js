import React, { useState, useEffect } from "react";
import './Banner.css'
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/Constants";

const Banner = () => {
  const [movie, setMovie] = useState();

  const random = Math.floor(Math.random() * 10);

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results[random]);
        setMovie(response.data.results[random]);
      });
  }, []);

  return (
    <div 
    className="banner"
      style={{backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`}} 
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
};

export default Banner;
