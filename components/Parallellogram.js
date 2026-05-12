import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

export default function Parallellogram({text, onClick}) {
    const [isHovering, setIsHovering] = useState(false);

    
    return (
      <motion.div
        className="grid grid-rows-2 grid-cols-4 min-h-20"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering && (
          <Image
            src="/img/green-fan.png"
            width={55}
            height={100}
            alt="button decoration"
            className="col-span-2 col-start-3 row-start-1"
          />
        )}

        <div className="row-start-2 col-span-3 skew-x-[-10deg] px-7 border-3 border-light-green hover:bg-light-green">
          <button
            onClick={onClick}
            className="skew-x-10 w-full h-full text-center"
          >
            {text}
          </button>
        </div>
      </motion.div>
    );
}