import "../styles/pages/DashboardPage.css";
import DashboardHeader from "../components/pages/DashboardPage/DashboardHeader";
import { useEffect, useState } from "react";
import { IVideoFolder } from "../interfaces/IVideoFolder";
import { SVG_ICONS } from "../helpers/svgIcons";
import { Link } from "react-router-dom";
import { useVideosDrive } from "../hooks/useVideosDrive";

const DashboardPage = () => {
  const [videoFolders, setVideoFolders] = useState<Array<IVideoFolder | null>>([
    null,
  ]);
  const { getVideosFolders } = useVideosDrive();

  useEffect(() => {
    getVideosFolders().then((response) => {
      if (response) {
        setVideoFolders(response);
      }
    });
  }, []);

  return (
    <div className="page-container">
      <DashboardHeader />
      <table id="videos-table">
        <tbody>
          <tr>
            <th style={{ width: "60%" }}>
              <div className="first-column">
                <input type="checkbox" readOnly={true} />
                Nombre
              </div>
            </th>
            <th className="centered">Videos</th>
            <th className="centered">Tamaño</th>
            <th className="centered">Última modificación</th>
          </tr>
          {videoFolders.map((folder, index) => (
            <tr key={index}>
              <td>
                <div className="first-column">
                  <input type="checkbox" readOnly={true} />
                  <svg
                    width="16"
                    height="16"
                    fill="#3f37c9"
                    viewBox="0 0 16 16"
                  >
                    <path d={SVG_ICONS.FOLDER} />
                  </svg>
                  <Link className="video-name" to={`video/${folder?.id}`}>
                    {folder?.name}
                  </Link>
                </div>
              </td>
              <td className="centered">{folder?.videos_count}</td>
              <td className="centered">{folder?.size}</td>
              <td className="centered">{folder?.last_modified}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;
