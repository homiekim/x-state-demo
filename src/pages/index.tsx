import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Layout>
      <div className="w-full justify-center items-center flex gap-16">
        <Button variant="outline">이사청소</Button>
        <Button variant="outline">거주청소</Button>
      </div>
    </Layout>
  );
}
