import { Loader2 } from "lucide-react";

export function EmailLoading() {
  return (
    <div className="min-h-[600px] flex items-center justify-center">
      <Loader2 className="animate-spin" size={32}/>
    </div>
  );
}