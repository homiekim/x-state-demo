import { PropsWithChildren, useEffect } from "react";
import { Button } from "../ui/button";

import { useRouter } from "next/router";
import useCleaningRequestMachine from "@/hook/useCleaningRequestMachine";

const Layout = ({ children }: PropsWithChildren) => {
  const { pathname, push } = useRouter();
  const { state, next, previous } = useCleaningRequestMachine();

  useEffect(() => {
    const nowPathName = pathname.split("/")[1];
    if (nowPathName === state.value) return;
    push(`/${state.value}`);
  }, [state.value, pathname, push]);
  return (
    <div className="w-full h-full p-1 pb-0 relative">
      <div className="block text-sm text-gray-500 mt-4 ml-4" onClick={previous}>
        &lt; 이전으로
      </div>
      <div className="w-full h-full flex justify-center flex-col">
        {children}
      </div>
      {state.value !== "result" && state.value !== "success" && (
        <Button
          size="lg"
          className="fixed bottom-0 left-0 w-full py-3 px-6 text-lg bg-blue-500 text-white mx-auto"
          onClick={next}
        >
          다음
        </Button>
      )}
    </div>
  );
};

export default Layout;
