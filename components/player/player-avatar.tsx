import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const PlayerAvatar = () => {
  return (
    <Avatar className="flex self-center size-auto">
      <AvatarImage src="https://static-cdn.jtvnw.net/jtv_user_pictures/cb6debd5-7de4-4709-b5c8-4bd42fc3828d-profile_image-70x70.png" />
      <AvatarFallback>Twitch Avatar</AvatarFallback>
    </Avatar>
  );
};
export default PlayerAvatar;
