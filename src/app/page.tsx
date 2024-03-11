"use client"

import Header from "./_components/Header";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <main className="flex flex-col">
      <Header />
    </main>
  );
}
