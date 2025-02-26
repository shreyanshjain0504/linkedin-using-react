import './App.css';
import { Route, Routes } from 'react-router-dom';
import Profile from './layout/pages/Profile.jsx';
import Profile2 from './layout/pages/Profile2.jsx';
import Home from './layout/pages/Home.jsx';
import Network from './layout/pages/Network.jsx';
import Messages from './layout/pages/Messages.jsx';
import Notifications from './layout/pages/Notifications.jsx';
import Jobs from './layout/pages/Jobs.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile2 />} />
        <Route path="/network" element={<Network />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </div>
  );
}

export default App;
