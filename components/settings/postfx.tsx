import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SettingsCard from "./settings-card";
import { ReactNode } from "react";

const PostFx = ({ title, icon }: { title: string; icon: ReactNode }) => {
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
          <SettingsCard title="Enable PostFx" description="Description 1" />
          <SettingsCard title="Brightness" description="Description 1" />
          <SettingsCard title="Saturation" description="Description 1" />
          <SettingsCard title="Clarity" description="Description 1" />
          <SettingsCard title="Colorfulness" description="Description 1" />
          <SettingsCard title="Luma Sharpen" description="Description 1" />
          <SettingsCard title="Adaptive Sharpen" description="Description 1" />
          <SettingsCard title="Color Grading" description="Description 1" />
          <SettingsCard
            title="Color Grading Intensity"
            description="Description 1"
          />
          <SettingsCard title="Colorblind Mode" description="Description 1" />
          <SettingsCard
            title="Colorblind Mode Intensity"
            description="Description 1"
          />
          <SettingsCard title="" description="" />
        </CardContent>
      </Card>
    </section>
  );
};
export default PostFx;
