import Image from "next/image";

export default function HomeImage() {
  
  return (
    <div
      className="absolute -right-50 top-[40%] md:right-[-15%] 2xl:top-[10%] xl:top-[23%] lg:top-[15%] md:top-[10%] md:w-1/2 w-2/3 "
    >
      <Image
        src="/img/hero-soccer-ball.png"
        alt="Animated Soccer Ball"
        width={800}
        height={800}
      />
    </div>
  );
}
