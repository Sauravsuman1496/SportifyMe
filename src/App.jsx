
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import FindPlayer from "./components/FindPlayer/FindPlayer";
import FindCourts from "./components/FindCourts/FindCourts";
import Tournaments from "./components/Tournaments/Tournaments";
import Login from "./components/Login/Login";
import UserDetails from "./components/UserDetails/UserDetails"; // Import UserDetails component
import PlayerList from "./components/FindPlayer/PlayerList"; // Import PlayerList component

function App() {
  return (
    <Router>
      <Header />
      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-players" element={<FindPlayer />} />
        <Route path="/find-players/player-list" element={<PlayerList />} /> {/* Add PlayerList route */}
        <Route path="/find-courts" element={<FindCourts />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-details" element={<UserDetails />} /> {/* Add UserDetails route */}
      </Routes>
    </Router>
  );
}

export default App;
