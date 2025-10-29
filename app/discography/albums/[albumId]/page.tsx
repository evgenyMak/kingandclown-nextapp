import { AlbumApiService } from "@/api/services/AlbumApiService";
import Button from "@/components/ui/Button/Button";
import Header from "@/components/Header/Header";
import Img from "@/components/ui/Img/Img";
import Main from "@/components/Main/Main";
import { IAlbumItem } from "@/interfaces/IAlbumItem";
import { ISong } from "@/interfaces/ISong";
import "./style.css";

interface IPageProps {
  params: {
    albumId: string;
  };
}

export default async function Page({ params }: IPageProps) {
  const { albumId } = await params;
  const albumIdNum = parseInt(albumId, 10);

  if (isNaN(albumIdNum)) {
    return (
      <Header>
        <div>Некорректный ID альбома</div>
      </Header>
    );
  }

  const album: IAlbumItem | null = await AlbumApiService.GetAlbumById(
    albumIdNum
  );

  if (!album) {
    return (
      <Header>
        <div>Альбом не найден</div>
      </Header>
    );
  }

  const textIsLong = album.Description.length >= 450;
  const allAlbumsList = await AlbumApiService.GetAlbums();

  return (
    <>
      <Header>
        <h1>{album.Name}</h1>
        <div className="content-container">
          <div className="flexbox-container">
            <Img
              src={album.Link}
              alt={"Обложка альбома"}
              height={300}
              width={300}
            />
            <p className="about">
              {album.Description.slice(0, 450) || "Описания нету"}
              {textIsLong && (
                <a className="continue" href="#main">
                  ... продолжение
                </a>
              )}
            </p>
          </div>
          <div className="trackListContainer">
            <ol className={album.Songs ? "trackList" : "trackListNotFound"}>
              {album.Songs ? (
                album.Songs.map((song: ISong, index: number) => (
                  <li key={index}>
                    <a>{song.Name}</a>
                  </li>
                ))
              ) : (
                <h3>Треков не найдено</h3>
              )}
            </ol>
            <div className="flexbox-container">
              {album.id > 1 && (
                <Button
                  height={50}
                  width={170}
                  text={"Назад"}
                  link={AlbumApiService.GenerateNewAlbumLink(
                    allAlbumsList[album.id - 2].id
                  )}
                  backgroundImage={allAlbumsList[album.id - 2].Link}
                />
              )}
              {album.id < allAlbumsList.length && (
                <Button
                  height={50}
                  width={170}
                  text={"Вперед"}
                  link={AlbumApiService.GenerateNewAlbumLink(
                    allAlbumsList[album.id].id
                  )}
                  backgroundImage={allAlbumsList[album.id].Link}
                />
              )}
            </div>
          </div>
        </div>
      </Header>
      <Main>
        <h2>Описание альбома</h2>
        <div className="content-container">{album.Description}</div>
      </Main>
    </>
  );
}
