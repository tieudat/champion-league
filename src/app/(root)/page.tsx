"use client"

import { useTheme } from "next-themes";

export default function Home() {
  const { setTheme } = useTheme();
  return (
    <div className="flex flex-col">
      Đây là main
    </div>
  );
}
