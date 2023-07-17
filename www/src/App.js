import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from "./views/HomePage/HomePage";
import LogsPage from "./views/LogsPage/LogsPage";
import NavBarComponent from "./components/layout/navbar/NavBarComponent";

function App() {
  return (
      <div>
        <Router>
            <NavBarComponent />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/other" element={<LogsPage />} />
          </Routes>
        </Router>
      </div>
  );
}



export default App;
