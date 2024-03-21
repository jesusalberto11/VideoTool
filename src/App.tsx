import "./App.css";
import { Outlet } from "react-router-dom";
import CurrentPlanInfo from "./components/current-plan-info/CurrentPlanInfo";
import AppNavbar from "./components/navbar/AppNavbar";

function App() {
  return (
    <div className="app">
      <aside className="app-sidebar">
        <div>logo</div>
        <AppNavbar />
        <CurrentPlanInfo />
      </aside>
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
