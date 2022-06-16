import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const hoverVariant = {
    hover: {
      scale: 1.1,
      textShadow: "0px 0px 8px rgb(0, 255, 255",
      boxShadow: "0px 0px 8px rgb(0, 255, 255",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1.5, type: "tween" }}
      className="home container"
    >
      <motion.h2 animate={{ fontSize: 50 }}>Welcome to Pizza Joint</motion.h2>
      <Link to="/base">
        <motion.button variants={hoverVariant} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
