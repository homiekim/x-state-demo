import Layout from "@/components/layout";
import { useSelector } from "@xstate/react";
import { cleaningRequestActor } from "../_app";
import { Button } from "@/components/ui/button";

export default function Result() {
  const cleanRequestContext = useSelector(
    cleaningRequestActor,
    (state) => state.context
  );

  return (
    <Layout>
      <div>
        <h2 className="font-bold text-[24px]">
          작성한 요청사항을 확인해주세요
        </h2>
      </div>
      <div>{JSON.stringify(cleanRequestContext, null, 2)}</div>
      <div className="w-full flex gap-4">
        <Button
          onClick={() => cleaningRequestActor.send({ type: "RESET" })}
          className="bg-slate-500"
        >
          처음부터
        </Button>
        <Button
          onClick={() => cleaningRequestActor.send({ type: "CONFIRM" })}
          className="bg-blue-500"
        >
          의뢰하기
        </Button>
      </div>
    </Layout>
  );
}
