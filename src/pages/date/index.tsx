import Layout from "@/components/layout";
import { cleaningRequestActor } from "../_app";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function Date() {
  return (
    <Layout>
      <div>
        <Label>날짜를 입력해주세요</Label>
        <Input
          onChange={(e) => {
            const value = e.target.value;
            cleaningRequestActor.send({
              type: "SET_DATE",
              date: value,
            });
          }}
        />
        <Label>시간을 입력해주세요</Label>
        <Input
          onChange={(e) => {
            const value = e.target.value;
            cleaningRequestActor.send({
              type: "SET_TIME",
              time: value,
            });
          }}
        />
      </div>
    </Layout>
  );
}
