import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Order = ({ pizza }) => {
  const [showHeader, setShowHeader] = useState(true);
  const containerVariants = {
    hidden: {
      x: "100vw",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        mass: 0.4,
        damping: 8,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const ChildVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  setTimeout(() => {
    setShowHeader(false);
  }, 4000);

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence>
        {showHeader && (
          <motion.h2 exit={{ y: -1000 }}>Thank you for your order :)</motion.h2>
        )}
      </AnimatePresence>
      <motion.p variants={ChildVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={ChildVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
