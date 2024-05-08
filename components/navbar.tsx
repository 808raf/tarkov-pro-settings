"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

const Navbar = () => {
  return (
    <ul className="flex justify-between border-b-2 h-14 items-center pl-6 pr-6 font-semibold">
      <div className="flex gap-6">
        <li>
          <Link href={"/"}>
            <Image src={logo} alt="logo" height={24} />
          </Link>
        </li>

        <div className="flex gap-6 pl-6">
          <li>Players</li>
          <li>Blog</li>
        </div>
      </div>

      <div className="flex gap-6">
        <li>Log In</li>
        <li>Sign Up</li>
      </div>
    </ul>
  );
};

export default Navbar;
