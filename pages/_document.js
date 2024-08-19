import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="bg-gray-200 selection:bg-lime-950 selection:text-lime-200 scrollbar-thin scrollbar-thumb-lime-950 scrollbar-track-lime-200"
    >
      <Head>
        <link rel="shortcut icon" href="/layout/favicon/icon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
