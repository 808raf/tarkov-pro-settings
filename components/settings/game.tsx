import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SettingsCard from "./settings-card";
import { ReactNode } from "react";

interface GameProps {
  title: string;
  icon: ReactNode;
  gameSettings: {
    [key: string]: string | number | boolean;
  };
}

const Game = ({ title, icon, gameSettings }: GameProps) => {
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
            description={`${gameSettings.Language}`}
          />
          <SettingsCard
            title="Main Menu Background"
            description={`${gameSettings.EnvironmentUiType}`}
          />
          <SettingsCard
            title="Quick Slots"
            description={`${gameSettings.QuickSlotsVisibility}`}
          />
          <SettingsCard
            title="Stamina and Stance"
            description={`${gameSettings.StaminaVisibility}`}
          />
          <SettingsCard
            title="Health Condition"
            description={`${gameSettings.HealthVisibility}`}
          />
          <SettingsCard
            title="Health Color Scheme"
            description={`${gameSettings.HealthColor}`}
          />
          <SettingsCard
            title="Highlight Available Operations"
            description={`${gameSettings.HighlightScope}`}
          />
          <SettingsCard
            title="Double Click Item Quick Use"
            description={`${gameSettings.ItemQuickUseMode}`}
          />
          <SettingsCard
            title="Vaulting Over Medium Obstacles"
            description={`${gameSettings.AutoVaultingMode}`}
          />
          <SettingsCard
            title="Automatic Ram Cleaner"
            description={`${gameSettings.AutoEmptyWorkingSet}`}
          />
          <SettingsCard
            title="Only Use Physical Cores"
            description={`${gameSettings.SetAffinityToLogicalCores}`}
          />
          <SettingsCard
            title="FOV"
            description={`${gameSettings.FieldOfView}`}
          />
          <SettingsCard
            title="Head Bobbing"
            description={`${gameSettings.HeadBobbing}`}
          />
          <SettingsCard
            title="Malfunction Notifications"
            description={`${gameSettings.MalfunctionVisability}`}
          />
          <SettingsCard
            title="Preload Hideout"
            description={`${gameSettings.EnableHideoutPreload}`}
          />
          <SettingsCard
            title="Block Group Invites"
            description={`${gameSettings.BlockGroupInvites}`}
          />
          <SettingsCard
            title="Streamer Mode"
            description={`${gameSettings.StreamerModeEnabled}`}
          />
          <SettingsCard
            title="Trading Intermediate Screen"
            description={`${gameSettings.TradingIntermediateScreen}`}
          />
          <SettingsCard title="" description="" />
          <SettingsCard title="" description="" />
        </CardContent>
      </Card>
    </section>
  );
};
export default Game;
