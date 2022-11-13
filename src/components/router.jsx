import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Board from '../pages/Board';
import TODO from '../pages/TODO';

function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/board" element={<Board />}></Route>
          <Route path="/TODO" element={<TODO />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;