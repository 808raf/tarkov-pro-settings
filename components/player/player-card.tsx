import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PlayerAvatar from "./player-avatar";
import Link from "next/link";

interface PlayerCardProps {
  username: string;
  avatar: string;
  followers: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  username,
  avatar,
  followers,
}) => {
  return (
    <Link href={`/players/${username}`}>
      <Card className="flex flex-col shadow-lg h-64 w-full justify-center items-center hover:cursor-pointer hover:bg-card-back hover:dark:text-sky-500 hover:text-sky-600 hover:dark:bg-slate-800">
        <CardHeader>
          <PlayerAvatar avatar={avatar} alt={`${username} twitch icon`} />
          <CardTitle className="self-center">{username}</CardTitle>
          <CardDescription className="self-center">{followers}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
};
export default PlayerCard;
