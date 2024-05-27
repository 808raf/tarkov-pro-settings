import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EquipmentCard from "@/components/equipment/equipment-card";
import { ReactNode } from "react";

const Equipment = ({ title, icon }: { title: string; icon: ReactNode }) => {
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
          <EquipmentCard
            title="Graphics Card"
            description="Description 1"
            img=""
          />
          <EquipmentCard title="CPU" description="Description 1" img="" />
          <EquipmentCard title="Mouse" description="Description 1" img="" />
          <EquipmentCard title="Keyboard" description="Description 1" img="" />
          <EquipmentCard title="Headset" description="Description 1" img="" />
          <EquipmentCard title="Mic" description="Description 1" img="" />
          <EquipmentCard title="" description="" img="" />
          <EquipmentCard title="" description="" img="" />
        </CardContent>
      </Card>
    </section>
  );
};
export default Equipment;
