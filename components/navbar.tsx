"use client";

const Navbar = () => {
  return (
    <ul className="flex justify-around border-b-2 h-14 items-center">
      <div className="flex gap-6">
        <li>TarkovProSettings</li>

        <div className="flex gap-6">
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
