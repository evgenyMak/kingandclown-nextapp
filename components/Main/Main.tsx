import Container from "../Container/Container";
import "./style.css";

export default function Main({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="main" id="main">
      <Container>{children}</Container>
    </main>
  );
}
