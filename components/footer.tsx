import { Coffee, Github, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center gap-6 shadow-sm min-h-14 bg-white dark:bg-slate-950 p-6">
      <Link href={"https://www.youtube.com/@TheTimmyHustle"}>
        <Youtube size={32} />
      </Link>
      <Link href={"https://github.com/808raf"}>
        <Github size={32} />
      </Link>
      <Link href={"https://buymeacoffee.com/timmyhustle"}>
        <Coffee size={32} />
      </Link>
    </footer>
  );
};
export default Footer;
