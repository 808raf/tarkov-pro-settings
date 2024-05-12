import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { Youtube, Twitch, Twitter } from "lucide-react";
import PlayerAvatar from "./player-avatar";

const PlayerSection = () => {
  return (
    <section className="container mt-10 max-w-7xl mb-14">
      <Card className="min-w-[300px] min-h-96 shadow-lg hover:bg-card-back flex flex-col sm:flex-row items-center justify-center">
        <CardHeader>
          <PlayerAvatar />
          <CardTitle className="self-center">Tigz</CardTitle>
          <CardDescription className="self-center">
            Last Updated Date
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex flex-col">
          <ul className="flex gap-3 self-start">
            <li>
              <Link href={"/"}>
                <Twitch color="purple" size={64} />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <Twitter color="blue" size={64} />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <Youtube color="red" size={64} />
              </Link>
            </li>
          </ul>
        </CardFooter>
      </Card>
    </section>
  );
};
export default PlayerSection;
