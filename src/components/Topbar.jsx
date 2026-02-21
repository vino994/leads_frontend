import { useState, useContext } from "react";
import { BellIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Topbar({ setIsOpen, darkMode }) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");   // 🔥 go back to landing
  };

  return (
    <div
      className={`px-6 py-4 flex justify-between items-center shadow ${
        darkMode ? "bg-gray-800 text-white" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-4">
        <Bars3Icon
          className="w-6 cursor-pointer md:hidden"
          onClick={() => setIsOpen(true)}
        />
        <h2 className="font-semibold text-lg">
          Business Overview
        </h2>
      </div>

      <div className="flex items-center gap-6 relative">
        <BellIcon
          className="w-6 cursor-pointer"
          onClick={() => setOpen(!open)}
        />

        {open && (
          <div className="absolute right-0 top-10 bg-white shadow-lg rounded-xl p-4 w-60 text-sm">
            No new notifications
          </div>
        )}

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Topbar;