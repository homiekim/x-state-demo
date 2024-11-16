import Layout from "@/components/layout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useCleaningRequestMachine from "@/hook/useCleaningRequestMachine";

export default function Address() {
  const { setAddress } = useCleaningRequestMachine();
  return (
    <Layout>
      <div>
        <Label>주소를 입력해주세요</Label>
        <Input onChange={(e) => setAddress(e.target.value)} />
      </div>
    </Layout>
  );
}
