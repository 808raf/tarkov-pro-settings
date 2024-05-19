import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SettingsCard from "./settings-card";
import { ReactNode } from "react";

const Mouse = ({ title, icon }: { title: string; icon: ReactNode }) => {
  return (
    <section className="container mt-10 max-w-7xl mb-14">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-3">
              {icon}
              <h4 className="text-3xl bg-gradient-to-t from-sky-400 to-sky-900 bg-clip-text text-transparent">
                {title}
              </h4>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid settings grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 overflow-hidden">
          <SettingsCard title="Mouse" description="Description 1" />
          <SettingsCard title="DPI" description="Description 1" />
          <SettingsCard title="Mouse Sensitivity" description="Description 1" />
          <SettingsCard
            title="Mouse Sensitivity ADS"
            description="Description 1"
          />
        </CardContent>
      </Card>
    </section>
  );
};
export default Mouse;
