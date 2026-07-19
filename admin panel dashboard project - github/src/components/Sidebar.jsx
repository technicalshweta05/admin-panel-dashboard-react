import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import {
  FaChartPie,
  FaUsers,
  FaComments,
  FaPalette,
  FaCubes,
  FaBars,
  FaBox,
  FaBoxes,
  FaClipboardList,
  FaSlidersH,
  FaLocationArrow,
  FaUserEdit,
  FaQuestionCircle,
  FaFileAlt,
  FaTimes,
} from "react-icons/fa";

import SidebarDropdown from "./SidebarDropdown";

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}) {

  const location = useLocation();

  const [openMenu, setOpenMenu] = useState("");

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  // Auto open active menu after refresh

  useEffect(() => {

    const path = location.pathname;

    if (path.startsWith("/users"))
      setOpenMenu("users");

    else if (path.startsWith("/enquiries"))
      setOpenMenu("enquiries");

    else if (path.startsWith("/colors"))
      setOpenMenu("colors");

    else if (path.startsWith("/materials"))
      setOpenMenu("materials");

    else if (path.startsWith("/parent-category"))
      setOpenMenu("parent");

    else if (path.startsWith("/sub-category"))
      setOpenMenu("sub");

    else if (path.startsWith("/sub-sub-category"))
      setOpenMenu("subsub");

    else if (path.startsWith("/products"))
      setOpenMenu("products");

    else if (path.startsWith("/why-choose-us"))
      setOpenMenu("whychoose");

    else if (path.startsWith("/orders"))
      setOpenMenu("orders");

    else if (path.startsWith("/sliders"))
      setOpenMenu("sliders");

    else if (path.startsWith("/country"))
      setOpenMenu("country");

    else if (path.startsWith("/testimonials"))
      setOpenMenu("testimonials");

    else if (path.startsWith("/faqs"))
      setOpenMenu("faqs");

    else if (path.startsWith("/terms"))
      setOpenMenu("terms");

    else
      setOpenMenu("");

  }, [location.pathname]);

  return (

    <aside
      className={`
      fixed lg:static
      top-0 left-0
      z-50
      h-screen
      w-72
      bg-white
      border-r
      shadow-sm
      overflow-y-auto
      transition-transform
      duration-300
      ease-in-out
      ${
        sidebarOpen
          ? "translate-x-0"
          : "-translate-x-full lg:translate-x-0"
      }
      `}
    >

      {/* Mobile Close */}

      <div className="lg:hidden flex justify-end p-4">

        <button
          onClick={() => setSidebarOpen(false)}
          className="text-2xl"
        >
          <FaTimes />
        </button>

      </div>

      {/* Logo */}

      <div className="flex justify-center items-center py-5 border-b">

        <img
          src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg"
          alt="logo"
          className="w-52"
        />

      </div>

      <nav className="py-4">

        {/* Dashboard */}

        <NavLink
          to="/dashboard"
          onClick={() => {
            if (window.innerWidth < 1024)
              setSidebarOpen(false);
          }}
          className={({ isActive }) =>
            `flex items-center gap-4 px-6 py-4 transition hover:bg-gray-100 ${
              isActive
                ? "bg-blue-50 text-blue-600 font-semibold border-r-4 border-blue-600"
                : "text-gray-700"
            }`
          }
        >
          <FaChartPie />
          Dashboard
        </NavLink>

        {/* Users */}

        <SidebarDropdown
          icon={<FaUsers />}
          title="Users"
          open={openMenu === "users"}
          onToggle={() => toggleMenu("users")}
          setSidebarOpen={setSidebarOpen}
          childrenLinks={[
            {
              name: "View User",
              path: "/users/view",
            },
          ]}
        />

        {/* Enquiries */}

        <SidebarDropdown
          icon={<FaComments />}
          title="Enquiries"
          open={openMenu === "enquiries"}
          onToggle={() => toggleMenu("enquiries")}
          setSidebarOpen={setSidebarOpen}
          childrenLinks={[
            {
              name: "Contact Enquiries",
              path: "/enquiries/contact",
            },
            {
              name: "Newsletters",
              path: "/enquiries/newsletter",
            },
          ]}
        />

        {/* Colors */}

        <SidebarDropdown
          icon={<FaPalette />}
          title="Colors"
          open={openMenu === "colors"}
          onToggle={() => toggleMenu("colors")}
          setSidebarOpen={setSidebarOpen}
          childrenLinks={[
            {
              name: "Add Color",
              path: "/colors/add",
            },
            {
              name: "View Color",
              path: "/colors/view",
            },
          ]}
        />

        {/* Materials */}

        <SidebarDropdown
          icon={<FaCubes />}
          title="Materials"
          open={openMenu === "materials"}
          onToggle={() => toggleMenu("materials")}
          setSidebarOpen={setSidebarOpen}
          childrenLinks={[
            {
              name: "Add Material",
              path: "/materials/add",
            },
            {
              name: "View Material",
              path: "/materials/view",
            },
          ]}
        />

        {/* Parent Categories */}

        <SidebarDropdown
          icon={<FaBars />}
          title="Parent Categories"
          open={openMenu === "parent"}
          onToggle={() => toggleMenu("parent")}
          setSidebarOpen={setSidebarOpen}
          childrenLinks={[
            {
              name: "Add Category",
              path: "/parent-category/add",
            },
            {
              name: "View Category",
              path: "/parent-category/view",
            },
          ]}
        />

        {/* Sub Categories */}

        <SidebarDropdown
          icon={<FaBars />}
          title="Sub Categories"
          open={openMenu === "sub"}
          onToggle={() => toggleMenu("sub")}
          setSidebarOpen={setSidebarOpen}
          childrenLinks={[
            {
              name: "Add Sub Category",
              path: "/sub-category/add",
            },
            {
              name: "View Sub Category",
              path: "/sub-category/view",
            },
          ]}
        />

        {/* ===== Part 2 starts from Sub Sub Categories ===== */}
                {/* Sub Sub Categories */}

        <SidebarDropdown
          icon={<FaBars />}
          title="Sub Sub Categories"
          open={openMenu === "subsub"}
          onToggle={() => toggleMenu("subsub")}
          setSidebarOpen={setSidebarOpen}
          childrenLinks={[
            {
              name: "Add Sub Sub Category",
              path: "/sub-sub-category/add",
            },
            {
              name: "View Sub Sub Category",
              path: "/sub-sub-category/view",
            },
          ]}
        />

        {/* Products */}

        <SidebarDropdown
          icon={<FaBox />}
          title="Products"
          open={openMenu === "products"}
          onToggle={() => toggleMenu("products")}
          setSidebarOpen={setSidebarOpen}
          childrenLinks={[
            {
              name: "Add Product",
              path: "/products/add",
            },
            {
              name: "View Product",
              path: "/products/view",
            },
          ]}
        />

        {/* Why Choose Us */}

        <SidebarDropdown
          icon={<FaBoxes />}
          title="Why Choose Us"
          open={openMenu === "whychoose"}
          onToggle={() => toggleMenu("whychoose")}
          setSidebarOpen={setSidebarOpen}
          childrenLinks={[
            {
              name: "Add Why Choose Us",
              path: "/why-choose-us/add",
            },
            {
              name: "View Why Choose Us",
              path: "/why-choose-us/view",
            },
          ]}
        />

        {/* Orders */}

        <SidebarDropdown
          icon={<FaClipboardList />}
          title="Orders"
          open={openMenu === "orders"}
          onToggle={() => toggleMenu("orders")}
          setSidebarOpen={setSidebarOpen}
          childrenLinks={[
            {
              name: "View Orders",
              path: "/orders/view",
            },
          ]}
        />

        {/* Sliders */}

        <SidebarDropdown
          icon={<FaSlidersH />}
          title="Sliders"
          open={openMenu === "sliders"}
          onToggle={() => toggleMenu("sliders")}
          setSidebarOpen={setSidebarOpen}
          childrenLinks={[
            {
              name: "Add Slider",
              path: "/sliders/add",
            },
            {
              name: "View Slider",
              path: "/sliders/view",
            },
          ]}
        />

        {/* Country */}

        <SidebarDropdown
          icon={<FaLocationArrow />}
          title="Country"
          open={openMenu === "country"}
          onToggle={() => toggleMenu("country")}
          setSidebarOpen={setSidebarOpen}
          childrenLinks={[
            {
              name: "Add Country",
              path: "/country/add",
            },
            {
              name: "View Country",
              path: "/country/view",
            },
          ]}
        />

        {/* Testimonials */}

        <SidebarDropdown
          icon={<FaUserEdit />}
          title="Testimonials"
          open={openMenu === "testimonials"}
          onToggle={() => toggleMenu("testimonials")}
          setSidebarOpen={setSidebarOpen}
          childrenLinks={[
            {
              name: "Add Testimonial",
              path: "/testimonials/add",
            },
            {
              name: "View Testimonials",
              path: "/testimonials/view",
            },
          ]}
        />

        {/* FAQs */}

        <SidebarDropdown
          icon={<FaQuestionCircle />}
          title="FAQs"
          open={openMenu === "faqs"}
          onToggle={() => toggleMenu("faqs")}
          setSidebarOpen={setSidebarOpen}
          childrenLinks={[
            {
              name: "Add FAQ",
              path: "/faqs/add",
            },
            {
              name: "View FAQs",
              path: "/faqs/view",
            },
          ]}
        />

        {/* Terms & Conditions */}

        <SidebarDropdown
          icon={<FaFileAlt />}
          title="Terms & Conditions"
          open={openMenu === "terms"}
          onToggle={() => toggleMenu("terms")}
          setSidebarOpen={setSidebarOpen}
          childrenLinks={[
            {
              name: "Add Terms",
              path: "/terms/add",
            },
            {
              name: "View Terms",
              path: "/terms/view",
            },
          ]}
        />

      </nav>

    </aside>
  );
}