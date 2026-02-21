import { NavLink } from "react-router-dom";
import {
  HomeIcon,
  CreditCardIcon,
  BriefcaseIcon,
  SunIcon,
  MoonIcon,
  XMarkIcon,
  Bars3Icon
} from "@heroicons/react/24/outline";
import { useState } from "react";

function Sidebar({
  darkMode,
  setDarkMode,
  isOpen,
  setIsOpen
}) {
  const [collapsed, setCollapsed] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const base =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium";

  return (
    <>
      {/* 🔥 Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed md:sticky top-0 left-0
          h-screen
          ${collapsed ? "w-20" : "w-64"}
          z-50
          transform transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-700"}
          border-r border-gray-200 dark:border-gray-800
          shadow-lg
          flex flex-col
        `}
      >
        {/* ===== HEADER ===== */}
        <div className="px-4 py-5 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
          {!collapsed && (
            <div>
              <h1 className="text-lg font-bold text-indigo-600">
                JSTUDIO
              </h1>
              <p className="text-xs opacity-60">
                Online Coders
              </p>
            </div>
          )}

          <div className="flex gap-2 items-center">
            {/* Desktop Collapse */}
            <Bars3Icon
              className="w-5 cursor-pointer hidden md:block hover:scale-110 transition"
              onClick={() => setCollapsed(!collapsed)}
            />

            {/* Mobile Close */}
            <XMarkIcon
              className="w-6 md:hidden cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>

        {/* ===== NAVIGATION ===== */}
        <div className="flex-1 overflow-y-auto px-3 py-6 space-y-2">

          <NavLink
            to="/dashboard"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${base} ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`
            }
          >
            <HomeIcon className="w-5 min-w-[20px]" />
            {!collapsed && "Dashboard"}
          </NavLink>

          <NavLink
            to="/upgrade"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${base} ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`
            }
          >
            <CreditCardIcon className="w-5 min-w-[20px]" />
            {!collapsed && "Upgrade"}
          </NavLink>

          <NavLink
            to="/services"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `${base} ${
                isActive
                  ? "bg-indigo-600 text-white shadow-md"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`
            }
          >
            <BriefcaseIcon className="w-5 min-w-[20px]" />
            {!collapsed && "Services"}
          </NavLink>
        </div>

        {/* ===== FOOTER ===== */}
        <div className="px-4 py-5 border-t border-gray-200 dark:border-gray-800 space-y-4">

          {/* Dark Mode Toggle */}
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-2 cursor-pointer text-sm font-medium hover:opacity-80 transition"
          >
            {darkMode ? (
              <SunIcon className="w-5" />
            ) : (
              <MoonIcon className="w-5" />
            )}
            {!collapsed && "Dark Mode"}
          </div>

          {/* User Info */}
          {!collapsed && (
            <div className="text-xs opacity-70">
              <p className="font-semibold text-sm">
                {user?.name}
              </p>
              <p className="capitalize">
                {user?.plan} Plan
              </p>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}

export default Sidebar;