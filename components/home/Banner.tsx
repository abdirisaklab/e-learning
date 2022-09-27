import React, { useState } from "react";

const Banner: React.FC = () => {
  const [initial, setInitial] = useState<string>("");

  return (
    <div className="flex flex-col justify-center items-center h-[400px] bg-blue-900 text-white p-3">
      <h1 className="text-6xl font-bold basis-20">
        Start learning from the world`s best institutions
      </h1>
      <div>
        <input
          type="text"
          placeholder="Search our 300+ courses"
          className="w-[300px] h-[40px] mx-2 font-bold px-2 text-black"
        />
        <button className="bg-red-700 font-bold p-2">Search</button>
      </div>
    </div>
  );
};

export default Banner;
