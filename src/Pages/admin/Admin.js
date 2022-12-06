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
        name: "PVR",
        city: "Guntur",
        description: "Multi screen cinema",
        pinCode: 522007,
      },
      {
        name: "UV Platinos 4K",
        city: "Guntur",
        description: "Gold cinema",
        pinCode: 522007,
      },
      {
        name: "Cine square",
        city: "Guntur",
        description: "70mm Dolby Atmos",
        pinCode: 522007,
      },
      {
        name: "Cine Prime",
        city: "Guntur",
        description: "70mm Dolby Atmos",
        pinCode: 522007,
      },
      {
        name: "Naaz A/C",
        city: "Guntur",
        description: "Dual Screen theatre",
        pinCode: 522007,
      },
      {
        name: "Sqami Theatre",
        city: "Guntur",
        description: "Dolby Atmos",
        pinCode: 522007,
      },
      {
        name: "Harihar Mahal",
        city: "Guntur",
        description: "70mm Dolby Atmos",
        pinCode: 522007,
      },
    ];
    setTheatersData(datafromAPI);
    counterInfo.theater = datafromAPI.length;
    setCounterInfo(counterInfo);
  };

  const fetchMoviesData = () => {
    const datafromAPI = [
      "Kanthara",
      "Love Today",
      "PS-1",
      "RRR",
      "Prince",
      "Ginna",
      "Yashodha",
      "HIT Case 2",
      "DJ Tillu",
      "God father",
      "Wakanda forever",
      "Avatar",
      "Thor Love and Thunder",
      "Sardhar",
      "Vikram Hitlist",
      "Sitha Ramam",
      "K.G.F Chapeter-2",
      "Ramsethu",
      "Brahmmastra",
      "Dhamki",
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
      <div>
        {showUsersTable &&
          usersData.map((user) => <li className="m-2">{user}</li>)}
        {showMoviesTable &&
          moviesData.map((movie) => (
            <>
              <h4 className="m-2 display-3">{movie}</h4>
            </>
          ))}
      </div>
      <div>
        <div className="container">
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Sr.no</TableCell>
                    <TableCell align="left">Name of the Theater</TableCell>
                    <TableCell align="left">Description</TableCell>
                    <TableCell align="left">Location</TableCell>
                    <TableCell align="left">Screens</TableCell>
                  </TableRow>
                </TableHead>
              {showTheaterTable &&
              theatersData.map((theater)=>(
                <>
                 <TableBody>
                <TableCell align="left">01</TableCell>
                <TableCell align="left">{theater.name}</TableCell>
                <TableCell align="left">{theater.description}</TableCell>
                <TableCell align="left">{theater.city}</TableCell>
                <TableCell align="left">{theater.pincode}</TableCell>
              </TableBody>
                </>
              ))
              }
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
