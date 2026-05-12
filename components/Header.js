import Link from "next/link";
import MenuItems from "./MenuItems";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-100 bg-dark-green py-4 px-6 flex items-center justify-between w-full">
      <Link href="/" className="flex flex-row">
        <Image
          src="/img/logo-white.png"
          alt="Trænershoppen Logo"
          width={30}
          height={30}
          className="mr-4"
          href="/"
        />
        <article className="text-2xl text-white font-bold">
          Trænershoppen
        </article>
      </Link>
      <MenuItems />
      <Image
      src="/img/pift.png"
      alt="Search Icon"
      width={30}
      height={30}
      className="ml-4 cursor-pointer"
    />
     <Image
      src="/img/pift.png"
      alt="Cart Icon"
      width={30}
      height={30}
      className="ml-4 cursor-pointer"
    />
    </header>
  );
}
