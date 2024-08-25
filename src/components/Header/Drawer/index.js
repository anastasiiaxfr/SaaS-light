"use client";
import s from "./style.module.sass";
import Link from "next/link";
import Logo from "@/components/Logo";
import Icon from "@/asssets/img/icon/close.svg";
import { menu } from "../constant";
export default function Drawer({ show, setShow }) {
  const handleClickOutside = () => {
    setShow(false);
  };

  const handleDrawerContentClick = (event) => {
    event.stopPropagation();
  };
  return (
    <aside className={`${s.drawer} ${show ? s.show : ""}`} onClick={handleClickOutside}>
      <div className={s.container}>
        <div className={s.drawer_header}>
          <Logo />
          <Icon height="32" width="32" />
        </div>
        <nav className={s.menu}>
          {menu.map((i, ind) => (
            <Link href={i.url} key={ind}>
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
