import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const PlayerCard = () => {
  return (
    <Card className="flex flex-col items-center h-64 w-60 justify-around mx-auto hover:cursor-pointer hover:bg-card-back">
      <CardHeader>
        <CardTitle>Player x</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};
export default PlayerCard;
