import React from "react";

export const SearchBar = () => (
  <div className="bg-[#1E2A47] w-full rounded-lg flex gap-4 p-4">
    <input
      className="bg-inherit text-white text-md w-full p-2"
      placeholder="Search github username..."
    />
    <button className="bg-blue-600 text-white text-sm rounded-md px-3">
      Search
    </button>
  </div>
);
