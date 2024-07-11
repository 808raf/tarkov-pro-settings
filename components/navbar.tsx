"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DarkToggle } from "./dark-toggle";

const Navbar = () => {
  return (
    <nav className="shadow-sm h-14 bg-white dark:bg-slate-950">
      <ul className="flex justify-between items-center h-full pl-6 pr-6 font-bold text-sm">
        <li className="flex items-center gap-3">
          <Link className="hidden sm:block hover:bg-transparent" href="/">
            <span className="text-2xl p-1 bg-gradient-to-t from-sky-900 to-sky-600 bg-clip-text text-transparent">
              TarkovProSettings
            </span>
          </Link>
          <Link
            className="hover:bg-sky-500 hover:text-white p-3 rounded-sm block"
            href="/players"
          >
            Players
          </Link>
          {/* Removed blog link, as thats a planned feature */}
          {/* <Link
            className="hover:bg-sky-500 hover:text-white p-3 rounded-sm block"
            href="/blog"
          >
            Blog
          </Link> */}
        </li>
        <li className="flex items-center space-x-3">
          {/* Removed log in and sign up, as thats a planned feature */}
          {/* <Link
            href="/login"
            className="hover:bg-transparent hover:text-black p-0"
          >
            <Button
              className="hover:bg-sky-500 hover:text-white font-bold text-xs"
              variant="outline"
            >
              Log In
            </Button>
          </Link>
          <Link href="/signup" className="hover:bg-transparent p-0">
            <Button
              variant="outline"
              className="hover:bg-sky-500 hover:text-white font-bold text-xs"
            >
              Sign Up
            </Button>
          </Link> */}
          <DarkToggle />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
