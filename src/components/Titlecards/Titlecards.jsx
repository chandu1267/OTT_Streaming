import React, { useEffect, useRef, useState } from "react";
import "./Titlecard.css";
import { Link } from "react-router-dom";

const Titlecards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWU4NjZkNDcyYmI0MzQ4ZWU2M2ZiY2RhZTlkNDYxMyIsIm5iZiI6MTczMDM1NDUwOC44NTA2MDI5LCJzdWIiOiI2NzIzMWI2YWVlYjBjNWVmM2I5YmQzZTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KpjfOm9yMfiFabfcA3y8cQN08XXOs2ub7_cbPVlHEKo",
    },
  };

  const cardsRef = useRef();

  const handlewheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handlewheel);
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular On Netflixe"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Titlecards;
