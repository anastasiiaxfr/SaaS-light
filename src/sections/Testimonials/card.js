import Image from "next/image";

import s from "./style.module.sass";

export default function Card({ data }) {
  return (
    <figure className={s.card}>
      <figcaption>{data.desc}</figcaption>
      <div className={s.card_footer}>
        <Image src={data.ava} alt={data.name} width="75" height="75" />
        <div className={s.card_title}>
          <b>{data.name}</b>
          <span className="">{data.nickname}</span>
        </div>
      </div>
    </figure>
  );
}
