"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const styles = ["comedy", "drama", "romance", "adventure"];

export default function TypeButtons() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const type = searchParams.get("type") || "comedy";

  return (
    <div className="flex gap-3">
      {styles.map((s) => (
        <Button
          key={s}
          variant={type === s ? "default" : "outline"}
          onClick={() => router.push(`/ssr?type=${s}`)}>
          {s}
        </Button>
      ))}
    </div>
  );
}
