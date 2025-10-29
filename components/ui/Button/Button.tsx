import "./style.css";

interface IButtonProps {
  height: number;
  width: number;
  text: string;
  link: string;
  backgroundImage?: string;
}

export default function Button({
  height,
  width,
  text,
  link,
  backgroundImage,
}: IButtonProps) {
  return (
    <div
      className="button"
      style={{
        height: height + "px",
        width: width + "px",
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="button-background"></div>
      <a className="button-link" href={link}>
        {text}
      </a>
    </div>
  );
}
