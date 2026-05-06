import MenuItems from "./MenuItems";

export default function Header() {
  return (
    <header className="bg-dark-green py-4 px-6 flex flex-row items-center justify-between w-full overflow-visible">
      <div className="flex items-center gap-6">
        <h1 className="molend text-2xl text-white font-bold">Trænershoppen</h1>
      </div>
      <div className="flex-1">
        <MenuItems />
      </div>
      <div />
    </header>
  );
}
