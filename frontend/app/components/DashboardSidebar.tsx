"use client";
import Link from "next/link";
import { NAVIGATION_MENU } from "@/data/featureData";
import { usePathname, useRouter } from "next/navigation";
import { Briefcase, LogOut, ArrowLeftToLine, ArrowRightToLine } from "lucide-react";
import { useState } from "react";
import { span } from "framer-motion/client";

export default function DashboardSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [largeScreenCollapse, setLargeScreenCollapse] = useState<boolean>(false);

  const handleLogout = () => {
    // logout logic
    router.push("/login");
  };

  return (
    <aside
      className={`${largeScreenCollapse ? "w-16" : "w-64"} min-h-screen bg-gray-50 border-r border-gray-200 flex flex-col transition-all duration-300`}
    >
      <div className="h-18 px-4 border-b border-gray-200 flex items-center justify-between">
        {!largeScreenCollapse && (
          <Link href={"/"} className="flex items-center gap-x-3">
            <span className="h-8 w-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-white" />
            </span>
            <h6 className="text-gray-900 font-bold text-xl">JobPortal</h6>
          </Link>
        )}

        <button
          onClick={() => setLargeScreenCollapse((prev) => !prev)}
          className="h-8 w-8 border border-blue-200 rounded-lg flex items-center justify-center"
        >
          {largeScreenCollapse ? (
            <ArrowRightToLine className="h-4 w-4 text-blue-500" />
          ) : (
            <ArrowLeftToLine className="h-4 w-4 text-blue-500" />
          )}
        </button>
      </div>

      <nav className="flex-1 p-2 flex flex-col gap-1">
        {NAVIGATION_MENU.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
              pathname === item.href
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <item.icon size={18} className="shrink-0" />
            {!largeScreenCollapse && (
              <span className="whitespace-nowrap overflow-hidden font-medium text-sm">
                {item.name}
              </span>
            )}
          </Link>
        ))}
      </nav>

      <div className="p-2 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-500 hover:bg-red-50 w-full transition-colors"
        >
          <LogOut size={18} />
          {!largeScreenCollapse && (
            <span className="whitespace-nowrap overflow-hidden font-medium text-sm">
              Logout
            </span>
          )}
        </button>
      </div>
    </aside>
  );
}
