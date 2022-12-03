import { useState, useEffect } from "react";
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
      1, 2, 3, 4, 5, 6, 7, 9, 10, 1, 2, 3, 4, 5, 6, 7, 9, 10, 1, 2, 3, 4, 5, 6,
      7, 9, 10, 1, 2, 3, 4, 5, 6, 7, 9, 10,
    ];
    setTheatersData(datafromAPI);
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
      fetchTheatersData();
    }, 2000);
  });
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
            color={'dark'}
            icon={<i className="bi bi-card-list text-danger"></i>}
            progress={{color:'success'}}
            text='No.of Theaters'
            title="Theaters"
            value={counterInfo.theater}
            onClick={showTheaters}
            />
          </div>
          <div className="col">
            <CWidgetStatsC
            className="mb-3 text-white"
            color={'dark'}
            icon={<i className="bi bi-card-list text-danger"></i>}
            progress={{color:'success'}}
            text='No.of Movies'
            title="Movies"
            value={counterInfo.movie}
            onClick={showMovies}
            />
          </div>
          <div className="col">
            <CWidgetStatsC
            className="mb-3 text-white"
            color={'dark'}
            icon={<i className="bi bi-card-list text-danger"></i>}
            progress={{color:'success'}}
            text='No.of Users'
            title="Users"
            value={counterInfo.users}
            onClick={showUsers}
            />
          </div>
        </div>
      </div>

      <div className="m-2">
        {showTheaterTable && <h1>Theatre </h1>}
        {showMoviesTable && <h1>Movies </h1>}
        {showUsersTable && <h1>Users </h1>}
      </div>
    </div>
  );
};

export default Admin;
