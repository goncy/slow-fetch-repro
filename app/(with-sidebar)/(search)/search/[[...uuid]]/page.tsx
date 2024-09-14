"use client";

import { useAppState } from "@/app/provider";

export default function Page() {
  const data = useAppState();

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
