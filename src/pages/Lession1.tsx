import { easeOut, motion } from "framer-motion";

const parent = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

const children = {
  initial: { opacity: 0, scale: 0.1 },
  animate: { opacity: 1, scale: 1 },
};

const Lession1 = () => {
  return (
    <div>
      <motion.div
        className="size-64 bg-indigo-600 rounded-lg flex flex-wrap gap-5 justify-center items-center p-5"
        variants={parent}
        initial="initial"
        animate="animate"
        transition={{
          duration: 3,
          delayChildren: 1,
          staggerChildren: 1,
          ease: easeOut,
        }}
      >
        <motion.div
          className="size-20 bg-cyan-200 rounded-sm"
          variants={children}
        ></motion.div>
        <motion.div
          className="size-20 bg-cyan-200 rounded-sm"
          variants={children}
        ></motion.div>
        <motion.div
          className="size-20 bg-cyan-200 rounded-sm"
          variants={children}
        ></motion.div>
        <motion.div
          className="size-20 bg-cyan-200 rounded-sm"
          variants={children}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default Lession1;
