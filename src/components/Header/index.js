"use client";
import { useState } from "react";
import s from "./style.module.sass";
import Link from "next/link";
import Logo from "@/components/Logo";
import { menu } from "./constant";
import Icon from "@/asssets/img/icon/menu.svg";
import Drawer from "./Drawer";

export default function Header() {
  const [show, setShow] = useState(false);
  const toggleDrawer = () => {
    setShow(!show);
  };
  return (
    <>
      <header className={s.header}>
        <div className="container">
          <div className={s.row}>
            <Logo />
            <nav className={s.menu}>
              {menu.map((i, ind) => (
                <Link href={i.url} key={ind}>
                  {i.label}
                </Link>
              ))}
            </nav>
            <div className="btns">
              <Link href="/" className="btn">
                Get for free
              </Link>
              <div className={s.menu_toggle} onClick={toggleDrawer}>
                <Icon width="32" height="32" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Drawer show={show} setShow={setShow} />
    </>
  );
}
