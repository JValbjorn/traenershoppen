export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray">
        <img src="/offsite.png" alt="Off-site" className="w-64 mb-8" />
      <h1 className="text-4xl font-bold mb-4">OFF-SITE!</h1>
      <p className="text-lg text-gray-600">Vi beklager, men denne sidde er ikke klar til at komme på banen endnu</p>
      <p className="text-lg text-gray-600">Vi gør vores bedste for at blive kampklar hurtigst muligt</p>
      <button className="mt-6 px-4 py-2 bg-orange text-black hover:bg-black hover:text-orange transition duration-300">Tilbage til forrige side</button>
    </div>
  );
}