import { motion } from "motion/react";
import CTAButton from "./CTAButton";

export default function HomePageArch() {
  return (
    <motion.div
      className="cls-5 fill-white h-full max-h-[710.58px] mx-auto pt-30 absolute -left-10 bg-no-repeat bg-top min-h-20 2xl:top-[10%] xl:top-[23%] lg:top-[15%] md:top-[10%]"
      style={{
        backgroundImage: "url('/img/fan-arch.svg')",
        backgroundSize: "contain",
        aspectRatio: "602.17 / 710.58",
      }}
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="flex flex-col p-3 pl-10 justify-between min-h-100">
        <h2 className="text-3xl font-bold text-var(--dark_green) mt-4 w-2/3">
          Holdbare bolde er et musthave
        </h2>
        <p className="w-3/4">
          Der er ingen der har lyst til at købe nye bolde igen og igen og igen.
          Lige nu har vi tilbud på et stort udvalg af holdbare og
          klimaresistente fodbolde, så du kun behøver købe til klubben 1 gang.
        </p>
        <CTAButton
          className="w-15"
          text="Se tilbuddene"
          onClick={() => console.log("CTA Button Clicked")}
        />
      </div>
    </motion.div>
  );
}
