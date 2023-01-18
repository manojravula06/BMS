import { useState } from "react";
import Nav from "../../components/navbar/Nav";
import { CWidgetStatsC } from "@coreui/react";
import {DeleteIcon,EditIcon} from '@mui/icons-material/Delete';
import { useEffect } from "react";
import HouseIcon from "@mui/icons-material/House";
import TheatersIcon from "@mui/icons-material/Theaters";
import PeopleIcon from "@mui/icons-material/People";
import React from "react";
import MaterialTable from "@material-table/core";
import { getAllTheaters } from "../../API/theater/Theater";
import { getAllMovies } from "../../API/movies/Movies";
import { getAllUsers } from "../../API/users/User";

const Admin = () => {
  const [counterInfo, setCounterInfo] = useState({});
  const [theatersData, setTheatersData] = useState([]);
  const [moviesData, setMoviesData] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [showTheaterTable, setShowTheaterTable] = useState(true);
  const [showMoviesTable, setShowMoviesTable] = useState(false);
  const [showUsersTable, setShowUsersTable] = useState(false);

  const fetchTheatersData = async () => {
    //update the theaters state
    //update the counterInfo state
    const theatersData = await getAllTheaters();
    const theaters = theatersData.data;
    setTheatersData(theaters);
    counterInfo.theater = theaters.length;
    setCounterInfo(counterInfo);
  };

  const fetchMoviesData = async () => {
    const datafromAPI = await getAllMovies();
    console.log(datafromAPI);
    const moviesData = datafromAPI.data;
    setMoviesData(moviesData);
    counterInfo.movie = moviesData.length;
    setCounterInfo(counterInfo);
  };
  const fetchUsersData = async () => {
    const datafromAPI = await getAllUsers();
    console.log(datafromAPI);
    usersData = datafromAPI;
    setUsersData(usersData);
    counterInfo.user = usersData.length;
    setCounterInfo(counterInfo);
  };
  //toggle to show theater table
  const showTheaters = () => {
    setShowMoviesTable(false);
    setShowTheaterTable(true);
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

  // const deleteMovie = async (movie) => {
  //   await removeMovie(movie);
  //   fetchMoviesData();
  // };
  useEffect(() => {
    setTimeout(() => {
      fetchMoviesData();
      fetchUsersData();
      fetchTheatersData();
    }, 2000);
  }, []);
  return (
    <div>
      <Nav />
      <div className="text-center">
        <h1>Welcome {localStorage.getItem("name")}!</h1>
        <p> Take a quick look at your stats below</p>
      </div>
      <div className="row m-5">
        <div className="col">
          <CWidgetStatsC
            className="mb-3 text-white"
            icon={
              <i className="bi bi-card-list text-danger">
                <HouseIcon />
              </i>
            }
            color={"dark"}
            progress={{ color: "success", value: counterInfo.theater }}
            text="Widget helper text"
            title="Theaters"
            value={counterInfo.theater}
            onClick={() => showTheaters()}
          />
        </div>
        <div className="col">
          <CWidgetStatsC
            className="mb-3 text-white"
            icon={
              <i className="bi bi-card-list text-danger">
                <TheatersIcon />
              </i>
            }
            color={"dark"}
            progress={{ color: "success", value: counterInfo.theater }}
            title="Movies"
            value={counterInfo.movie}
            onClick={showMovies}
          />
        </div>
        <div className="col">
          <CWidgetStatsC
            className="mb-3 text-white"
            icon={
              <i className="bi bi-card-list text-danger">
                <PeopleIcon />
              </i>
            }
            color={"dark"}
            progress={{ color: "success", value: counterInfo.user }}
            title="Users"
            value={counterInfo.user}
            onClick={showUsers}
          />
        </div>
        {showTheaterTable && (
          <>
            <h4>THEATER TABLE</h4>
            <MaterialTable
              title={"Available Theaters"}
              columns={[
                { title: "Theater Name", field: "name" },
                { title: "Name of the City", field: "city" },
                { title: "Descriptions", field: "description" },
                { title: "Pin Code", field: "pinCode" },  
              ]}
              data={theatersData}
              actions={[{ icon: DeleteIcon,
              tooltip:'Delete Theater'},
              {
                icon:EditIcon,
                tooltip:'Edit'
              }]} />
          </>
        )}

        {showMoviesTable && (
          <>
            <h4>MOVIES TABLE</h4>
            <MaterialTable
              title={"List of Movies"}
              columns={[
                { title: "Movie Name", field: "name" },
                { title: "Director", field: "director" },
                { title: "Release Date", field: "releaseDate" },
                { title: "Release Status", field: "releaseStatus" },
              ]}
              data={moviesData}
              actions={[{ icon: DeleteIcon,
                tooltip:'Delete Theater'},
                {
                  icon:EditIcon,
                  tooltip:'Edit'
                }]}
            />
          </>
        )}

        {showUsersTable && (
          <>
            <h4>USERS TABLE</h4>
            <MaterialTable
              title={"List of Users"}
              columns={[
                { title: " User Name", field: "userId" },
                { title: "Name", field: "name" },
                { title: "Email", field: "email" },
                { title: "Role", field: "userType" },
              ]}
              data={usersData}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
