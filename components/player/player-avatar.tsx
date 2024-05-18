import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SkeletonCardAvatar } from "../skeletons/skeleton-card-avatar";

interface PlayerAvatarProps {
  avatar: string;
  alt: string;
}

const PlayerAvatar: React.FC<PlayerAvatarProps> = ({ avatar, alt }) => {
  return (
    <Avatar className="flex self-center size-auto">
      <AvatarImage src={`${avatar}`} alt={alt} />
      <AvatarFallback>
        <SkeletonCardAvatar />
      </AvatarFallback>
    </Avatar>
  );
};
export default PlayerAvatar;
