const HeroSection = () => {
  return (
    <section className="bg-card shadow-sm mb-12 h-screen w-full" id="about">
      <div className="my-12 container flex items-center flex-col justify-center h-full">
        <p>1. Find your favorite streamers</p>
        <p>2. Find the settings you want to copy</p>
        <p>3. Click the copy button</p>
        <p>
          4. Navigate to C:\Users\%username%\AppData\Roaming\Battlestate
          Games\Escape from Tarkov\Settings
        </p>{" "}
        <p>5. Ctrl + a then Ctrl + v to paste settings</p>
        <p>6. Launch the game</p>
        <p> 7. Open settings and hit save at the bottom right</p>
      </div>
    </section>
  );
};
export default HeroSection;
