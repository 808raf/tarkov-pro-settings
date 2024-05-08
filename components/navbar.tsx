"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

const Navbar = () => {
  return (
    <ul className="flex justify-between border-b-2 h-14 items-center pl-6 pr-6 font-semibold font">
      <div className="flex gap-3">
        <li>
          <Link className="hover:bg-transparent" href={"/"}>
            <Image src={logo} alt="logo" height={24} />
          </Link>
        </li>

        <div className="flex ">
          <li>
            <Link href={"/players"}>Players</Link>
          </li>
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
        </div>
      </div>

      <div className="flex">
        <li>
          <Link href={"/login"}>Log In</Link>
        </li>
        <li>
          <Link href={"/signup"}>Sign Up</Link>
        </li>
      </div>
    </ul>
  );
};

export default Navbar;
