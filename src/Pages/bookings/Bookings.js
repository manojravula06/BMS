import React,{useState,useEffect} from 'react';
import clsx from 'clsx';
import { useNavigate,useParams } from 'react-router-dom';
import Nav from '../../components/navbar/Nav';
import Footer from '../../components/footer/Footer'
import {getMovie} from '../../API/movies/Movies';
import { getTheaterById } from '../../API/theater/Theater';
import './bookings.css';


const seats = Array.from({ length: 8 * 8 }, (_, i) => i)

 function BookingsPage() {
  const { movieid: movieId } = useParams();
  const { theatreid: theatreId } = useParams();
  const [pageLoaded, setPageLoading] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(movieId);
  const [selectedTheaterId, setTheaterMovieId] = useState(theatreId);
  const [selectedMovie, setSelectedMovie] = useState({})
  const [selectedTheater, setSelectedTheater] = useState({})
  const [selectedSeats, setSelectedSeats] = useState([])
  const [occupiedSeats, setOccupiedSeats] = useState([10, 12, 50, 33, 28, 47])
  const [moviePrice, setMoviePrice] = useState(150)
  
  
  const navigate = useNavigate();

  const init = async () => {
    const response = await getMovie(selectedMovieId);
    console.log(response.data)
    setSelectedMovie(response.data);
    const theaterResponse = await getTheaterById(selectedTheaterId);
    setSelectedTheater(theaterResponse.data);
    console.log("theatreId",theaterResponse)
    
    setPageLoading(true)
}
  useEffect(() => {
    if(localStorage.getItem('token')===null){
      navigate('/login');
    }
    else{
      init();
    }
}, [])

return (

  <>
  <Nav/>
  <div  className='text-light background'>
  <h2 className='fw-bold text-light' > {selectedMovie.name} </h2>
  <ShowCase/>
  <Cinema movie={'Jhund'}
   selectedSeats={'10'}
   occupiedSeates={'4'}/>
  </div>
  </>

)

}

function ShowCase(){

return (
  <ul className='ShowCase text-light' >
     <li>
      <span className='seat' />   <small> Available </small>   
    </li> 
    <li>
      <span className='seat seatSelected'/> <small>Selected </small>   
    </li>            <li>
      <span className='seat seatOccupied'/> <small> Occupied </small> 
    </li> 
  </ul>
)
}

function Cinema({movie,selectedSeats,occupiedSeates,onSelectedSeatsChange}){
  function handleSelectedSeat(seat){
    const isSelected=true;
  }
  selectedSeats=10
  return(
    <div className='cinema'>
       <div className="screen"/> 
        <div className="seats">
          {seats.map((seat)=>{
          const isSelected = selectedSeats
          const isOccupied = 3
            if(isSelected){
              return(
                <span className="seat seatSelected" key={seat}
                onClick={()=>handleSelectedSeat(seat)}/>
              )  
            }else{
              return(
                <span className="seat seatOccupied" key={seat}
                onClick={()=>handleSelectedSeat(seat)}/>
              ) 
            }
          })}
        </div> 

        cinema
    </div>
  )
}
export default BookingsPage;