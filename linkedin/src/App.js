import './App.css';
import { Route, Routes } from 'react-router-dom';
import Profile from './components/pages/Profile.jsx';
import Home from './components/pages/Home.jsx';
import Network from './components/pages/Network.jsx';
import Messages from './components/pages/Messages.jsx';
import Notifications from './components/pages/Notifications.jsx';
import Jobs from './components/pages/Jobs.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/network" element={<Network />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
    </div>
  );
}

export default App;
