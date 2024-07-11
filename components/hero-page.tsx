import Image from "next/image";
import hero from "@/public/hero-solo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import HeroSection from "./hero-section";

const HeroPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center shadow-sm w-full h-screen">
      <div className="md:w-1/2">
        <div className="min-w-[300px] flex">
          <Image
            className="hidden sm:block sm:p-3 sm:pb-0"
            quality={100}
            priority={true}
            src={hero}
            alt="tarkov hero"
          />
        </div>
      </div>
      <>
        {/* Hero */}
        <div className="md:w-1/2 relative flex items-center lg:py-32 mx-auto overflow-hidden">
          <div className="relative z-10">
            <div className="container py-10 lg:py-16">
              <div className="max-w-2xl text-center mx-auto">
                {/* Title */}
                <div className="mt-5 max-w-2xl">
                  <h1 className="p-1 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl bg-gradient-to-l from-sky-900 to-sky-500 bg-clip-text text-transparent">
                    Elevate your gameplay
                  </h1>
                </div>
                {/* End Title */}
                <div className="mt-5 max-w-3xl">
                  <p className="text-xl text-muted-foreground">
                    Find all the in-game settings and equipment used by your
                    favorite Tarkov streamers. All in one place.
                  </p>
                </div>
                {/* Buttons */}
                <div className="mt-8 gap-3 flex justify-center">
                  <Link href="/players">
                    <Button size={"lg"}>Find players</Button>
                  </Link>
                  <Link href="#about">
                    <Button
                      size={"lg"}
                      variant={"outline"}
                      className="flex gap-1"
                    >
                      See how it works <IoMdArrowDropdownCircle />
                    </Button>
                  </Link>
                </div>
                {/* End Buttons */}
              </div>
            </div>
          </div>
        </div>
        {/* End Hero */}
      </>
    </div>
  );
};
export default HeroPage;
