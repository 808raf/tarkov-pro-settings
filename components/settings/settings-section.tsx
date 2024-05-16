import { Gamepad2 } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SettingsCard from "./settings-card";

const SettingsSection = () => {
  return (
    <section className="container mt-10 max-w-7xl mb-14">
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-3">
              <Gamepad2 size={48} /> <h4 className="text-3xl">Game</h4>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid settings grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 overflow-hidden">
          <SettingsCard />
          <SettingsCard />
          <SettingsCard />
          <SettingsCard />
          <SettingsCard />
          <SettingsCard />
          <SettingsCard />
          <SettingsCard />
          <SettingsCard />
          <SettingsCard />
          <SettingsCard />
          <SettingsCard />
          <SettingsCard />
          <SettingsCard />
        </CardContent>
      </Card>
    </section>
  );
};
export default SettingsSection;