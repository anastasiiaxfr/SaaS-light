"use client";
import { useRef } from "react";
import s from "./style.module.sass";
import Link from "next/link";
import Image from "next/image";
import { features } from "./constant";
import Icon from "@/asssets/img/icon/arr-r.svg";
import Img1 from "@/asssets/img/img1.png";
import Img2 from "@/asssets/img/p5.png";
import Img3 from "@/asssets/img/p4.png";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Features() {
  const secRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [600, -600]);

  return (
    <section className={s.section} ref={secRef}>
      <div className="container twxt-center">
        <hgroup className="hgroup">
          <div className="label">Boost your productivity</div>
          <h2 className="">A more effective way to track progress</h2>
          <p className="">
            Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with
            the set of free components for Framer.
          </p>
        </hgroup>

        <div className={s.demo_wrap}>
          <div className={s.bg}>
            <motion.img src={Img2.src} alt="ALT" width="250" height="250" style={{ translateY }} />
            <motion.img src={Img3.src} alt="ALT" width="250" height="250" style={{ translateY }} />
          </div>
          <Image src={Img1} alt="ALT" width="800" height="auto" className={s.demo} />
        </div>

        <div className={s.features}>
          {features.map((i, ind) => (
            <div className={s.feature} key={ind}>
              {i.icon}
              <div className={s.feature_title}>{i.title}</div>
              <div className="">{i.desc}</div>
              <Link href={i.url} className={`${s.btn} btn-text`}>
                Learn more <Icon width="16" height="16" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
