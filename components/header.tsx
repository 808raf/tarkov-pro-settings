const Header = ({ title }: { title: string }) => {
  return (
    <div className="container mt-10 max-w-7xl mb-14">
      <h1 className="text-4xl font-bold mb-14 bg-gradient-to-l from-sky-900 to-sky-500 bg-clip-text text-transparent pb-1">
        {title}
      </h1>
    </div>
  );
};
export default Header;
