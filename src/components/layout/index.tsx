import { PropsWithChildren, useEffect } from "react";
import { Button } from "../ui/button";
import { useSelector } from "@xstate/react";
import { cleaningRequestActor } from "@/pages/_app";
import { useRouter } from "next/router";

const Layout = ({ children }: PropsWithChildren) => {
  const { pathname, push } = useRouter();
  const globalState = useSelector(cleaningRequestActor, (state) => state);

  useEffect(() => {
    const nowPathName = pathname.split("/")[1];
    if (nowPathName === globalState.value) return;
    push(`/${globalState.value}`);
  }, [globalState.value, pathname, push]);
  return (
    <div className="w-full h-full p-1 pb-0 relative">
      <div
        className="block text-sm text-gray-500 mt-4 ml-4"
        onClick={() => cleaningRequestActor.send({ type: "PREVIOUS" })}
      >
        &lt; 이전으로
      </div>
      <div className="w-full h-full flex justify-center flex-col">
        {children}
      </div>
      {globalState.value !== "result" && globalState.value !== "success" && (
        <Button
          size="lg"
          className="fixed bottom-0 left-0 w-full py-3 px-6 text-lg bg-blue-500 text-white mx-auto"
          onClick={() => cleaningRequestActor.send({ type: "NEXT" })}
        >
          다음
        </Button>
      )}
    </div>
  );
};

export default Layout;
