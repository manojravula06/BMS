import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { CWidgetStatsC } from "@coreui/react";
import Nav from "../../Component/navbar/Nav";

const Admin = () => {
  const [counterInfo, setCounterInfo] = useState({});
  const [theatersData, setTheatersData] = useState([]);
  const [moviesData, setMoviesData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [showTheaterTable, setShowTheaterTable] = useState(true);
  const [showMoviesTable, setShowMoviesTable] = useState(false);
  const [showUsersTable, setShowUsersTable] = useState(false);

  const fetchTheatersData = () => {
    //update the theaters state
    //update the counterInfo state
    const datafromAPI = [
      {
        sr_no: '01',
        name: "PVR",
        city: "Guntur",
        description: "Multi screen cinema",
        screen:5,
        pincode: 522007
      },
      {
        sr_no: '02',
        name: "UV Platinos 4K",
        city: "Guntur",
        description: "Gold cinema",
        screen:5,
        pincode: 522007
      },
      {
        sr_no: '03',
        name: "Cine square",
        city: "Guntur",
        screen:1,
        description: "70mm Dolby Atmos",
        pincode: 522007
      },
      {
        sr_no: '04',
        name: "Cine Prime",
        city: "Guntur",
        description: "70mm Dolby Atmos",
        screen:2,
        pincode: 522007
      },

      {
        sr_no: '05',
        name: "Gowri Shankar",
        city: "Guntur",
        description: "Golden Picture",
        screen:1,
        pincode: 522007
      },
      {
        sr_no: '06',
        name: "Naaz Apsara A/C",
        city: "Guntur",
        description: "Dual Screen theatre",
        screen:2,
        pincode: 522007
      },
      {
        sr_no: '07',
        name: "Naaz Delux A/C",
        city: "Guntur",
        description: "Dual Screen theatre",
        screen:1,
        pincode: 522007
      },
      {
        sr_no: '08',
        name: "Swami Theatre",
        city: "Guntur",
        screen:1,
        description: "Dolby Atmos",
        pincode: 522007
      },
      {
        sr_no: '09',
        name: "Harihar Mahal",
        city: "Guntur",
        screen:2,
        description: "70mm Dolby Atmos",
        pincode: 522007
      },
      {
        sr_no:'10',
        name:'Hollywood, Bollywood',
        city:'Guntur',
        screen:2,
        description:'Talkies',
        pincode:522007
      }
    ];
    setTheatersData(datafromAPI);
    counterInfo.theater = datafromAPI.length;
    setCounterInfo(counterInfo);
  };

  const fetchMoviesData = () => {
    const datafromAPI = [
      {srno:'01',
       movie:'Kanthara',
       cast:'Rishab Shetty, Sapthami Gowda, Kishore',
       languages:'Kannada,Telugu,Tamil,Hindhi,Malayalam'},
       {
        srno:'02',
        movie:'Love Today',
        cast:'Pradeep Ranganatham,Lvana,Satyaraj',
        languages:'Tamil,Telugu,Kannada,Hindhi,Malayalam'
       },
       {
        srno:'03',
        movie:'PS-1',
        cast:'Vikram,Karthi,Aishwarya Rai Bachan,Trisha',
        languages:'Tamil,Telugu,Kannada,Hindhi,Malayalam'
       },
       {
        srno:'04',
        movie:'RRR',
        cast:'Ram charan,JR.NTR, Rajamouli, Alibatt',
        languages:'Telugu,Tamil,Kannada,Hindhi,Malayalam'
       }
    ];
    setMoviesData(datafromAPI);
    console.log(setMoviesData);
    counterInfo.movie = datafromAPI.length;
    setCounterInfo(counterInfo);
  };
  const fetchUserData = () => {
    const usersDataAPI = [
      "Manoj",
      "raju",
      "sudha",
      "vishnu",
      "Ram",
      "Arjun",
      "Ravi Teja",
      "Charan",
      "Prabhas",
      "Krishna",
      "Mahesh",
      "Krishna",
      "Rama Rao",
      "Pavan",
      "Rambabu",
      "Peneloi",
      "Anjali",
      "Pallavi",
      "Sampurnesh",
    ];
    setUsersData(usersDataAPI);
    counterInfo.user = usersDataAPI.length;
    setCounterInfo(counterInfo);
  };
  //toggle to show theater table
  const showTheaters = () => {
    setShowTheaterTable(true);
    setShowMoviesTable(false);
    setShowUsersTable(false);
  };
  //toggle to show User table
  const showUsers = () => {
    setShowMoviesTable(false);
    setShowTheaterTable(false);
    setShowUsersTable(true);
  };
  //toggle to show Movie table
  const showMovies = () => {
    setShowMoviesTable(true);
    setShowTheaterTable(false);
    setShowUsersTable(false);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchMoviesData();
      fetchUserData();
      fetchTheatersData();
    }, 2000);
  }, []);
  return (
    <div>
      <Nav />
      <div className="text-center">
        <h1>Welcome {localStorage.getItem("name")}!</h1>
        <p> Take a quick look at your stats below</p>

        <div className="row p-2">
          <div className="col">
            <CWidgetStatsC
              className="mb-3 text-white"
              color={"dark"}
              progress={{ color: "success", value: counterInfo.theater }}
              title="Theaters"
              text="Widget helper text"
              value={counterInfo.theater}
              onClick={showTheaters}
            />
          </div>
          <div className="col">
            <CWidgetStatsC
              className="mb-3 text-white"
              color={"dark"}
              progress={{ color: "success", value: counterInfo.movie }}
              title="Movies"
              value={counterInfo.movie}
              onClick={showMovies}
            />
          </div>
          <div className="col">
            <CWidgetStatsC
              className="mb-3 text-white"
              color={"dark"}
              progress={{ color: "success", value: counterInfo.user }}
              title="Users"
              value={counterInfo.user}
              onClick={showUsers}
            />
          </div>
        </div>
      </div>

      <div className="m-2 text-center">
        {showTheaterTable && <h1>Theatres </h1>}
        {showMoviesTable && <h1>Movies </h1>}
        {showUsersTable && <h1>Users </h1>}
      </div>
      {/* For theater table  */}
      <div className="container">
        {showTheaterTable &&
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
         <TableHead>
          <TableRow>
            <TableCell align="center">SR.NO</TableCell>
            <TableCell align="center">Name of Theater</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Location</TableCell>
            <TableCell align="center">No.of Screens</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
          {theatersData.map((theater)=>(
            <TableRow>
              <TableCell align="center">{theater.sr_no}</TableCell>
              <TableCell align="center">{theater.name}</TableCell>
              <TableCell align="center">{theater.description}</TableCell>
              <TableCell align="center">{theater.city}</TableCell>
              <TableCell align="center">{theater.screen}</TableCell>
            </TableRow>
          ))}
          </TableBody>
         </Table>
      </TableContainer>
      }
        </div> 
        <div className="container">
         {showMoviesTable && 
         <TableContainer component={Paper}>
           <Table sx={{ minWidth: 650 }} aria-label="simple table">
         <TableHead>
          <TableRow>
            <TableCell align="center">SR.NO</TableCell>
            <TableCell align="center">Name of Movie</TableCell>
            <TableCell align="center">Cast</TableCell>
            <TableCell align="center">Language</TableCell>
          </TableRow>
          </TableHead>
          <TableBody>
            {moviesData.map((movie)=>(
             <TableRow>
             <TableCell align="center">{movie.srno}</TableCell>
             <TableCell align="center">{movie.movie}</TableCell>
             <TableCell align="center">{movie.cast}</TableCell>
             <TableCell align="center">{movie.languages}</TableCell>
             </TableRow>
            ))

            }
          </TableBody>
          </Table>
         </TableContainer>
         
         
         
         
         }
          </div>    
      </div>
  );
};

export default Admin;
