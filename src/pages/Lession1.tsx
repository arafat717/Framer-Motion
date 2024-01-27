import { motion } from "framer-motion";

const Lession1 = () => {
  return (
    <div>
      <motion.div
        className="size-64 bg-indigo-600 rounded-lg"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10 }}
      ></motion.div>
    </div>
  );
};

export default Lession1;
