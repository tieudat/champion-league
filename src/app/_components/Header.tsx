import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";
import NarBar from "./NavBar";

export default function Header() {
  return (
    <div className="flex flex-row items-center h-[80px] bg-white w-dvw border-b border-c">
      <div className="flex min-h-[40px] items-center mx-auto my-0 lg:w-[95%]">
        <Link href="/">
          <Logo />
        </Link>
        <Search />
        <NarBar />
      </div>
    </div>
  );
}
