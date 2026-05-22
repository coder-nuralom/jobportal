import React from "react";
import { Briefcase } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const isAuthenticated = false;
  const user = { fulName: "Alex", role: "employer" };
  return (
    <header className="py-5 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="flex space-x-3">
            <span className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center rounded-md">
              <Briefcase className="w-5 h-5 text-white" />
            </span>
            <span className="text-xl font-bold text-gray-900">JobPortal</span>
          </Link>

          <nav className="hidden md:flex items-center gap-x-8">
            <Link
              href={"/find-jobs"}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              Find Jobs
            </Link>
            <Link
              href={"/employer-dashboard"}
              className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
            >
              For Employers
            </Link>
          </nav>

          <div>
            {isAuthenticated ? (
              <div className="flex items-center gap-x-3">
                <span className="text-gray-700">Welcome, {user.fulName}</span>
                <Link
                  href="/dashboard"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 to-purple-700 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Dashboard
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-x-3">
                <Link href={"/login"} className="text-gray-900 font-medium">
                  Login
                </Link>
                <Link
                  href={"/signup"}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 to-purple-700 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
