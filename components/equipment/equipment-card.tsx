import Link from "next/link";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const EquipmentCard = ({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string;
}) => {
  return (
    <div className="flex flex-col grid__item p-4 mb-4">
      <h6 className="font-bold">{title}</h6>
      <p className="text-md text-muted-foreground">{description}</p>
      <Link href={"/"}>
        <Skeleton className="w-[150px] h-[150px] rounded-sm animate-pulse" />
        {/* <Image height={70} width={70} src={img} alt=""></Image> */}
      </Link>
    </div>
  );
};
export default EquipmentCard;
