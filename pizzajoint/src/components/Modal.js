import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const backdropVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const backdropMove = {
  start: {
    y: "-100vh",
    opacity: 0,
  },
  end: {
    opacity: 1,
    y: "200px",
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    y: "-100vh",
    ease: "ease-out",
  },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="modal"
            variants={backdropMove}
            initial="start"
            animate="end"
            exit="exit"
          >
            <p>Want to create another pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
