import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7edf3] px-10 py-5 bg-[#add8e6]"> {/* Changed to light blue */}
      <div className="flex items-center gap-4 text-[#0e141b]">
        <div className="size-4">
          <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* SVG content */}
          </svg>
        </div>
        <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em]">
          MatchPlay
        </h2>
      </div>

      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <Link className="text-[#0e141b] text-sm font-medium leading-normal" to="/">
            Home
          </Link>
          <Link className="text-[#0e141b] text-sm font-medium leading-normal" to="/find-players">
            Find Players
          </Link>
          <Link className="text-[#0e141b] text-sm font-medium leading-normal" to="/find-courts">
            Find Courts
          </Link>
          <Link className="text-[#0e141b] text-sm font-medium leading-normal" to="/tournaments">
            Tournaments
          </Link>
          <Link className="text-[#0e141b] text-sm font-medium leading-normal" to="/login">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
