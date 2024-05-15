"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DarkToggle } from "./dark-toggle";

const Navbar = () => {
  return (
    <ul className="flex justify-between shadow-sm h-14 items-center pl-6 pr-6 font-bold text-sm bg-white dark:bg-slate-950">
      <div className="flex shrink-0 items-center">
        <li className="hidden sm:block">
          <Link className="hover:bg-transparent" href={"/"}>
            <span className="text-2xl p-1 bg-gradient-to-t from-sky-900 to-sky-600 bg-clip-text text-transparent">
              TarkovProSettings
            </span>
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
              className="hover:bg-sky-500 hover:text-white font-bold text-xs"
              variant={"outline"}
            >
              Log In
            </Button>
          </Link>
        </li>
        <li>
          <Link href={"/signup"} className="hover:bg-transparent p-0">
            <Button
              variant={"outline"}
              className="hover:bg-sky-500 hover:text-white font-bold text-xs"
              // className="bg-sky-700 hover:bg-sky-500 dark:hover:bg-sky-500 shadow-md dark:text-white dark:bg-slate-900"
            >
              Sign Up
            </Button>
          </Link>
        </li>
        <DarkToggle />
      </div>
    </ul>
  );
};

export default Navbar;
