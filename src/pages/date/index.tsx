import Layout from "@/components/layout";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import useCleaningRequestMachine from "@/hook/useCleaningRequestMachine";

export default function Date() {
  const { setDate, setTime } = useCleaningRequestMachine();
  return (
    <Layout>
      <div>
        <Label>날짜를 입력해주세요</Label>
        <Input onChange={(e) => setDate(e.target.value)} />
        <Label>시간을 입력해주세요</Label>
        <Input onChange={(e) => setTime(e.target.value)} />
      </div>
    </Layout>
  );
}
