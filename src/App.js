import Dashboard from './components/Dashboard';
import OneGame from './components/OneGame';
import {BrowserRouter, Route, Routes} from "react-router-dom";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard />} Dashboard/>
          <Route path="/game" element={<OneGame />} OneGame/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
