import { SVG_ICONS } from "../../helpers/svgIcons";
import "../../styles/components/navbar/AppNavbar.css";
import NavbarItem from "./NavbarItem";

const AppNavbar = () => {
  return (
    <nav className="app-navbar">
      <NavbarItem title="Dashboard" icon={SVG_ICONS.COLUMNS} />
      <NavbarItem title="Videos" icon={SVG_ICONS.FOLDER} />
      <NavbarItem title="Player" icon={SVG_ICONS.PLAY_CIRCLE} />
      <NavbarItem title="Analytics" icon={SVG_ICONS.BAR_CHART} />
      <NavbarItem title="Configuraciones" icon={SVG_ICONS.SETTINGS} />
    </nav>
  );
};

export default AppNavbar;
