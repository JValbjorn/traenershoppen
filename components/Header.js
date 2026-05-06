import MenuItems from "./MenuItems";

export default function Header() {
  return (
    <header className="bg-dark-green py-4 px-6 flex flex-row flex-initial justify-around items-center w-full">
      <div className="flex items-center justify-between">
        {/* <img src="/logo.png" alt="Logo" className="h-8 w-auto" /> */}
        <article className="text-2xl text-white font-bold">Trænershoppen</article>
      </div>
      <div className="flex-1">
        <MenuItems />
      </div>
      <div />
    </header>
  );
}
