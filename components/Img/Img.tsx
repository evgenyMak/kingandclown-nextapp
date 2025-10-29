import Image from "next/image";
import "./style.css";

interface IImgParams {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
}

export default function Img({
  src,
  alt,
  height,
  width,
  className,
}: IImgParams) {
  return (
    <div
      className="ImgContainer"
      style={{
        width: width + "px",
        height: height + "px",
      }}
    >
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        className={className || ""}
      />
      <p>{alt}</p>
    </div>
  );
}
