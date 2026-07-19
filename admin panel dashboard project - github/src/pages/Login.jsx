import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-5">

      <div className="w-full max-w-lg">

        <div className="flex justify-center mb-8">
          <img src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" alt="logo" className="h-16" />
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8">

          <h2 className="text-4xl font-bold mb-8">
            Sign in to your account
          </h2>

          <form onSubmit={handleSubmit}>

            <div className="mb-5">
              <label className="block font-semibold mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">

              <label className="block font-semibold mb-2">
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

            <button
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-lg font-semibold text-lg"
            >
              Sign In
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}