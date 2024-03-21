import { IVideoFolder } from "../interfaces/IVideoFolder";
import { IVideoResponse } from "../interfaces/IVideoResponse";

export const MOCK_DATA: Array<IVideoFolder> = [
  {
    id: 0,
    name: "Afiliado Master",
    videos_count: 2,
    size: "8 GB",
    last_modified: "30/may/2023",
  },
  {
    id: 1,
    name: "BeMaster",
    videos_count: 21,
    size: "1.4 GB",
    last_modified: "22/jun/2022",
  },
  {
    id: 2,
    name: "Comizzión",
    videos_count: 10,
    size: "284 MB",
    last_modified: "11/sep/2021",
  },
  {
    id: 3,
    name: "Creador de Contenido",
    videos_count: 2,
    size: "4.3 GB",
    last_modified: "27/jun/2021",
  },
  {
    id: 4,
    name: "Afiliado Master",
    videos_count: 6,
    size: "7.3 GB",
    last_modified: "13/ago/2021",
  },
];

export const MOCK_DATA_VIDEO: Array<IVideoResponse> = [
  {
    id: 0,
    name: "Afiliado Master",
    videos: [
      {
        id: 100,
        title: "Entrenamiento.mp4",
        size: "7.3 GB",
        duration: "04:11:37",
        last_modified: "13/ago/2021",
      },
      {
        id: 101,
        title: "Salida-al-mercado-versión-nueva.mp4",
        size: "1.4 GB",
        duration: "47:55",
        last_modified: "22/jun/2022",
      },
    ],
  },
  {
    id: 1,
    name: "BeMaster",
    videos: [
      {
        id: 100,
        title: "Entrenamiento-nuevos.mp4",
        size: "7.3 GB",
        duration: "04:11:37",
        last_modified: "13/ago/2021",
      },
      {
        id: 101,
        title: "Entrada-al-mercado-versión-vieja.mp4",
        size: "1.4 GB",
        duration: "47:55",
        last_modified: "22/jun/2022",
      },
      {
        id: 102,
        title: "Como-cerrar-una-ventana.mp4",
        size: "3.7 GB",
        duration: "10:12",
        last_modified: "11/sep/2022",
      },
      {
        id: 103,
        title: "Crea-ticket-valioso.mp4",
        size: "4.3 GB",
        duration: "03:50",
        last_modified: "21/jun/2022",
      },
      {
        id: 104,
        title: "Conquista-el-mercado-digital.mp4",
        size: "500 MB",
        duration: "05:00",
        last_modified: "5/abr/2022",
      },
    ],
  },
  {
    id: 2,
    name: "Comizzión",
    videos: [],
  },
  {
    id: 3,
    name: "Creador de Contenido",
    videos: [
      {
        id: 100,
        title: "Entrenamiento-nuevos.mp4",
        size: "7.3 GB",
        duration: "04:11:37",
        last_modified: "13/ago/2021",
      },
      {
        id: 101,
        title: "Itinerario-reunion.mp4",
        size: "1.4 GB",
        duration: "47:55",
        last_modified: "22/jun/2022",
      },
      {
        id: 102,
        title: "Ayuda-nueva-persona-mp4",
        size: "3.7 GB",
        duration: "10:12",
        last_modified: "11/sep/2022",
      },
    ],
  },
  {
    id: 4,
    name: "Afiliado Master",
    videos: [],
  },
];
