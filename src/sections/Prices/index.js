"use client";
import s from "./style.module.sass";
import { plans } from "./constant";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";

export default function Prices() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className={s.section}>
      <div className="container">
        <hgroup className="hgroup">
          <div className="label">Boost your productivity</div>
          <h2 className="">A more effective way to track progress</h2>
          <p className="">
            Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with
            the set of free components for Framer.
          </p>
        </hgroup>

        <div className={s.cards}>
          <Slider {...settings}>
            {plans.map((plan, index) => (
              <figure key={index} className={`${s.card} ${plan.status === "Most Popular" ? s.card_top : ""}`}>
                <figcaption>
                  <div className={s.card_header}>
                    <span className={s.card_label}>{plan.type}</span>

                    {plan.status && (
                      <motion.span
                        className={s.card_tag}
                        animate={{
                          backgroundPosition: "100%",
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                        }}
                      >
                        {plan.status}
                      </motion.span>
                    )}
                  </div>
                  <div className={s.card_title}>
                    <big>{plan.cost}</big>/<span>{plan.cost_time}</span>
                  </div>
                  <Link href={plan.btn.url} className={s.btn}>
                    {plan.btn.label}
                  </Link>
                  <div className={s.card_info}>
                    <ul className="list-check">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </figcaption>
              </figure>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
