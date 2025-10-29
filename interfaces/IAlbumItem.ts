import { ISong } from "./ISong";

export interface IAlbumItem {
  Name: string;
  Year: number;
  Link: string;
  id: number;
  Songs: ISong[];
  Description: string;
}
