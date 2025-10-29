import { AlbumApiService } from "@/api/services/AlbumApiService";
import AlbumItem from "@/components/ui/AlbumItem/AlbumItem";
import Header from "@/components/Header/Header";
import { IAlbumItem } from "@/interfaces/IAlbumItem";
import "./style.css";

export default async function Page() {
  const data = await AlbumApiService.GetAlbums();

  return (
    <Header>
      <ul className="discographyList">
        {data.map((album: IAlbumItem, index: number) => (
          <AlbumItem
            Name={album.Name}
            Year={album.Year}
            Link={AlbumApiService.GenerateNewAlbumLink(album.id)}
            key={index}
            id={album.id}
            Songs={album.Songs}
            Description={album?.Description || "Нету описания"}
          />
        ))}
      </ul>
    </Header>
  );
}
