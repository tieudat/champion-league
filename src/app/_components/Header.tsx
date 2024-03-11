import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";
import NarBar from "./NavBar";

export default function Header() {
  return (
    <header className="border-c flex h-[80px] w-dvw flex-row items-center border-b border-b-[var(--bg-input)] bg-white">
      <div className="mx-auto my-0 flex min-h-[40px] items-center lg:w-[95%]">
        <Link href="/">
          <Logo />
        </Link>
        <Search />
        <NarBar />
      </div>
    </header>
  );
}
