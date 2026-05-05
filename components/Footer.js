import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-auto flex justify-center align-top bg-dark-green text-sm text-white p-4">
      <div className="">
        <p className="font-bold">Trænershoppen</p>
        <p>Vestergade 19b, 8000 Aarhus</p>
        <p>CVR: 1234568943</p>
      </div>
      <div>
        <p>Om os</p>
        <p>Leveringsbetingelser</p>
        <p>Inspiratoins side</p>
      </div>
      <div>
        <h4 className="font-bold">Telefontider</h4>
        <p>Mandag - Torsdag: 8 - 16</p>
        <p>Fredag: 8 - 15.30</p>
        <p>Weekend: Lukket</p>
      </div>
      <Image/>
      
    </footer>
  );
}
