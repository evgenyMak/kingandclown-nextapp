import { IAlbumItem } from "@/interfaces/IAlbumItem";
import "./style.css";

export default function AlbumItem(data: IAlbumItem) {
  return (
    <li className="albumItem">
      <p className="albumYear">{data.Year}</p>
      <a href={data.Link} className="albumName">
        {data.Name}
      </a>
    </li>
  );
}
