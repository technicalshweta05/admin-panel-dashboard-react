import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Error404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white rounded-xl shadow-lg p-10 text-center max-w-xl w-full">

        <FaExclamationTriangle
          className="mx-auto text-yellow-500 mb-6"
          size={70}
        />

        <h1 className="text-8xl font-bold text-blue-600">
          404
        </h1>

        <h2 className="text-3xl font-semibold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-4 text-lg">
          Sorry! The page you are looking for doesn't exist or has
          been moved.
        </p>

        <Link
          to="/dashboard"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition"
        >
          Back to Dashboard
        </Link>

      </div>
    </div>
  );
}