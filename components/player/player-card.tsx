import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PlayerAvatar from "./player-avatar";

const PlayerCard = ({ username, avatar, followers }) => {
  return (
    <Card className="flex flex-col shadow-lg h-64 w-full justify-center items-center hover:cursor-pointer hover:bg-card-back hover:dark:text-sky-500 hover:text-sky-600 hover:dark:bg-slate-800">
      <CardHeader>
        <PlayerAvatar avatar={avatar} />
        <CardTitle className="self-center">{username}</CardTitle>
        <CardDescription className="self-center">{followers}</CardDescription>
      </CardHeader>
    </Card>
  );
};
export default PlayerCard;
