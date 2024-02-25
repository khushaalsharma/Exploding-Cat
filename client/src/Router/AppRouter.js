import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from '../Components/MainPage';
import NewGame from '../Components/Game/NewGame';
import Scoreboard from '../Components/Scoreboard/Scoreboard';
import Rules from '../Components/Game/Rules';
import Menu from '../Components/Menu';
import Login from '../Components/Auth/Login';
import Register from '../Components/Auth/Register';

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={MainPage}/>
            <Route path='/newgame' Component={NewGame}/>
            <Route path='/scoreboard' Component={Scoreboard}/>
            <Route path='/rules' Component={Rules}/>
            <Route path='/menu' Component={Menu}/>
            <Route path='/login' Component={Login}/>
            <Route path='/register' Component={Register}/>
        </Routes>
    </BrowserRouter>
  )
}


export default AppRouter
