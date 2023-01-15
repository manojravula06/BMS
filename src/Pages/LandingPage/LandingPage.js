import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/navbar/Nav";
import Slider from "../../components/slider/Slider";
import { getAllMovies } from "../../API/movies/Movies";
import CardItem from "../../components/Card/Card";
import { CSpinner } from "@coreui/react";
import Footer from "../../components/footer/Footer";
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
          <CSpinner variant="grow" />
        </div>
      )
    );
  };

  useEffect(() => {
    initialise();
  }, []);

  return (
    <div className="">
      {/* <Navbar /> */}
      <Nav />

      {getLoader()}

      {!isLoading && (
        <>
          <Slider />
          <div className="container-fluid my-4">
            <h5 className="text-center text-sm-lg-start">
              {" "}
              Recomended Movies{" "}
            </h5>
          </div>
        </>
      )}
      <div className="d-flex flex-row col-lg-3 col-xs-6 my-2">
        {movieList.map((movie) => {
          return (
            <>
              <div className="my-2">
              <Link to={`/movie/${movie._id}/details`} >
                <CardItem
                  img={movie.posterUrl}
                  title={movie.name}
                  text={"58K"}
                />
                </Link>
              </div>
            </>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
