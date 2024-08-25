import s from "./style.module.sass";
import Image from "next/image";

import Img1 from "@/asssets/img/p6.png";
import Img2 from "@/asssets/img/p7.png";

export default function Products() {
  return (
    <section className={s.section}>
      <div className="container">
        <hgroup className="hgroup">
          <div className="label">Everything you need</div>
          <h2 className="">Streamlined for easy management</h2>
          <p className="">
            Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders,
            and see your progress simply and quickly.
          </p>
        </hgroup>

        <div className={s.cards}>
          <figure className={s.card}>
            <Image src={Img1} alt="ALT" width="250" height="250" />
            <figcaption>
              <div className={s.card_title}>Integration ecosystem</div>
              <div>
                Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one
                place.
              </div>
            </figcaption>
          </figure>
          <figure className={s.card}>
            <Image src={Img2} alt="ALT" width="250" height="250" />
            <figcaption>
              <div className={s.card_title}>Goal setting and tracking</div>
              <div>
                Define and track your goals, breaking down objectives into achievable tasks to keep your targets in
                sight.
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
