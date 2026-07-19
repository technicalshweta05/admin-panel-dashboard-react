import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaBuilding,
  FaLock,
} from "react-icons/fa";

export default function ProfileDropdown({
  open,
  setOpen,
  onLogout,
}) {
  const dropdownRef = useRef(null);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [setOpen]);

  if (!open) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-16 w-64 bg-white rounded-lg shadow-xl border overflow-hidden z-50"
    >
      {/* Profile */}
      <Link
        to="/profile"
        onClick={() => setOpen(false)}
        className="flex items-center gap-3 px-5 py-4 hover:bg-gray-100 transition"
      >
        <FaUserCircle className="text-gray-700 text-lg" />
        <span className="font-medium text-gray-700">
          Profile
        </span>
      </Link>

      {/* Company Profile */}
      <Link
        to="/company-profile"
        onClick={() => setOpen(false)}
        className="flex items-center gap-3 px-5 py-4 hover:bg-gray-100 transition"
      >
        <FaBuilding className="text-gray-700 text-lg" />
        <span className="font-medium text-gray-700">
          Company Profile
        </span>
      </Link>

      <hr />

      {/* Logout */}
      <button
        onClick={() => {
          setOpen(false);
          onLogout();
        }}
        className="w-full flex items-center gap-3 px-5 py-4 hover:bg-red-50 transition text-left"
      >
        <FaLock className="text-gray-700 text-lg" />
        <span className="font-medium text-gray-700">
          Logout
        </span>
      </button>
    </div>
  );
}