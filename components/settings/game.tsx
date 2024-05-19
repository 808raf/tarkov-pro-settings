import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SettingsCard from "./settings-card";
import { ReactNode } from "react";

const Game = ({ title, icon }: { title: string; icon: ReactNode }) => {
  return (
    <section className="container mt-10 max-w-7xl mb-14">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-3">
              {icon}
              <h4 className="text-3xl bg-gradient-to-t from-sky-400 to-sky-900 bg-clip-text text-transparent pb-1">
                {title}
              </h4>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid settings grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 overflow-hidden">
          <SettingsCard
            title="Interface Language"
            description="Description 1"
          />
          <SettingsCard
            title="Main Menu Background"
            description="Description 1"
          />
          <SettingsCard title="Quick Slots" description="Description 1" />
          <SettingsCard
            title="Stamina and Stance"
            description="Description 1"
          />
          <SettingsCard title="Health Condition" description="Description 1" />
          <SettingsCard
            title="Health Color Scheme"
            description="Description 1"
          />
          <SettingsCard
            title="Highlight Available Operations"
            description="Description 1"
          />
          <SettingsCard
            title="Double Click Item Quick Use"
            description="Description 1"
          />
          <SettingsCard
            title="Vaulting Over Medium Obstacles"
            description="Description 1"
          />
          <SettingsCard
            title="Automatic Ram Cleaner"
            description="Description 1"
          />
          <SettingsCard
            title="Only Use Physical Cores"
            description="Description 1"
          />
          <SettingsCard title="FOV" description="Description 1" />
          <SettingsCard title="Head Bobbing" description="Description 1" />
          <SettingsCard
            title="Malfunction Notifications"
            description="Description 1"
          />
          <SettingsCard title="Preload Hideout" description="Description 1" />
          <SettingsCard
            title="Block Group Invites"
            description="Description 1"
          />
          <SettingsCard title="Streamer Mode" description="Description 1" />
          <SettingsCard
            title="Trading Intermediate Screen"
            description="Description 1"
          />
          <SettingsCard title="" description="" />
          <SettingsCard title="" description="" />
        </CardContent>
      </Card>
    </section>
  );
};
export default Game;
