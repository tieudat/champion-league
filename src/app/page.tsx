"use client"

import Header from "./components/Header";
import { useTheme } from "next-themes";

import { Button } from "../components/ui/button";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <main className="flex flex-col">
      <Header />
      <Button onClick={() => setTheme("light")} variant="outline" size="icon">Light1</Button>
      <Button onClick={() => setTheme("dark")} variant="outline" size="icon">Dark</Button>

    </main>
  );
}
