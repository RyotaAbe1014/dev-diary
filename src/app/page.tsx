import { Button } from "@/lib/components/ui/button";
import { redirect } from "next/navigation";



export default function Home() {
  redirect('/auth/login');
  return (
    <>
      <Button>Click me</Button>
    </>
  );
}
