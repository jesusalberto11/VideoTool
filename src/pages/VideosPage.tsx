import "../styles/pages/VideosPage.css";
import { useEffect, useState } from "react";
import { MOCK_DATA_VIDEO } from "../data/Mockdata";
import { SVG_ICONS } from "../helpers/svgIcons";
import { IVideoResponse } from "../interfaces/IVideoResponse";
import { useParams } from "react-router-dom";

const VideosPage = () => {
  const params = useParams();
  const [video, setVideo] = useState<IVideoResponse | null>(null);

  useEffect(() => {
    findVideoById(Number(params?.videoId))
      .then((video) => {
        if (video) {
          setVideo(video);
        } else {
          console.error("No se encontró ningún video con ese ID.");
        }
      })
      .catch((error) => {
        console.error("Error al buscar el video:", error.message);
      });
  }, []);

  const findVideoById = (videoId: number): Promise<IVideoResponse | null> => {
    return new Promise((resolve, reject) => {
      const foundVideo = MOCK_DATA_VIDEO.find((video) => video?.id === videoId);

      if (foundVideo) {
        resolve(foundVideo);
      } else {
        reject(new Error(`No se encontró ningún video con el ID ${videoId}`));
      }
    });
  };

  return (
    <div className="page-container">
      <div className="videos-page-header">
        <button className="go-back-btn" type="button" title="Go back">
          <svg width="16" height="16" fill="#fff" viewBox="0 0 16 16">
            <path d={SVG_ICONS.GO_BACK} />
          </svg>
        </button>
        <p>
          Home / <strong>{video?.name}</strong>
        </p>
      </div>
      <table id="customers">
        <tbody>
          <tr>
            <th style={{ width: "60%" }}>
              <div className="first-column">
                <input type="checkbox" />
                Nombre
              </div>
            </th>
            <th className="centered">Tamaño</th>
            <th className="centered">Duración</th>
            <th className="centered">Última modificación</th>
          </tr>
          {video?.videos.map((video, index) => (
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
              <td className="centered">{video?.size}</td>
              <td className="centered">{video?.duration}</td>
              <td className="centered">{video?.last_modified}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VideosPage;
