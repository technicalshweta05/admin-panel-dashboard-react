import { NavLink } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function SidebarDropdown({
  icon,
  title,
  childrenLinks,
  open,
  onToggle,
}) {
  return (
    <div>

      {/* Parent Menu */}

      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center px-6 py-4 hover:bg-gray-100 transition"
      >
        <div className="flex items-center gap-4">
          {icon}
          <span>{title}</span>
        </div>

        {open ? (
          <FaChevronUp size={12} />
        ) : (
          <FaChevronDown size={12} />
        )}
      </button>

      {/* Child Menu */}

      {open && (
        <div className="bg-gray-50">

          {childrenLinks.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block pl-16 py-3 transition ${
                  isActive
                    ? "text-blue-600 font-semibold bg-blue-50"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {item.name}
            </NavLink>

          ))}

        </div>
      )}

    </div>
  );
}