import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SettingsCard from "./settings-card";
import { ReactNode } from "react";

interface GraphicsProps {
  title: string;
  icon: ReactNode;
  graphicsSettings: {
    [key: string]: string | number | boolean;
  };
}

const Graphics = ({ title, icon, graphicsSettings }: GraphicsProps) => {
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
            title="Screen Resolution"
            description={`${graphicsSettings.SSR}`}
          />
          <SettingsCard
            title="Screen Mode"
            description={`${graphicsSettings.SSR}`}
          />
          <SettingsCard
            title="Aspect Ratio"
            description={`${graphicsSettings.SSR}`}
          />
          <SettingsCard
            title="Monitor"
            description={`${graphicsSettings.SSR}`}
          />
          <SettingsCard
            title="Texture Quality"
            description={`${graphicsSettings.TextureQuality}`}
          />
          <SettingsCard
            title="Shadows Quality"
            description={`${graphicsSettings.ShadowsQuality}`}
          />
          <SettingsCard
            title="Object LOD Quality"
            description={`${graphicsSettings.LodBias}`}
          />
          <SettingsCard
            title="Overall Visibility"
            description={`${graphicsSettings.OverallVisibility}`}
          />
          <SettingsCard
            title="Anti-aliasing"
            description={`${graphicsSettings.AntiAliasing}`}
          />
          <SettingsCard
            title="Resampling"
            description={`${graphicsSettings.SuperSampling}`}
          />
          <SettingsCard
            title="NVIDIA DLSS"
            description={`${graphicsSettings.DLSSMode}`}
          />
          <SettingsCard
            title="AMD FSR 1.0"
            description={`${graphicsSettings.FSRMode}`}
          />
          <SettingsCard
            title="AMD FSR 2.2"
            description={`${graphicsSettings.FSR2Mode}`}
          />
          <SettingsCard title="HBAO" description={`${graphicsSettings.SSR}`} />
          <SettingsCard title="SSR" description={`${graphicsSettings.SSR}`} />
          <SettingsCard
            title="Anisotropic Filtering"
            description={`${graphicsSettings.AnisotropicFiltering}`}
          />
          <SettingsCard
            title="NVIDIA Reflex Low Latency"
            description={`${graphicsSettings.NVidiaReflex}`}
          />
          <SettingsCard
            title="Sharpness"
            description={`${graphicsSettings.Sharpen}`}
          />
          <SettingsCard
            title="Lobby FPS Limit"
            description={`${graphicsSettings.LobbyFramerate}`}
          />
          <SettingsCard
            title="Game FPS Limit"
            description={`${graphicsSettings.GameFramerate}`}
          />
        </CardContent>
      </Card>
    </section>
  );
};
export default Graphics;
