"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    /* Homepage pending, so just redirect so dev experience is better. */
    router.push("/products");
  });
  return <div />;
}
