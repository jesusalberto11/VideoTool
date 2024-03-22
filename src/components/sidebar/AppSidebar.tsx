import "../../styles/components/sidebar/AppSidebar.css";
import CurrentPlanInfo from "../current-plan-info/CurrentPlanInfo";
import AppNavbar from "../navbar/AppNavbar";
import VideoToolLogo from "../../assets/logo.svg";
import { SVG_ICONS } from "../../helpers/svgIcons";
import { useSidebar } from "../../hooks/useSidebar";

const AppSidebar = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useSidebar();

  return (
    <>
      <button
        className={
          isSidebarOpen ? "btn-hiden" : "app-sidebar-btn flex centered"
        }
        onClick={() => openSidebar()}
      >
        <svg width="16" height="16" fill="#000" viewBox="0 0 16 16">
          <path d={SVG_ICONS.ARROW_RIGHT} />
        </svg>
      </button>
      <div
        className={
          isSidebarOpen ? "close-zone active-close-zone" : "close-zone"
        }
        role="presentation"
        onClick={closeSidebar}
      ></div>
      <aside
        className={isSidebarOpen ? "app-sidebar sidebar-active" : "app-sidebar"}
      >
        <div className="logo-and-navbar flex">
          <div className="flex centered">
            <img
              src={VideoToolLogo}
              alt="VideTool Logo"
              height={"60px"}
              width={"100%"}
              loading="lazy"
            />
            <button
              className={
                isSidebarOpen
                  ? "go-back-btn flex centered close-sd"
                  : "close-sd"
              }
              onClick={() => closeSidebar()}
            >
              <svg width="16" height="16" fill="#fff" viewBox="0 0 16 16">
                <path d={SVG_ICONS.CLOSE} />
              </svg>
            </button>
          </div>
          <AppNavbar />
        </div>
        <CurrentPlanInfo />
      </aside>
    </>
  );
};

export default AppSidebar;
