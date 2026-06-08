import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUserData from './Components/AddUserData';
import ViewAllUserData from './Components/ViewAllUserData';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddUserData />} />
        <Route path="/ViewAll" element={<ViewAllUserData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
