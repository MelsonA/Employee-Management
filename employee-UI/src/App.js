import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
      <HeaderComponent />
      <div className="container">
      <Routes>
            <Route path="/" element={<ListEmployeeComponents />} />
            <Route path="/employee" element={<ListEmployeeComponents />} />
            <Route path="/add-employee" element={<AddEmployeeComponent />} />
            <Route path="/update-employee/:id" element={<AddEmployeeComponent />} />
            <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} />
          </Routes>
      </div>
      <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
