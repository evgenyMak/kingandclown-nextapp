"use client";

import "./style.css";
import INavItem from "@/interfaces/INavItem";
import { usePathname } from "next/navigation";

type NavigationMenuProps = {
  data: INavItem[];
};

export default function NavigationMenu({ data }: NavigationMenuProps) {
  const pathname = usePathname();

  return (
    <ul className="navMenu">
      {data.map((navItem, index) => {
        const isActive = pathname === navItem.Link || pathname.startsWith(navItem.Link + '/');
        return (
          <li key={index} className="navItem">
            <a href={navItem.Link} className={isActive ? "active" : ""}>
              {navItem.Name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
