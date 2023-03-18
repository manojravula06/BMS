import React,{useState,useEffect} from 'react';
import { ArrowRight } from 'react-bootstrap-icons';
import {useParams,Link} from 'react-router-dom';
import { getMovie } from '../../API/movies/Movies';
import { getAllTheaters } from '../../API/theater/Theater';
import Nav from '../../components/navbar/Nav';

export const MovieTheaters = () => {
  const {movieId: selectedMovieId} = useParams();
  const [movieDetails,setMovieDetails]=useState({});
  const [theaterDetail,setTheaterDetails]=useState({});
  const [pageLoaded, setPageLoaded] = useState(false);

const init = async()=>{  

const movieDetail = await getMovie(selectedMovieId);
setMovieDetails(movieDetail.data);
const theaterDetail = await getAllTheaters();
const eligibleTheaters = theaterDetail.data.filter(theater=> theater.movies.includes(selectedMovieId));
setTheaterDetails(eligibleTheaters);
console.log(movieDetail.data)
setPageLoaded(true);
}
useEffect(()=>{
  init()
},[])
  return (
    <div>
      <Nav/>
      <div className="bg-light">
        <div className="bg-dark text-center">
        <h2 className='fw-bolder text-light' > {movieDetails.name} </h2>
        <span className="badge rounded-pill text-bg-danger m-1">{movieDetails.description}</span>
        <span className="badge rounded-pill text-bg-secondary m-1">{movieDetails.language}</span>
        <span className="badge rounded-pill text-bg-secondary m-1">{movieDetails.releaseStatus}</span>
       <hr className="bg-light" />
       <h6>Director: {movieDetails.director}</h6>
       <h6>Release Date: {movieDetails.releaseDate}</h6>
        </div>
        <div>
          <h2 className='fw-bold text-dark text-center'>SELECT THEATER</h2>
          {
                        pageLoaded && 

                        theaterDetail.map(
                            theater => <li key={theater._id} className="list-group-item" >

                            
                            <Link key={theater._id} to={`/movie/${selectedMovieId}/${theater._id}`}>
                                <div className='row p-2 text-decoration-none text-dark fw-bold'>

                                    <div className='col'>
                                    <i className="bi bi-cassette-fill px-2"></i>
                                        {theater.name}
                                    </div>

                                    <div className='col'>
                                        <div className='p-2 text-success fw-bold p-2'>
                                        <i className="bi bi-ticket-detailed-fill px-2"></i>
                                          <span>Book Tickets</span>
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className='p-2 text-danger fw-bold'>
                                        <i className="bi bi-cup-straw mx-2"></i>
                                        <span>Food and Beverages</span>
                                        </div>
                                    </div>

                                </div>

                                </Link>

                            </li>
                        )
                    }
             </div>
           </div>
        </div>
  )
}
