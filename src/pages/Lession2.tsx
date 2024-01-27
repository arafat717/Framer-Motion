import { easeOut, motion } from "framer-motion";

const parent = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delayChildren: 1,
      staggerChildren: 1,
      ease: easeOut,
    },
  },
  hover: { scale: 1.1, transition: { duration: 0.5 } },
  tap: { scale: 1, rotate: 90 },
};

const Lession2 = () => {
  return (
    <div>
      <motion.div
        className="size-64 bg-indigo-600 rounded-lg flex flex-wrap gap-5 justify-center items-center p-5"
        variants={parent}
        initial="initial"
        animate="animate"
        whileHover="hover"
        whileTap="tap"
      ></motion.div>
    </div>
  );
};

export default Lession2;
