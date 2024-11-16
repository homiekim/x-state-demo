import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import useCleaningRequestMachine from "@/hook/useCleaningRequestMachine";

export default function Select() {
  const { setCleaningType } = useCleaningRequestMachine();
  return (
    <Layout>
      <div className="w-full justify-center items-center flex gap-16">
        <Button variant="outline" onClick={() => setCleaningType("이사")}>
          이사청소
        </Button>
        <Button variant="outline" onClick={() => setCleaningType("거주")}>
          거주청소
        </Button>
      </div>
    </Layout>
  );
}
