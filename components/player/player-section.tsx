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
import formatDate from "@/lib/dateUtils";

interface Player {
  twitch_username: string;
  twitch_avatar: string;
  updated_at: string;
  twitch_link: string;
  twitter_link: string;
  youtube_link: string;
}

interface PlayerSectionProps {
  players: Player[];
  params: {
    id: string;
  };
}

const PlayerSection: React.FC<PlayerSectionProps> = ({ players, params }) => {
  const player = players.find(
    (player) => params.id === player.twitch_username.toLowerCase()
  );

  return (
    <section className="container mt-10 max-w-7xl mb-14">
      <Card className="hover:dark:bg-slate-950 min-w-[300px] min-h-96 shadow-lg flex flex-col sm:flex-row items-center justify-center hover:dark:text-sky-500 hover:text-sky-700">
        <CardHeader>
          {player ? (
            <>
              <PlayerAvatar
                avatar={player.twitch_avatar}
                alt={`${player.twitch_username} twitch icon`}
              />
              <CardTitle className="self-center text-4xl">
                {player.twitch_username}
              </CardTitle>
              <CardDescription className="flex flex-col self-center text-xs">
                Updated {formatDate(player.updated_at)}
              </CardDescription>
            </>
          ) : (
            <CardTitle className="self-center text-4xl">
              Can&apos;t find player
            </CardTitle>
          )}
        </CardHeader>

        <CardFooter className="flex flex-col p-6">
          <ul className="flex gap-3 self-start">
            <li>
              <Link href={player?.twitch_link || "/"}>
                <Twitch color="purple" size={64} />
              </Link>
            </li>
            <li>
              <Link href={player?.twitter_link || "/"}>
                <Twitter color="blue" size={64} />
              </Link>
            </li>
            <li>
              <Link href={player?.youtube_link || "/"}>
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
