import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full h-auto grid grid-cols-4 justify-center align-top bg-dark-green text-sm text-white p-10">
      <div className="self-start justify-self-center">
        <p className="font-bold">Trænershoppen</p>
        <p>Vestergade 19b, 8000 Aarhus</p>
        <p>CVR: 1234568943</p>
      </div>
      <div className="self-start justify-self-center">
        <p>Om os</p>
        <p>Leveringsbetingelser</p>
        <p>Inspiratoins side</p>
      </div>
      <div className="self-start justify-self-center">
        <h4 className="font-bold">Telefontider</h4>
        <p>Mandag - Torsdag: 8 - 16</p>
        <p>Fredag: 8 - 15.30</p>
        <p>Weekend: Lukket</p>
      </div>
      <Image src="/img/pift.png" alt="Trænershoppen - tilbage til forsiden" className="justify-self-center" width="70" height="100"/>
    </footer>
  );
}
