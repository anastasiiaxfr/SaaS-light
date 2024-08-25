"use client";
import { useRef } from "react";
import s from "./style.module.sass";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/asssets/img/icon/arr-r.svg";

import Img1 from "@/asssets/img/p2.png";
import Img2 from "@/asssets/img/p3.png";
import Img3 from "@/asssets/img/p1.png";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section className={s.hero} ref={heroRef}>
      <div className="container">
        <div className={s.row}>
          <div>
            <hgroup className={`hgroup ${s.hgroup}`}>
              <div className="label">Version 2.0 is here</div>
              <h1 className="">Pathway to productivity</h1>
              <p className="">
                Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts,
                and celebrate your successes.
              </p>
            </hgroup>

            <div className="btns">
              <Link href="/" className="btn">
                Get for free
              </Link>
              <Link href="/" className="btn-text">
                Learn more <Icon width="16" height="16" />
              </Link>
            </div>
          </div>
          <div className={s.hero_img}>
            <motion.img src={Img2.src} alt="ALT" weight="232" height="232" style={{ translateY, rotate: 0 }} />
            <motion.img src={Img3.src} alt="ALT" weight="216" height="197" style={{ translateY }} />

            <motion.img
              src={Img1.src}
              alt="ALT"
              weight="648"
              height="648"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
