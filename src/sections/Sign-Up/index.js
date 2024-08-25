"use client";
import s from "./style.module.sass";
import Link from "next/link";
import Icon from "@/asssets/img/icon/arr-r.svg";
import Img1 from "@/asssets/img/p8.png";
import Img2 from "@/asssets/img/p9.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Sign_Up() {
  const secRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: secRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [300, -300]);

  return (
    <section className={s.section} ref={secRef}>
      <div className={s.bg}>
        <motion.img
          src={Img1.src}
          width="362"
          height="auto"
          alt="ALT"
          style={{
            translateY,
          }}
        />
        <motion.img
          src={Img2.src}
          alt="ALT"
          width="363"
          height="auto"
          style={{
            translateY,
          }}
        />
      </div>
      <div className="container">
        <div className={s.row}>
          <div className="text-center">
            <h2 className="">Sign up for free today</h2>
            <p className={s.subtitle}>
              Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
            </p>
            <div className="btns">
              <Link className="btn" href="/">
                Get for free
              </Link>
              <Link className="btn-text" href="/">
                Learn more
                <Icon width="16" height="16" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
