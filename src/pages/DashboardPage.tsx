import "../styles/pages/DashboardPage.css";
import DashboardHeader from "../components/pages/DashboardPage/DashboardHeader";
import { useEffect, useState } from "react";
import { MOCK_DATA } from "../data/Mockdata";
import { IVideo } from "../interfaces/IVideo";
import { SVG_ICONS } from "../helpers/svgIcons";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const [videos, setVideos] = useState<Array<IVideo | null>>([null]);

  useEffect(() => {
    new Promise<Array<IVideo | null>>((resolve) => {
      return resolve(MOCK_DATA);
    }).then((response: Array<IVideo | null>) => setVideos(response));
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
          {videos.map((video, index) => (
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
                  <Link className="video-name" to={`video/${video?.id}`}>
                    {video?.name}
                  </Link>
                </div>
              </td>
              <td className="centered">{video?.videos_count}</td>
              <td className="centered">{video?.size}</td>
              <td className="centered">{video?.last_modified}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;
