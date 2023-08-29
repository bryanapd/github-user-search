"use client";
import React from "react";

import { User } from "../../../types";
import { useUserContext } from "../_context/UserContext";

const getUser = async (username: string) => {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

export const SearchBar = () => {
  // const [data, setData] = React.useState<User | null>(null);
  const { setUser } = useUserContext();
  const [searchInput, setSearchInput] = React.useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = async (input: string) => {
    const data = await getUser(input);
    setUser(data);
  };

  return (
    <div className="bg-[#1E2A47] w-full rounded-lg flex gap-4 p-4">
      <input
        className="bg-inherit text-white text-md w-full p-2"
        placeholder="Search github username..."
        value={searchInput}
        onChange={handleSearch}
      />
      <button
        className="bg-blue-600 text-white text-sm rounded-md px-3"
        onClick={() => handleSubmit(searchInput)}
      >
        Search
      </button>
    </div>
  );
};
