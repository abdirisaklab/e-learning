import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="w-full h-16 flex-center justify-between bg-white shadow-sm px-3 py-2">
      <div className="flex-center gap-3">
        <span className="font-bold text-2xl font-sans text-violet-700">
          E-Learning
        </span>
        <span>Courses</span>
        <span>Programs</span>
      </div>

      <div className="flex items-center justify-end gap-3 basis-[40%] h-full">
        <p>courses for business</p>
        <div className="flex-center border-2 h-full basis-52">Account</div>
      </div>
    </div>
  );
};

export default Navbar;
