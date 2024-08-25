import s from "./style.module.sass";
import { menu, info } from "./_const";
import Link from "next/link";
import Socials from "@/components/Socials";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.row}>
          <div className={s.col}>
            <div className={s.logo}>
              <Logo />
              <div className={s.note}>{info}</div>
            </div>

            <Socials />
          </div>

          <nav className={s.menu}>
            {menu.map((i, ind) => (
              <div key={ind}>
                <b className={s.menu_heading}>{i.group}</b>
                {i.links.map((j, ind) => (
                  <Link key={ind} href={j.url}>
                    {j.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
