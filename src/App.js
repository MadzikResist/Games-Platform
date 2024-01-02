import Dashboard from "./components/Dashboard";
import OneGame from "./components/OneGame";
import Store from "./components/Store";
import { HashRouter, Route, Routes} from "react-router-dom";

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
