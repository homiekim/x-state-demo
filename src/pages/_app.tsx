import { cleaningRequestActor } from "@/lib/actor";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

cleaningRequestActor.start();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="w-full h-full max-w-[786px] mx-auto bg-white  flex flex-col">
      <Component {...pageProps} />
    </main>
  );
}
