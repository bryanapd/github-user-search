"use client";
import Image from "next/image";
import { useUserContext } from "../_context/UserContext";

export const UserDetails = () => {
  const { user } = useUserContext();

  console.log("user here", user);
  return (
    <main className="bg-[#1E2A47] rounded-lg text-white p-8 mt-5 pb-20">
      <div className="flex flex-row items-start gap-10">
        {/* image */}
        <div className="rounded-full overflow-hidden min-w-[200px] h-[200px]">
          <Image
            src={user?.avatar_url || "/ryujin.jpeg"}
            alt="ryujin"
            width={200}
            height={200}
            objectFit="cover"
          />
        </div>
        {/* user details */}
        <div className="w-full">
          <div className="flex flex-row items-start justify-between mb-3">
            <h1 className="text-2xl font-bold">
              {user?.login || "Shin Ryujin"}
            </h1>
            <p>{user?.created_at.toString() || "Joined 10 June 2023"}</p>
          </div>
          <p className="text-blue-600 mb-3">{user?.login || '@itzy.us'}</p>
          <p>{user?.bio || "This profile has no bio"}</p>

          <div className="bg-[#141D2F] rounded-2xl flex flex-row items-center justify-around p-6 mt-10">
            {/* profile stats */}
            <div className="text-center">
              <h1 className="font-semibold">Repos</h1>
              <p>{user?.public_repos || 4}</p>
            </div>
            <div className="text-center">
              <h1 className="font-semibold">Followers</h1>
              <p>{user?.followers || 0}</p>
            </div>
            <div className="text-center">
              <h1 className="font-semibold">Following</h1>
              <p>{user?.following || 0}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
