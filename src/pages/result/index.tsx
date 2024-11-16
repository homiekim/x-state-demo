import Layout from "@/components/layout";
import { useSelector } from "@xstate/react";
import { Button } from "@/components/ui/button";
import useCleaningRequestMachine from "@/hook/useCleaningRequestMachine";

export default function Result() {
  const { context, confirm, reset } = useCleaningRequestMachine();

  return (
    <Layout>
      <div>
        <h2 className="font-bold text-[24px]">
          작성한 요청사항을 확인해주세요
        </h2>
      </div>
      <div>{JSON.stringify(context, null, 2)}</div>
      <div className="w-full flex gap-4">
        <Button onClick={reset} className="bg-slate-500">
          처음부터
        </Button>
        <Button onClick={confirm} className="bg-blue-500">
          의뢰하기
        </Button>
      </div>
    </Layout>
  );
}
