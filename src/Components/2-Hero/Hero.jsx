import React from "react";
import "./Hero.css";
import Lottie from "lottie-react";
import { motion } from "framer-motion"
import devAnimation from "../../animation/dev.json";
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img 
           initial={{transform:"scale(0)"}}
           animate={{transform:"scale(1.1)"}}
           transition={{damping:6, type:"spring",stiffness:100}}
          src="/public/me2.png" alt="" className="avatar" />
          <div className="icon-verified"></div>
        </div>
        <motion.h1 
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration:2}}
        className="title">Front End Developer And Software Engineer.
         
        </motion.h1>

        <p className="sub-title">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          corporis dolores natus perferendis quibusdam ipsa minima nam tempora,
          as?
        </p>
        <div className="all-icons flex">
          <div className="icon  icon-social-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
        </div>
      </div>
      <div className="right-section animation ">
        <Lottie className="hero-animation" animationData={devAnimation} />
      </div>
    </section>
  );
};

export default Hero;
