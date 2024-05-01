import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./RawPost.css";
import { imageUrl } from "../../constants/Constants";
import YouTube from "react-youtube";

function RawPost(props) {
  const [movies, setMovies] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState("");
  const [urlId, setUrlId] = useState("");

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.log("Error fetching movies:", err);
      });
  }, [props.url]);

  const handleMovieClick = (id) => {
    setSelectedMovieId(id);
    // You can perform additional actions related to the clicked movie here
    axios
      .get(`movie/${id}/videos?api_key=20c18a65e8596459a1472a7fd1afd6f0&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0].key);
        } else {
          console.log("Empty Array");
        }
      })
      .catch((error) => {
        console.error("Error fetching movie details:", error);
      });
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={props.isBig ? "posterer" : "smallposter"}
            src={`${imageUrl + movie.backdrop_path}`}
            alt="Poster"
            onClick={() => handleMovieClick(movie.id)}
          />
        ))}
      </div>
      {urlId && <YouTube videoId={urlId} opts={opts} />}
    </div>
  );
}

export default RawPost;
