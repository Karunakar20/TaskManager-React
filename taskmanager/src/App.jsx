import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Common/Sidebar/Sidebar';
import Navbar from './Components/Common/Navbar/Navbar';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Mytasks from './Components/Pages/Mytasks/Mytasks';
import Help from './Components/Pages/Help/Help';
import { Settings } from './Components/Pages/Settings/Settings';
import { VscItalic } from 'react-icons/vsc';
import Vitaltasks from './Components/Pages/Vitaltasks/Vitaltasks';
import Workspace from './Components/Pages/Workspace/Workspace';

function App() {
  return (
    <Router>
      <div className="app-layout">
        {/* Navbar at top */}
        <div className="navbar-component">
          <Navbar />
        </div>

        <div className="sidebar-component">
          <Sidebar />
        </div>

        {/* Main Content changes based on route */}
        <div className="main-content">
          <Routes>
            <Route path="/dboard" element={<Dashboard />} />
            <Route path="/mytask" element={<Mytasks />} />
            <Route path="/help" element={<Help />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/vtask" element={<Vitaltasks />} />
            <Route path="/wspace" element={<Workspace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
