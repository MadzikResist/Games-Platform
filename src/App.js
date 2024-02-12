import Dashboard from "./components/dashboard/Dashboard";
import OneGame from "./components/store/OneGame";
import Store from "./components/store/Store";
import { HashRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} Dashboard />
        <Route path="/game/:id" element={<OneGame />} OneGame />
        <Route path="/store" element={<Store />} Store />
      </Routes>
    </HashRouter>
  );
};

export default App;
