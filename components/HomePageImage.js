import Image from "next/image";

export default function HomeImage() {
  
  return (
    <div
      className="absolute right-[-15%] 2xl:top-[10%] xl:top-[23%] lg:top-[15%] md:top-[10%] w-1/2 "
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
