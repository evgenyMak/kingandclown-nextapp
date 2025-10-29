import Header from "@/components/Header/Header";
import Img from "@/components/Img/Img";
import Image from "next/image";

export default function Home() {
  return (
    <Header>
      <div className="content-container">
        <Img
          src={"/images/logo.webp"}
          alt={"Логотип группы"}
          height={200}
          width={200}
          className="logo"
        />
        <p>
          «Король и Шут» — советская и российская хоррор-панк-группа из
          Санкт-Петербурга. Группа была образована в Ленинграде в 1988 году.
          После смерти её лидера и одного из основателей Михаила Горшенёва 19
          июля 2013 года выступает только в рок-мюзикле TODD. Выделяется своим
          необычным для классического панк-рока стилем.
        </p>
      </div>
    </Header>
  );
}
