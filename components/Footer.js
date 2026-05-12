import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full h-auto grid  grid-rows-4 justify-center align-top bg-dark-green text-sm text-white p-10 md:grid-cols-4 md:grid-rows-1">
      <div className="flex flex-col self-start justify-self-center">
        <Link href="/" className="font-bold">
          Trænershoppen
        </Link>
        <p>Vestergade 19b, 8000 Aarhus</p>
        <p>CVR: 1234568943</p>
      </div>
      <div className="flex flex-col self-start md:justify-self-center">
        <Link href="/404">Om os</Link>
        <Link href="/404">Leveringsbetingelser</Link>
        <p>Inspiration til øvelser</p>
      </div>
      <div className="flex flex-col self-start md:justify-self-center">
        <h4 className="font-bold">Telefontider</h4>
        <p>Mandag - Torsdag: 8 - 16</p>
        <p>Fredag: 8 - 15.30</p>
        <p>Weekend: Lukket</p>
      </div>
      <Link
        href="/"
        className="flex flex-col self-start justify-self-center pt-4 md:pt-0"
      >
        <Image
          src="/img/logo-white.png"
          alt="Trænershoppen - tilbage til forsiden"
          className="justify-self-center"
          width={70}
          height={70}
        />
      </Link>
    </footer>
  );
}
