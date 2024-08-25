"use client";
import s from "./style.module.sass";

import Image from "next/image";
import Img1 from "@/asssets/img/brands/logo1.png";
import Img2 from "@/asssets/img/brands/logo2.png";
import Img3 from "@/asssets/img/brands/logo3.png";
import Img4 from "@/asssets/img/brands/logo4.png";
import Img5 from "@/asssets/img/brands/logo5.png";
import Img6 from "@/asssets/img/brands/logo6.png";
import { motion } from "framer-motion";

export default function Brands() {
  return (
    <section className={s.brands}>
      <div className={`container`}>
        <div className={s.brand}>
          <motion.div
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image src={Img1} alt="ALT" width="150" height="75" />
            <Image src={Img2} alt="ALT" width="150" height="75" />
            <Image src={Img3} alt="ALT" width="150" height="75" />
            <Image src={Img4} alt="ALT" width="150" height="75" />
            <Image src={Img5} alt="ALT" width="150" height="75" />
            <Image src={Img6} alt="ALT" width="150" height="75" />
            {/* for animation */}
            <Image src={Img1} alt="ALT" width="150" height="75" />
            <Image src={Img2} alt="ALT" width="150" height="75" />
            <Image src={Img3} alt="ALT" width="150" height="75" />
            <Image src={Img4} alt="ALT" width="150" height="75" />
            <Image src={Img5} alt="ALT" width="150" height="75" />
            <Image src={Img6} alt="ALT" width="150" height="75" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
