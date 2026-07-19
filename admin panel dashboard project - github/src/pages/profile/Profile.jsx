import { useState } from "react";
import ImageUpload from "../../components/ImageUpload";

export default function Profile() {

  const [activeTab, setActiveTab] = useState("profile");

  const [profileData, setProfileData] = useState({
    name: "Admin",
    email: "xyz@gmail.com",
    mobile: "1234567890",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    alert("Profile Updated Successfully");
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    alert("Password Changed Successfully");
  };

  return (
    <div className="p-6">

      {/* Breadcrumb */}

      <div className="text-gray-700 text-xl mb-6">
        Home
        <span className="mx-2">/</span>
        Profile
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT CARD */}

        <div className="bg-white rounded-xl shadow">

          <div className="flex flex-col items-center py-10">

            <img
              src="https://i.pravatar.cc/200"
              alt="admin"
              className="w-28 h-28 rounded-full border"
            />

            <h2 className="text-3xl mt-5">
              Admin
            </h2>

          </div>

          <div className="bg-gray-100 p-8 rounded-b-xl">

            <h3 className="font-bold text-2xl mb-5">
              Contact Information
            </h3>

            <p className="mb-3 text-lg">
              📱 1234567890
            </p>

            <p className="text-lg">
              ✉ xyz@gmail.com
            </p>

          </div>

        </div>

        {/* RIGHT CARD */}

        <div className="lg:col-span-2 bg-white rounded-xl shadow p-8">

          {/* Tabs */}

          <div className="flex border-b mb-8">

            <button
              onClick={() => setActiveTab("profile")}
              className={`pb-4 px-8 text-2xl font-medium ${
                activeTab === "profile"
                  ? "text-purple-700 border-b-4 border-purple-700"
                  : "text-gray-600"
              }`}
            >
              Edit Profile
            </button>

            <button
              onClick={() => setActiveTab("password")}
              className={`pb-4 px-8 text-2xl font-medium ${
                activeTab === "password"
                  ? "text-purple-700 border-b-4 border-purple-700"
                  : "text-gray-600"
              }`}
            >
              Change Password
            </button>

          </div>
                    {/* ================= EDIT PROFILE ================= */}

          {activeTab === "profile" && (

            <form onSubmit={handleProfileSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Left */}

                <div>

                  <label className="block font-medium mb-2">
                    Choose Image
                  </label>

                  <ImageUpload
                    height="h-80"
                    text="Profile"
                  />

                  <button
                    type="submit"
                    className="mt-6 bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-medium"
                  >
                    Update Profile
                  </button>

                </div>

                {/* Right */}

                <div>

                  {/* Name */}

                  <div className="mb-5">

                    <label className="block font-medium mb-2">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleProfileChange}
                      placeholder="Name"
                      className="w-full border rounded-lg px-4 py-3 outline-none"
                    />

                  </div>

                  {/* Email */}

                  <div className="mb-5">

                    <label className="block font-medium mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleProfileChange}
                      placeholder="Email"
                      className="w-full border rounded-lg px-4 py-3 outline-none"
                    />

                  </div>

                  {/* Mobile */}

                  <div>

                    <label className="block font-medium mb-2">
                      Mobile Number
                    </label>

                    <input
                      type="text"
                      name="mobile"
                      value={profileData.mobile}
                      onChange={handleProfileChange}
                      placeholder="Number"
                      className="w-full border rounded-lg px-4 py-3 outline-none"
                    />

                  </div>

                </div>

              </div>

            </form>

          )}

          {/* ================= CHANGE PASSWORD ================= */}

          {activeTab === "password" && (

            <form onSubmit={handlePasswordSubmit}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Left */}

                <div>

                  <label className="block font-medium mb-2">
                    Profile Image
                  </label>

                  <ImageUpload
                    height="h-80"
                    text="Profile"
                  />

                  <button
                    type="submit"
                    className="mt-6 bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-medium"
                  >
                    Change Password
                  </button>

                </div>

                {/* Right */}

                <div>

                  {/* Current */}

                  <div className="mb-5">

                    <label className="block font-medium mb-2">
                      Current Password
                    </label>

                    <input
                      type="password"
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      placeholder="Current Password"
                      className="w-full border rounded-lg px-4 py-3 outline-none"
                    />

                  </div>

                  {/* New */}

                  <div className="mb-5">

                    <label className="block font-medium mb-2">
                      New Password
                    </label>

                    <input
                      type="password"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      placeholder="New Password"
                      className="w-full border rounded-lg px-4 py-3 outline-none"
                    />

                  </div>

                  {/* Confirm */}

                  <div>

                    <label className="block font-medium mb-2">
                      Confirm Password
                    </label>

                    <input
                      type="password"
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      placeholder="Confirm Password"
                      className="w-full border rounded-lg px-4 py-3 outline-none"
                    />

                  </div>

                </div>

              </div>

            </form>

          )}

        </div>

      </div>

    </div>
  );
}