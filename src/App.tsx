import "./App.css";
import CurrentPlanInfo from "./components/current-plan-info/CurrentPlanInfo";
import AppNavbar from "./components/navbar/AppNavbar";
import DashboardPage from "./pages/DashboardPage";
// import VideosPage from "./pages/VideosPage";

function App() {
  return (
    <div className="app">
      <aside className="app-sidebar">
        <div>logo</div>
        <AppNavbar />
        <CurrentPlanInfo />
      </aside>
      <main className="main-content">
        <DashboardPage />
        {/* <VideosPage /> */}
      </main>
    </div>
  );
}

export default App;
