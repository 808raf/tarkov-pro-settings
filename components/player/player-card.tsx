import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PlayerAvatar from "./player-avatar";

const PlayerCard = () => {
  return (
    <Card className="flex flex-col shadow-lg h-64 w-full justify-center items-center hover:cursor-pointer hover:bg-card-back hover:dark:text-sky-500 hover:text-sky-700 hover:dark:bg-slate-900">
      <CardHeader>
        <PlayerAvatar />
        <CardTitle className="self-center">Tigz</CardTitle>
        <CardDescription>143K followers</CardDescription>
      </CardHeader>
    </Card>
  );
};
export default PlayerCard;
