import { MOCK_DATA, MOCK_DATA_VIDEO } from "../data/Mockdata";
import { IVideoFolder } from "../interfaces/IVideoFolder";
import { IVideoResponse } from "../interfaces/IVideoResponse";

export const useVideosDrive = () => {
  const getVideosFolders = (): Promise<Array<IVideoFolder> | null> => {
    return new Promise((resolve, reject) => {
      if (MOCK_DATA) {
        resolve(MOCK_DATA);
      } else {
        reject(new Error(`No se encontró ningún folder de videos`));
      }
    });
  };

  const findVideoFolderById = (
    folderId: number
  ): Promise<IVideoResponse | null> => {
    return new Promise((resolve, reject) => {
      const foundVideoFolder = MOCK_DATA_VIDEO.find(
        (video) => video?.id === folderId
      );

      if (foundVideoFolder) {
        resolve(foundVideoFolder);
      } else {
        reject(new Error(`No se encontró ningún folder con el ID ${folderId}`));
      }
    });
  };

  return {
    getVideosFolders,
    findVideoFolderById,
  };
};
