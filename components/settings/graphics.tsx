import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SettingsCard from "./settings-card";
import { ReactNode } from "react";

const Graphics = ({ title, icon }: { title: string; icon: ReactNode }) => {
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
          <SettingsCard title="Screen Resolution" description="Description" />
          <SettingsCard title="Screen Mode" description="Description" />
          <SettingsCard title="Aspect Ratio" description="Description" />
          <SettingsCard title="Monitor" description="Description" />
          <SettingsCard title="Texture Quality" description="Description" />
          <SettingsCard title="Shadows Quality" description="Description" />
          <SettingsCard title="Object LOD Quality" description="Description" />
          <SettingsCard title="Overall Visibility" description="Description" />
          <SettingsCard title="Anti-aliasing" description="Description" />
          <SettingsCard title="Resampling" description="Description" />
          <SettingsCard title="NVIDIA DLSS" description="Description" />
          <SettingsCard title="AMD FSR 1.0" description="Description" />
          <SettingsCard title="AMD FSR 2.2" description="Description" />
          <SettingsCard title="HBAO" description="Description" />
          <SettingsCard title="SSR" description="Description" />
          <SettingsCard
            title="Anisotropic Filtering"
            description="Description"
          />
          <SettingsCard
            title="NVIDIA Reflex Low Latency"
            description="Description"
          />
          <SettingsCard title="Sharpness" description="Description" />
          <SettingsCard title="Lobby FPS Limit" description="Description" />
          <SettingsCard title="Game FPS Limit" description="Description" />
        </CardContent>
      </Card>
    </section>
  );
};
export default Graphics;
