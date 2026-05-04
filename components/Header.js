export default function navbar() {
  return (
    <header className="bg-var(--dark_green) dark:var(--orange) py-4 px-6 .flex items-center justify-between">
      <div className="flex items-center justify-between">
        <h1 className="molend text-2xl font-bold">My App</h1>
        <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
      </div>
      <div className="mt-4 flex space-x-4">
        <button className="bg-var(--orange) text-white py-2 px-4 rounded-md hover:bg-var(--light_green)">
          Fodbold
        </button>
        <button className="bg-var(--orange) text-white py-2 px-4 rounded-md hover:bg-var(--light_green)">
          Håndbold
        </button>
        <button className="bg-var(--orange) text-white py-2 px-4 rounded-md hover:bg-var(--light_green)">
          Tøj
        </button>
        <button className="bg-var(--orange) text-white py-2 px-4 rounded-md hover:bg-var(--light_green)">
          Øvelses inspiration
        </button>
      </div>
      <div>
        <img src="/search-icon.png" alt="Search" className="h-5 w-auto" />
        <img src="/cart-icon.png" alt="Cart" className="h-5 w-auto ml-4" />
      </div>
    </header>
  );
}
