import { IAlbumItem } from "@/interfaces/IAlbumItem";
import { LinkToGithubRepo } from "@/tsConfigs";

export class AlbumApiService {
  /**
   * Вернет массив альбомов по ссылке из tsConfigs\index.ts
   * @returns Массив с альбомами
   */
  static async GetAlbums() {
    const res = await fetch(LinkToGithubRepo);
    const data = await res.json();
    return data.Discography;
  }

  /**
   * вернет альбом согласно его Id, если альбома нет то вернет null
   * @returns Альбом или null
   */
  static async GetAlbumById(Id: number): Promise<IAlbumItem | null> {
    const data = await this.GetAlbums();
    let album = null;

    data.forEach((element: { id: number }) => {
      if (element.id === Id) {
        album = element;
      }
    });

    return album;
  }

  static GenerateNewAlbumLink(id: number): string {
    return `/discography/albums/${id}`;
  }
}
