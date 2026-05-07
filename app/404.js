import Link from "next/link";
import image from "next/image";

export default function NotFound() {
  console.log("404 - er loadet, it works!");
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div>
        <Image
          src="/images/offsite.png"
          alt="Off-site illustration"
          width={300}
          height={300}
        />
      </div>
      <div>
        <h1 className="text-4xl text-gray-900 font-bold mb-4">OFF-SITE!</h1>
        <p className="text-lg text-gray-600">
          Vi beklager, men denne sidde er ikke klar til at komme på banen endnu
        </p>
        <p className="text-lg text-gray-600">
          Vi gør vores bedste for at blive kampklar hurtigst muligt
        </p>
        <Link
          href="/"
          className="mt-6 px-4 py-2 bg-orange-500 text-white hover:bg-orange-600 transition duration-300 inline-block"
        >
          Tilbage til forsiden
        </Link>
      </div>
    </div>
  );
}
