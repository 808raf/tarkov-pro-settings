const SettingsCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col grid__item p-4 mb-4">
      <h6 className="font-bold">{title}</h6>
      <p className="text-sm">{description}</p>
    </div>
  );
};
export default SettingsCard;
