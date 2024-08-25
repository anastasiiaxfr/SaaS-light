"use client";
import { useRef } from "react";

import s from "./style.module.sass";
import { testimonials } from "./constant";
import Card from "./card";
import { motion } from "framer-motion";

export default function Testimonials() {
  const secRef = useRef(null);
  return (
    <section className={s.section} ref={secRef}>
      <div className="container">
        <hgroup className="hgroup">
          <div className="label">Testimonials</div>
          <h2 className="">What our users say</h2>
        </hgroup>

        <div className={s.cards}>
          <motion.div
            className={s.col}
            animate={{
              translateY: "-50%",
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {testimonials.slice(0, 3).map((i, ind) => (
              <Card data={i} key={ind}></Card>
            ))}
            {testimonials.slice(0, 3).map((i, ind) => (
              <Card data={i} key={ind}></Card>
            ))}
          </motion.div>
          <motion.div
            className={s.col}
            animate={{
              translateY: "-50%",
            }}
            transition={{
              duration: 19,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {testimonials.slice(3, 6).map((i, ind) => (
              <Card data={i} key={ind}></Card>
            ))}
            {testimonials.slice(3, 6).map((i, ind) => (
              <Card data={i} key={ind}></Card>
            ))}
          </motion.div>
          <motion.div
            className={s.col}
            animate={{
              translateY: "-50%",
            }}
            transition={{
              duration: 17,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {testimonials.slice(6, 9).map((i, ind) => (
              <Card data={i} key={ind}></Card>
            ))}
            {testimonials.slice(6, 9).map((i, ind) => (
              <Card data={i} key={ind}></Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
