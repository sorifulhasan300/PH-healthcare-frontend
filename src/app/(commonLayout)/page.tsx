import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function CommonLayoutPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Button asChild>
        <Link href={"/login"}>Login</Link>
      </Button>
    </div>
  );
}
