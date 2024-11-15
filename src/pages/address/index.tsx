import Layout from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cleaningRequestActor } from "../_app";

export default function Address() {
  return (
    <Layout>
      <div>
        <Label>주소를 입력해주세요</Label>
        <Input
          onChange={(e) => {
            const value = e.target.value;
            cleaningRequestActor.send({
              type: "SET_ADDRESS",
              address: value,
            });
          }}
        />
      </div>
    </Layout>
  );
}
