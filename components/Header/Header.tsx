import { navConfig } from "@/tsConfigs/navConfig";
import NavigationMenu from "../NavigationMenu/NavigationMenu";
import Container from "../utilsComponents/Container/Container";
import "./style.css";

export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <header className="header">
      <div className="header-content">
        <Container>
          <NavigationMenu data={navConfig} />
          {children}
        </Container>
      </div>
    </header>
  );
}
