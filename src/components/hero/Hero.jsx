import React from "react";
import "./Hero.css";
import Heart from "../../assets/heart.png";
import Header from "../header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Calorie from "../../assets/calories.png";

import { motion } from "framer-motion";

const Hero = () => {
  const transition = {
    type: "tween",
    duration: 3,
  };
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      {/* LEFT SIDE */}
      <div className="left-h">
        <Header />
        <div className="thebest-ad jura">
          <motion.div
            initial={{ left: "180px" }}
            whileInView={{ left: "9px" }}
            transition={transition}
          ></motion.div>
          <span>The Best Fitness-Club In The City</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text ">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your idealbody and
              liveup your life to fullest.
            </span>
          </div>
        </div>
        {/* ^ FIGURES */}
        <div className="figures jura">
          <div>
            <span>+140</span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>+978</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+50</span>
            <span>FITNESS PROGRAMS</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: "1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate noto"
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* Hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img 
        initial={{ right: "11rem" }}
        whileInView={{ right: "28rem" }}
        transition={{...transition,type:'spring'}}
        src={hero_image_back} alt="" className="hero-image-back" />

        {/* calories block */}
        <motion.div
          initial={{ right: "40rem" }}
          whileInView={{ right: "32rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calorie} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kCal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
