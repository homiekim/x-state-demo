import { cleaningRequestMachine } from "@/lib/machine";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { createActor } from "xstate";

export const cleaningRequestActor = createActor(cleaningRequestMachine);

cleaningRequestActor.start();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="w-full h-full max-w-[786px] mx-auto bg-white  flex flex-col">
      <Component {...pageProps} />
    </main>
  );
}
