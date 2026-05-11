import Image from "next/image";
import { motion } from "motion/react";

export default function HomeImage() {
  
  return (
    <motion.div
      className="absolute right-[-15%] 2xl:top-[10%] xl:top-[23%] lg:top-[15%] md:top-[10%] w-1/2 "
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Image
        src="/img/hero-soccer-ball.png"
        alt="Animated Soccer Ball"
        width={800}
        height={800}
      />
    </motion.div>
  );
}
