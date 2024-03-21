import "../styles/pages/VideosPage.css";
import { useEffect, useState } from "react";
import { SVG_ICONS } from "../helpers/svgIcons";
import { IVideoResponse } from "../interfaces/IVideoResponse";
import { Link, useParams } from "react-router-dom";
import { useVideosDrive } from "../hooks/useVideosDrive";

const VideosPage = () => {
  const params = useParams();
  const { findVideoFolderById } = useVideosDrive();
  const [folder, setFolder] = useState<IVideoResponse | null>(null);

  useEffect(() => {
    findVideoFolderById(Number(params?.videoId))
      .then((response) => {
        if (response) {
          setFolder(response);
        }
      })
      .catch((error) => {
        console.error(
          "Error al obtener los datos de la carpeta de video:",
          error.message
        );
      });
  }, []);

  return (
    <div className="page-container">
      <div className="videos-page-header">
        <Link
          className="go-back-btn"
          type="button"
          title="Regresar al inicio"
          to={"/"}
          replace={true}
        >
          <svg width="16" height="16" fill="#fff" viewBox="0 0 16 16">
            <path d={SVG_ICONS.GO_BACK} />
          </svg>
        </Link>
        <p>
          Home / <strong>{folder?.name}</strong>
        </p>
      </div>
      <table id="video-table">
        <tbody>
          <tr>
            <th style={{ width: "60%" }}>
              <div className="first-column">
                <input type="checkbox" />
                Nombre
              </div>
            </th>
            <th className="hidde-responsive centered">Tamaño</th>
            <th className="centered">Duración</th>
            <th className="hidde-responsive centered">Última modificación</th>
          </tr>
          {folder?.videos.map((video, index) => (
            <tr key={index}>
              <td>
                <div className="first-column">
                  <input type="checkbox" />
                  <svg
                    width="16"
                    height="16"
                    fill="#3f37c9"
                    viewBox="0 0 16 16"
                  >
                    <path d={SVG_ICONS.PLAY_CIRCLE} />
                  </svg>
                  <p className="video-name">{video?.title}</p>
                </div>
              </td>
              <td className="hidde-responsive centered">{video?.size}</td>
              <td className="centered">{video?.duration}</td>
              <td className="hidde-responsive centered">
                {video?.last_modified}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VideosPage;
