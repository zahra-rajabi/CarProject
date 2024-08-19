import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <section className="px-4 mx-auto my-4 lg:max-w-screen-lg">
        <header className="flex flex-col justify-between gap-2 p-4 rounded-md text-lime-100 bg-lime-950 xs:flex-row xs:items-center">
          <Link href="/">
            <h1 className="text-2xl font-medium ">Carvago.</h1>
          </Link>
          <p>Choose and Buy your car</p>
        </header>
        <Component {...pageProps} />
      </section>
      <footer className="flex items-center justify-center py-4 bg-gray-400/60">
        <div>
          <span className="text-gray-700">developed by Zahra ☁️ </span>
          <span className="text-gray-700/60">
            Next.js courses | BotoCar Project ©
          </span>
        </div>
      </footer>
    </>
  );
}
