import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PlayerAvatarProps {
  avatar: string;
}

const PlayerAvatar: React.FC<PlayerAvatarProps> = ({ avatar }) => {
  return (
    <Avatar className="flex self-center size-auto">
      <AvatarImage src={`${avatar}`} />
      <AvatarFallback>Twitch Avatar</AvatarFallback>
    </Avatar>
  );
};
export default PlayerAvatar;
