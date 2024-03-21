import "./App.css";
import AppSidebar from "./components/sidebar/AppSidebar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <AppSidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
