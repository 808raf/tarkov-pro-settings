"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <ul className="flex justify-between border-b-2 h-14 items-center pl-6 pr-6 font-bold text-sm">
      <div className="flex shrink-0 items-center">
        <li className="hidden sm:block">
          <Link className="hover:bg-transparent" href={"/"}>
            <Image src={logo} alt="logo" height={24} />
          </Link>
        </li>

        <div className="flex pl-6">
          <li>
            <Link
              className="hover:bg-sky-500 hover:text-white p-3 rounded-sm block"
              href={"/players"}
            >
              Players
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-sky-500 hover:text-white p-3 rounded-sm block"
              href={"/blog"}
            >
              Blog
            </Link>
          </li>
        </div>
      </div>

      <div className="flex space-x-3">
        <li>
          <Link
            href={"/login"}
            className="hover:bg-transparent hover:text-black p-0"
          >
            <Button
              className="hover:bg-sky-500 hover:text-white"
              variant={"outline"}
            >
              Log In
            </Button>
          </Link>
        </li>
        <li>
          <Link href={"/signup"} className="hover:bg-transparent p-0">
            <Button className="bg-sky-700 hover:bg-sky-500 shadow-md">
              Sign Up
            </Button>
          </Link>
        </li>
      </div>
    </ul>
  );
};

export default Navbar;
