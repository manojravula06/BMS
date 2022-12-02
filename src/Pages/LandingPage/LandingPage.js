import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import Navbar from "../../Component/navbar/Navbar";
import Nav from "../../Component/navbar/Nav";
import Slider from "../../Component/slider/Slider";
import { getAllMovies } from "../../API/movies/Movies";
import CardItem from "../../Component/Card/Card";
import { CSpinner } from "@coreui/react";
import Footer from "../../Component/footer/Footer";
import "./LandingPage.css";

const LandingPage = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const initialise = async () => {
    const movies = await getAllMovies();
    console.log(movies);
    setMovieList(movies.data);
    setIsLoading(false);
  };

  const getLoader = () => {
    return (
      isLoading && (
        <div className="d-flex my-5 justify-content-center align-item-center">
          LOADING PLEASE WAIT . . . .
          <CSpinner variant="grow" />
        </div>
      )
    );
  };

  useEffect(() => {
    initialise();
  }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <Nav />

      {getLoader()}

      {!isLoading && (
        <>
          <Slider />

          <div className="container lg-text-center my-4">
            <h5> Recomended Movies </h5>

            <div className="row">
              {movieList.map((movie) => {
                return (
                  <div className="col-lg-3 col-xs-6 m-2">
                    <Link>
                      {" "}
                      <CardItem
                        img={movie.posterUrl}
                        text="58K"
                        title={movie.name}
                      />
                    </Link>
                    {/* <Link>
                      <div
                        className="d-flex justify-content-center align-items-stretch"
                        style={{ height: "30rem" }}
                      >
                        <div
                          style={{ width: "20rem" }}
                          className="card bg-dark"
                        >
                          <img
                            style={{ height: "80%" }}
                            src={movie.posterUrl}
                            className="card-img-top"
                            alt="movie"
                          />

                          <div className="p-2">
                            <div className="d-flex justify-content-left align-items-center">
                              <HandThumbsUpFill className="text-success" />
                              <span className="text-success px-2">58K</span>
                            </div>

                            <p className="text-white fw-bolder px-2 fs-5">
                              {" "}
                              {movie.name}{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link> */}
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default LandingPage;
