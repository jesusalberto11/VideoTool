import "../../../styles/components/pages/DashboardPage/DashboardHeader.css";
import ActionButton, { ActionButtonStyle } from "../../shared/ActionButton";
import { SVG_ICONS } from "../../../helpers/svgIcons";

const DashboardHeader = () => {
  return (
    <div className="dashboard-page-header flex">
      <div className="dashboard-header-top-part">
        <div className="tabs-container">
          <input className="radio" id="one" name="group" type="radio" checked />
          <input className="radio" id="two" name="group" type="radio" />
          <div className="tabs">
            <label className="tab" id="one-tab" htmlFor="one">
              <svg width="16" height="16" fill="#000" viewBox="0 0 16 16">
                <path d={SVG_ICONS.BOOKSHELF} />
              </svg>
              Biblioteca
            </label>
            <label className="tab" id="two-tab" htmlFor="two">
              <svg width="16" height="16" fill="#000" viewBox="0 0 16 16">
                <path d={SVG_ICONS.TRASH} />
              </svg>
              Papelera
            </label>
          </div>
        </div>
        <div className="flex" style={{ gap: "15px" }}>
          <ActionButton
            title="Nueva carpeta"
            icon={SVG_ICONS.FOLDER}
            type={ActionButtonStyle.Pasive}
          />
          <ActionButton
            title="Nuevo video"
            icon={SVG_ICONS.PLAY_CIRCLE}
            type={ActionButtonStyle.Active}
          />
        </div>
      </div>
      <div>
        <form>
          <button className="search-btn" type="submit" title="Buscar video">
            <svg width="16" height="16" fill="#000" viewBox="0 0 16 16">
              <path d={SVG_ICONS.SEARCH} />
            </svg>
          </button>
          <div className="search-separator"></div>
          <label htmlFor="search" hidden>
            Buscar video
          </label>
          <input
            className="searchbar"
            type="search"
            placeholder="Buscar video"
          />
        </form>
      </div>
    </div>
  );
};

export default DashboardHeader;
