import { Leaf } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ use react-router-dom
import { cn } from "@/lib/utils";

export default function Logo({ className }) {
  return (
    <Link
      to="/"
      className={cn("flex items-center gap-2 text-xl font-bold font-headline", className)}
    >
      <div className="p-1.5 bg-primary rounded-md">
        <Leaf className="h-5 w-5 text-primary-foreground" />
      </div>
      EcoFinds
    </Link>
  );
}
