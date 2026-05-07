import Image from "next/image";

export default function AnimatedImage() {
  return (
    <div className="relative w-full h-full">
      <Image
        src="/img/hero-soccer-ball.png"
        alt="Animated Soccer Ball"
        width= {500}
        height={300}
      />
    </div>
  );
}
