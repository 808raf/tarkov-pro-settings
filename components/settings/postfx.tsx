import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SettingsCard from "./settings-card";
import { ReactNode } from "react";

const PostFx = ({ title, icon }: { title: string; icon: ReactNode }) => {
  return (
    <section className="container mt-10 max-w-7xl mb-14">
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex items-center gap-3">
              {icon} <h4 className="text-3xl">{title}</h4>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="grid settings grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 overflow-hidden">
          <SettingsCard title="Setting 1" description="Description 1" />
        </CardContent>
      </Card>
    </section>
  );
};
export default PostFx;
