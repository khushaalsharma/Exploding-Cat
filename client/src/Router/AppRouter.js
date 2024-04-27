import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from '../Components/MainPage';
import NewGame from '../Components/Game/NewGame';
import Rules from '../Components/Game/Rules';
import Menu from '../Components/Menu';

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' Component={MainPage}/>
            <Route path='/newgame' Component={NewGame}/>
            <Route path='/rules' Component={Rules}/>
            <Route path='/menu' Component={Menu}/>
        </Routes>
    </BrowserRouter>
  )
}


export default AppRouter
