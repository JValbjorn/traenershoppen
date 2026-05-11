import { motion } from "motion/react"

export default function HomePageArch() {
  return (
    <motion.div
      className="cls-5 fill-white w-3/7 h-auto absolute -left-10 2xl:top-[10%] xl:top-[23%] lg:top-[15%] md:top-[10%]"
      initial={{ opacity: 0, translateY: 50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
    >
      <svg
        id="arch"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 573.46 676.75"
      >
        <path
          className="fill-white"
          d="M546.26,330.16C484.21,150.01,303.14,33.03,121.29,6.73,64.47-1.49-.01-1.13,0,2.24l1,674.51,572.46-203.26c-2.41-49.59-11.33-97.3-27.2-143.33h0Z"
        />
      </svg>
    </motion.div>
  );
}
