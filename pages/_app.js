import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <section className="px-4 mx-auto my-4 font-sans lg:max-w-screen-xl">
        <header className="flex flex-col justify-between gap-2 p-4 rounded-md text-lime-100 bg-lime-950 xs:flex-row xs:items-center">
          <Link href="/">
            <h1 className="text-2xl font-medium ">Carvago.</h1>
          </Link>
          <p>Choose and Buy your car</p>
        </header>
        <Component {...pageProps} />
      </section>
      <footer className="flex flex-col items-center justify-center gap-2 py-4 text-sm xs:text-base xs:flex-row xs:gap-0 bg-gray-400/60">
        <span className="text-gray-700">developed by Zahra ☁️ </span>
        <span className="text-gray-700/60">
          Next.js courses | BotoCar Project ©
        </span>
      </footer>
    </>
  );
}
