import { easeOut, motion } from "framer-motion";
import { useRef } from "react";

const parent = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 0.5,
    scale: 1,
    transition: {
      duration: 1,
      delayChildren: 1,
      staggerChildren: 1,
      ease: easeOut,
    },
  },
  hover: { opacity: 1 },
};

const Lession3 = () => {
  const parentRef = useRef(null);
  return (
    <div
      ref={parentRef}
      className="w-[500px] h-[500px] border border-red-600 flex justify-center items-center"
    >
      <motion.div
        className="size-64 bg-indigo-600 rounded-lg flex flex-wrap gap-5 justify-center items-center p-5"
        variants={parent}
        initial="initial"
        animate="animate"
        whileHover="hover"
        drag
        // dragConstraints={{ left: -300, right: 300, top: -300, bottom: 300 }}
        // dragMomentum={true}
        // dragSnapToOrigin
        dragConstraints={parentRef}
        dragElastic
        whileTap={{ scale: 1.3, boxShadow: "0px 10px 10px #000" }}
      ></motion.div>
    </div>
  );
};

export default Lession3;
