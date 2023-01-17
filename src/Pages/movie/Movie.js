import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { CSpinner } from "@coreui/react";
import ReactPlayer from "react-player";
import { getMovie } from "../../API/movies/Movies";
import Nav from "../../components/navbar/Nav";
const Movie = () => {
  const [movie, setMovie] = useState(null);
  const { movieId: selectedMovie } = useParams();
  const [isReleased, setIsReleased] = useState(null);

  const initialize = async () => {
    const response = await getMovie(selectedMovie);
    console.log(response.data);
    setMovie(response.data);
  };
  useEffect(() => {
    initialize();
  }, []);
  return (
    <div>
      <Nav />
      {!movie && <CSpinner className="container" />}
      {movie && (
        <>
          <div className="d-flex justify-content-center m-2 bg-dark">
            <ReactPlayer
              url={movie.trailerUrl}
              controls={true}
              className="video"
              width="100%"
            />
          </div>

          <div className="container m-4 justify-content-center">
            <div className="row">
              <div className="col mx-2">
                <img src={movie.posterUrl} height={400} width={300} />
              </div>
              <div className="col">
                <h2 className="fw-border text-center rounded">Movie Details</h2>
                <div>
                  <h2 className="text-light text-center bg-dark m-2 p-2">
                    {movie.name}
                  </h2>
                  <span className="badge rounded-pill text-bg-danger m-2">
                    {" "}
                    {movie.description}{" "}
                  </span>
                  <span className="badge rounded-pill text-bg-dark m-2">
                    {movie.language}
                  </span>
                  <span className="badge rounded-pill text-bg-success m-2">
                    {movie.releaseStatus}
                  </span>
                </div>
                <hr />
                <div className="d-flex card m-2 text-start">
                  <h5 className="p-2 text-center">Star Cast</h5>
                  <div className="d-flex m-2">
                    <li className="list-group-item p-2 fw-bold">Main lead :</li>{" "}
                    {movie.casts.map((name) => (
                      <li className="list-group-item p-2">{name}</li>
                    ))}
                  </div>
                  <h6 className="p-2 fw-bold">Director : {movie.director} </h6>
                  <h6 className="p-2 fw-bold"> Release on: {movie.releaseDate} </h6>
                </div>
                    <div className="d-flex justify-content-center">
                      <Link to={isReleased?`/buytickets/${movie.name}/${selectedMovie}`:"#"} key={selectedMovie}
                      className={isReleased?"btn btn-danger":"btn btn-secondary"}>
                        {
                          isReleased?"Book tickets":"COMMING SOON"
                        }
                        </Link>
                    </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
