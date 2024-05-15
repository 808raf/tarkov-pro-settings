import { Gamepad2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SettingsCard = () => {
  return (
    <section className="container mt-10 max-w-7xl mb-14">
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl">
            <div className="flex items-center gap-3">
              <Gamepad2 size={48} /> Game
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-4">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </CardContent>
      </Card>
    </section>
  );
};
export default SettingsCard;
