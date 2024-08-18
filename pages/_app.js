import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <section className=" lg:max-w-screen-lg mx-auto my-4 px-4">
        <header className="text-lime-100 rounded-md bg-lime-950 gap-2  p-4 flex flex-col xs:flex-row justify-between xs:items-center">
          <h1 className="text-2xl font-medium ">Carvago.</h1>
          <p>Choose and Buy your car</p>
        </header>
        <Component {...pageProps} />
      </section>
      <footer className="bg-gray-400/60 flex justify-center items-center py-4">
        <div>
          <span className="text-gray-700">developed by Zahra ☁️ </span>
          <span className="text-gray-700/60">Next.js courses | BotoCar Project ©</span>
        </div>
      </footer>
    </>
  );
}
