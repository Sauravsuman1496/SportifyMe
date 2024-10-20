import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import FindPlayer from './components/FindPlayer/FindPlayer.jsx';
import FindCourts from './components/FindCourts/FindCourts.jsx';
import Tournaments from './components/Tournaments/Tournaments.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx'; // Import UserDetails
import PlayerList from './components/FindPlayer/PlayerList.jsx'; // Import PlayerList

// Create the routes for your app
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* Home route */}
      <Route path='' element={<Home />} />

      {/* Find Players route */}
      <Route path='find-players' element={<FindPlayer />}>
        {/* Add PlayerList as a nested route */}
        <Route path='player-list' element={<PlayerList />} /> {/* Nested PlayerList route */}
      </Route>

      {/* Find Courts route */}
      <Route path='find-courts' element={<FindCourts />} />

      {/* Tournaments route */}
      <Route path='tournaments' element={<Tournaments />} />

      {/* Login route */}
      <Route path='login' element={<Login />} />

      {/* User Details route */}
      <Route path='user-details' element={<UserDetails />} /> {/* Add UserDetails route */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
