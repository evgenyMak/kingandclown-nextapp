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
        <div className="content-container">
          <h2>Описание альбома</h2>
          {album.Description}
        </div>
        <div className="content-container">
          <h2>Подробности</h2>
          <p>
            Ea anim pariatur irure nulla ipsum adipisicing culpa commodo ipsum
            amet. Nostrud dolore qui culpa consequat cupidatat et laboris
            consectetur. Aliqua dolor proident labore laboris qui voluptate ea
            sit adipisicing magna labore irure. Laboris irure ut occaecat Lorem
            fugiat dolor nulla. Ex incididunt aliquip est in. Pariatur velit
            duis consectetur do aliqua dolore sunt cupidatat. Tempor ut sit
            nulla reprehenderit culpa sunt magna commodo. Anim velit sint
            consectetur velit ex ex nulla cillum. Laboris aute magna magna
            reprehenderit ullamco ex culpa. Quis nostrud reprehenderit commodo
            duis officia excepteur quis. Officia commodo reprehenderit consequat
            labore aliqua consectetur ad incididunt irure ipsum excepteur. Velit
            officia ullamco duis tempor cupidatat est ad nisi aliqua qui sunt ea
            laborum ea. Consectetur nostrud est qui consequat dolore id
            cupidatat ea incididunt exercitation nostrud. Laboris id irure
            pariatur aliquip incididunt id ea excepteur est culpa. Aliqua ut
            aliqua ipsum commodo qui. Sunt quis exercitation do proident ad est
            ipsum nulla. Consectetur pariatur veniam mollit ad deserunt dolore
            aute duis ullamco mollit aliqua irure. Sit mollit mollit nisi eu
            elit officia velit ea anim sint exercitation nulla sit. Nisi
            consectetur mollit magna elit eu ex in labore laboris. Ullamco
            deserunt ullamco amet et sit ad esse dolore ullamco irure anim
            fugiat. Id sint amet irure sit elit esse voluptate eiusmod. Deserunt
            magna nisi pariatur labore non dolor sunt cupidatat Lorem
            consectetur et dolor deserunt anim. Mollit reprehenderit ullamco est
            minim. Laboris aute enim sit nostrud eu. Velit eiusmod et nulla duis
            eiusmod enim irure aliquip id duis aliqua excepteur nostrud. Magna
            proident sunt cupidatat tempor. Nisi proident Lorem ex consectetur
            deserunt aliquip sit nulla mollit sunt veniam. Proident exercitation
            incididunt quis in aute eu eu esse sunt minim duis commodo. Enim ad
            amet anim in deserunt nostrud ipsum excepteur magna reprehenderit
            laboris esse. Laborum amet pariatur culpa aute ut ex ipsum cillum
            fugiat proident dolore sunt qui. Enim Lorem Lorem Lorem minim sint
            nostrud duis cillum est exercitation esse. Cillum labore qui sint
            voluptate. Sunt exercitation ex ut elit velit ex aliquip elit duis
            eiusmod. Magna enim ut culpa consequat consequat ad dolore
            exercitation excepteur fugiat excepteur. Excepteur ullamco
            incididunt qui magna irure ex nisi laborum veniam ut. Incididunt
            aliqua et nostrud laboris laborum cillum excepteur in nostrud.
            Adipisicing incididunt esse proident aliqua. Minim ullamco sunt
            incididunt cillum do cupidatat ad ex. Pariatur elit cupidatat aliqua
            nisi incididunt Lorem eiusmod laborum sint sit. Reprehenderit
            occaecat ex proident ut adipisicing mollit in in exercitation anim
            velit. Ex pariatur exercitation non veniam nulla culpa nulla
            officia. Mollit eiusmod veniam commodo cillum dolore ea fugiat esse
            quis sit nulla sit tempor esse. Non culpa non labore exercitation
            voluptate dolor laborum magna Lorem ullamco. Lorem laborum enim
            minim proident occaecat. Occaecat ut pariatur in amet adipisicing
            exercitation non mollit pariatur ea. Lorem mollit commodo aliquip
            irure. Lorem consectetur ut amet excepteur aliqua ad nisi excepteur
            sunt voluptate. Minim minim velit incididunt ex sunt ipsum. Est
            consectetur sunt esse minim id adipisicing enim laborum et
            adipisicing cupidatat. Eiusmod officia laborum proident tempor ea
            esse nulla velit aliqua incididunt. Cupidatat pariatur veniam amet
            ut esse.
          </p>
        </div>
        <div className="content-container">
          <h2>История создания</h2>
          <p>
            Lorem velit ipsum et sit eu minim ullamco eiusmod dolore cillum
            pariatur labore culpa esse. Aliquip irure qui cillum culpa nisi et
            cupidatat ut excepteur proident. Nulla nulla enim id ipsum minim ea
            eiusmod elit ex aliquip consequat. Deserunt irure irure et amet
            irure laboris consectetur sit aute. Mollit mollit ad exercitation
            deserunt nulla veniam aute. Amet ut aute voluptate aliquip excepteur
            commodo aute consectetur laborum proident sint. Enim dolore veniam
            ut elit non qui labore velit nisi est deserunt fugiat fugiat.
            Deserunt culpa reprehenderit non ipsum eu minim minim. Velit esse
            tempor amet excepteur. Pariatur sunt eiusmod occaecat nostrud
            voluptate excepteur ex enim adipisicing sunt. Commodo laborum veniam
            non ullamco non eu esse sit pariatur qui reprehenderit. Anim veniam
            non reprehenderit cillum et nisi aliquip. Pariatur nulla esse
            officia veniam. Pariatur in est cillum ex Lorem tempor est
            cupidatat. Aliquip reprehenderit aliqua est labore dolore velit.
            Proident enim adipisicing exercitation qui id enim. Proident qui sit
            non aliquip consequat nulla reprehenderit culpa est dolore proident
            fugiat. Adipisicing deserunt laboris ea nostrud laborum duis aliqua
            non consequat consectetur nostrud magna velit commodo. Deserunt
            nostrud consectetur laboris non est minim nisi nulla commodo
            voluptate et excepteur cupidatat quis. In ullamco nostrud ad velit
            minim commodo. Nostrud cillum ad velit deserunt proident duis
            proident duis sit ut exercitation dolore. Aliqua amet cupidatat
            cillum id aliquip elit aute officia cupidatat aliquip officia non.
            Qui aute labore enim nulla irure exercitation occaecat nisi aute
            excepteur consequat labore. Labore ad consectetur culpa magna
            officia minim eu ea consectetur ad nulla. Exercitation reprehenderit
            qui sint duis mollit consectetur deserunt. Laborum aute exercitation
            id mollit enim velit dolor enim nisi qui.
          </p>
        </div>
      </Main>
    </>
  );
}
