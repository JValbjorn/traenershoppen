import Image from "next/image";
import Fan from "@/components/Fan";
import FanSquare from "@/components/FanSquare";


export default function Home() {
  return (
    <div>
      {/* <FanSquare /> */}
      <Fan />
      <div className="flex flex-col flex-1 items-center justify-center bg-var(--light_gray) font-sans dark:bg-var(--light-gray) h-250 z-10">
        <main className="flex flex-1 w-full flex-col items-center justify-between py-32 px-16 bg-var(--light_gray) dark:var(--light-gray) sm:items-start z-2">
          <div className="w-full flex flex-row items-center justify-around text-center sm:items-start sm:text-left">
            <button className="bg-orange px-5 py-2 w-40">Fodbold</button>
            <button className="bg-orange px-5 py-2 w-40">Håndbold</button>
            <button className="bg-orange px-5 py-2 w-40">Tøj</button>
          </div>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <a
              className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-158px"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={16}
                height={16}
              />
              Deploy Now
            </a>
            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/.08 bg-orange px-5 transition-colors hover:border-transparent hover:bg-black/.04 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-158px"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Documentation
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
