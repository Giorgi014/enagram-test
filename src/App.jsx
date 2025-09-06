import { Outlet } from "react-router-dom";
import { Header } from "./components/Route";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
