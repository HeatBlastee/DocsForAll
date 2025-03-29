import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      
      <Link href="/documents/123"><Button className=" flex justify-center items-center " variant={"destructive"}>Click Me</Button>
      </Link></div>
  );
}
