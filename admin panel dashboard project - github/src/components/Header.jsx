import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

import ProfileDropdown from "./ProfileDropdown";

export default function Header({ toggleSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [openProfile, setOpenProfile] = useState(false);

  const pageTitle = () => {
    if (location.pathname === "/dashboard") return "Dashboard";
    if (location.pathname === "/users/view") return "View User";

    if (location.pathname.includes("/enquiries"))
      return "Enquiries";

    if (location.pathname.includes("/colors"))
      return "Colors";

    if (location.pathname.includes("/materials"))
      return "Materials";

    if (location.pathname.includes("/parent-category"))
      return "Parent Categories";

    if (location.pathname.includes("/sub-category"))
      return "Sub Categories";

    if (location.pathname.includes("/sub-sub-category"))
      return "Sub Sub Categories";

    if (location.pathname.includes("/products"))
      return "Products";

    if (location.pathname.includes("/why-choose-us"))
      return "Why Choose Us";

    if (location.pathname.includes("/orders"))
      return "Orders";

    if (location.pathname.includes("/sliders"))
      return "Sliders";

    if (location.pathname.includes("/country"))
      return "Country";

    if (location.pathname.includes("/testimonials"))
      return "Testimonials";

    if (location.pathname.includes("/faqs"))
      return "FAQs";

    if (location.pathname.includes("/terms"))
      return "Terms & Conditions";

    if (location.pathname.includes("/profile"))
      return "Profile";

    if (location.pathname.includes("/company-profile"))
      return "Company Profile";

    return "Dashboard";
  };

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <header className="h-18 bg-white border-b flex justify-between items-center px-6 sticky top-0 z-30">

      {/* Left */}
      <div className="flex items-center gap-5">

        {/* Mobile Sidebar Button */}
        <button
          onClick={toggleSidebar}
          className="text-2xl text-gray-600"
        >
          <FaBars />
        </button>

        <h1 className="text-4xl font-semibold text-gray-700">
          {pageTitle()}
        </h1>

      </div>

      {/* Right */}
      <div className="relative">

        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          onClick={() => setOpenProfile(!openProfile)}
          className="w-12 h-12 rounded-full border cursor-pointer hover:ring-2 hover:ring-blue-500 transition"
        />

        <ProfileDropdown
          open={openProfile}
          setOpen={setOpenProfile}
          onLogout={logout}
        />

      </div>

    </header>
  );
}