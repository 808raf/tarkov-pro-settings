import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PlayerAvatar from "./player-avatar";
import { Twitch } from "lucide-react";

const PlayerCard = () => {
  return (
    <Card className="flex flex-col h-64 w-full justify-center items-center hover:cursor-pointer hover:bg-card-back">
      <CardHeader>
        <PlayerAvatar />
        <CardTitle className="self-center">Tigz</CardTitle>
        <CardDescription>143K followers</CardDescription>
      </CardHeader>
    </Card>
  );
};
export default PlayerCard;
