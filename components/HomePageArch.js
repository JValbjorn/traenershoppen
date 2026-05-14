import CTAButton from "./CTAButton";

export default function HomePageArch() {
  return (
    <div
      className="cls-5 fill-white h-full max-h-[710.58px] w-[40vw] max-w-[602.17px] mx-auto xl:pt-30 sm:pt-20 absolute -left-10 bg-no-repeat bg-top min-h-20 2xl:top-[10%] xl:top-[23%] lg:top-[15%] md:top-[10%]"
      style={{
        backgroundImage: "url('/img/fan-arch.svg')",
        backgroundSize: "contain",
        aspectRatio: "602.17 / 710.58",
      }}
    >
      <div className="flex flex-col p-3 pl-10 justify-between xl:min-h-100 md:min-h-75">
        <h2 className="xl:text-3xl lg:text-2xl md:text-xl font-bold text-var(--dark_green) w-2/3 xl:mt-4 lg:mt-0">
          Holdbare bolde er et musthave
        </h2>
        <p className="w-3/4 xl:text-base lg:text-sm md:text-xs">
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
    </div>
  );
}
