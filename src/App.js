import './App.css';
import Sector1 from './Sectors/sector1';
import Dashboard from './Dashboard/dashBoard';
import Home from './Home/home';
import SignIn from './SignIn/signIn';
import React from 'react';
import { Routes, Route, Navigate} from "react-router-dom";
import PrivateRoutes from './utils/privateRoutes.js'; 
import axios from 'axios'; 
import SectorUnderConstruction from './Sectors/sectorUnderConstruction';
function App() {
  const url = `http://${process.env.REACT_APP_ORIGIN_URL}:4000/login`;
  localStorage.setItem("isLoggedIn",JSON.stringify({isLoggedIn:false}));
  React.useEffect(()=>{axios({
    method: 'post',
    url: url,
    headers: {'Content-Type': 'application/json'}, 
    withCredentials:true
    }).then(response=>{
        localStorage.setItem("isLoggedIn",JSON.stringify(response.data));
    });
  },[]);
  return (
      <div className='App'>
          <Routes>
            <Route exact path="/SonicLibrarySystem/" element={ <Home/> } />
            <Route exact path="/SonicLibrarySystem/signIn" element={ <SignIn/> } />
            <Route path="*" element={<Navigate to="/SonicLibrarySystem/" replace />}/>
            <Route  element={<PrivateRoutes/>} >
              <Route exact path="/SonicLibrarySystem/dashboard" element={ <Dashboard/> } />
              <Route exact path="/SonicLibrarySystem/sector1" element={ <Sector1/> } />
              <Route exact path="/SonicLibrarySystem/sectorUnderConstruction" element={ <SectorUnderConstruction/> } />
            </Route>
          </Routes>
      </div>
  );
}

export default App;
