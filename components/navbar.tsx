"use client";

const Navbar = () => {
  return (
    <ul className="flex justify-between border-b-2 h-14 items-center pl-6 pr-6">
      <div className="flex gap-6">
        <li>TarkovProSettings</li>

        <div className="flex gap-6 pl-6">
          <li>Players</li>
          <li>Blog</li>
        </div>
      </div>

      <div className="flex gap-6">
        <li>Log In</li>
        <li>Sign Up</li>
      </div>
    </ul>
  );
};

export default Navbar;
