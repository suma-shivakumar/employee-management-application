import React from "react";

const NavBar = () => {
  return (
    <div className="bg-gray-800">
      {/* gray background, items-center -> text will be at center(vertical) */}
      <div className="h-16 flex items-center">
        {/* px-8 - padding some space and moves right side(x direction) */}
        <p className="text-white font-bold px-8">Employee Management System</p>
      </div>
    </div>
  );
};

export default NavBar;
