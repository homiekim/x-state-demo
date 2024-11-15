import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { cleaningRequestActor } from "../_app";

export default function Select() {
  return (
    <Layout>
      <div className="w-full justify-center items-center flex gap-16">
        <Button
          variant="outline"
          onClick={() =>
            cleaningRequestActor.send({
              type: "SET_CLEANING_TYPE",
              cleaningType: "이사",
            })
          }
        >
          이사청소
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            cleaningRequestActor.send({
              type: "SET_CLEANING_TYPE",
              cleaningType: "거주",
            })
          }
        >
          거주청소
        </Button>
      </div>
    </Layout>
  );
}
