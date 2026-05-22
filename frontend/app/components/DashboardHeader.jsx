"use client";

import React, { useState } from "react";
import { Bell } from "lucide-react";
import Link from "next/link";

const DashboardHeader = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  return (
    <header className="h-18 px-6 border-b border-gray-200 flex items-center justify-between bg-white">
      <div>
        <p className="text-base font-medium text-gray-900">Welcome back</p>
        <p className="text-xs text-gray-500 ">Here's what's happening with your jobs today</p>
      </div>
      <div className="flex items-center gap-3">
        <button className="text-gray-500 hover:text-gray-700">
          <Bell size={20} />
        </button>
        <div
          onClick={() => setShowProfileMenu((prev) => !prev)}
          className="relative w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-600 cursor-pointer"
        >
          AC
          <div
            className={`absolute top-full right-0 bg-white rounded-xl shadow-lg border border-gray-100 py-2 mt-5 transition-all duration-300 ${showProfileMenu ? "opacity-100 -translate-y-4" : "opacity-0 pointer-events-none"}`}
          >
            <ul>
              <li className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">{"Nuralom Rana"}</p>
                <p className="text-xs text-gray-500">{"coder.nuralom@gmail.com"}</p>
              </li>

              <li className="border-b border-gray-100">
                <Link
                  href="profile"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  View Profile
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors capitalize"
                >
                  sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
