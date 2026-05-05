export default function Header() {
  return (
    <header className="bg-dark-green py-4 px-6 flex flex-row flex-initial justify-around items-center w-full">
      <div className="flex items-center justify-between">
        {/* <img src="/logo.png" alt="Logo" className="h-8 w-auto" /> */}
        <article className="text-2xl text-white font-bold">Trænershoppen</article>
      </div>
      <div className="mt-4 flex space-x-4">
        <button className="text-white py-2 px-4 rounded-md hover:bg-var(--light_green)">
          Fodbold
        </button>
        <button className="text-white py-2 px-4 rounded-md hover:bg-var(--light_green)">
          Håndbold
        </button>
        <button className="text-white py-2 px-4 rounded-md hover:bg-var(--light_green)">
          Tøj
        </button>
        <button className="text-white py-2 px-4 rounded-md hover:bg-var(--light_green)">
          Øvelses inspiration
        </button>
      </div>
      <div>
        {/* <img src="/search-icon.png" alt="Search" className="h-5 w-auto" />
        <img src="/cart-icon.png" alt="Cart" className="h-5 w-auto ml-4" /> */}
      </div>
    </header>
  );
}
