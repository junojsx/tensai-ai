"use client";

import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      {" "}
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center mb-2 pl-2">
          <div className="relative mr-2">
            <Image width="100" height="100" alt="logo" src="/logo.png" />
          </div>
          <h2 className="text-2xl font-bold">Tensai</h2>
        </Link>

        <Link
          href="/dashboard"
          className="block py-2 px-4 rounded hover:bg-gray-700"
        >
          Dashboard
        </Link>
        <Link
          href="/dashboard/profile"
          className="block py-2 px-4 rounded hover:bg-gray-700"
        >
          Profile
        </Link>
        <Link
          href="/dashboard/settings"
          className="block py-2 px-4 rounded hover:bg-gray-700"
        >
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
