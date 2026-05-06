import MenuItems from "./MenuItems";

export default function Header() {
  return (
    <header className="relative z-100 bg-dark-green py-4 px-6 flex items-center justify-between w-full">
      <article className="text-2xl text-white font-bold">Trænershoppen</article>
      <MenuItems />
    </header>
  );
}
