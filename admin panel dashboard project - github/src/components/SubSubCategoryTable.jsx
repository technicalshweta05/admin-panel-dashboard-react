import { useState } from "react";
import { FaFilter, FaTrash, FaEdit } from "react-icons/fa";

export default function SubSubCategoryTable() {
  const [showSearch, setShowSearch] = useState(false);

  const [data] = useState([
    {
      id: 1,
      parentCategory: "Men",
      subCategory: "Men",
      categoryName: "Shoe",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Gold_badge_icon.svg/120px-Gold_badge_icon.svg.png",
      order: 1,
      status: "Active",
    },
  ]);

  return (
    <div className="bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">
      {/* Header */}

      <div className="bg-gray-100 border-b px-6 py-5 flex justify-between items-center">
        <h2 className="text-4xl font-semibold">
          View Sub Category
        </h2>

        <div className="flex gap-3">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-md"
          >
            <FaFilter />
          </button>

          <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md">
            Change Status
          </button>

          <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-md flex items-center gap-2">
            <FaTrash />
            Delete
          </button>
        </div>
      </div>

      {/* Search */}

      {showSearch && (
        <div className="border-b p-5 bg-gray-50">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-lg px-4 py-3 w-96 outline-none"
          />
        </div>
      )}

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-gray-800">
              <th className="p-5">
                <input type="checkbox" />
              </th>

              <th className="text-left">
                PARENT CATEGORY
              </th>

              <th className="text-left">
                SUB CATEGORY
              </th>

              <th className="text-left">
                CATEGORY NAME
              </th>

              <th className="text-center">
                IMAGE
              </th>

              <th className="text-center">
                ORDER
              </th>

              <th className="text-center">
                STATUS
              </th>

              <th className="text-center">
                ACTION
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="p-6">
                  <input type="checkbox" />
                </td>

                <td className="text-xl">
                  {item.parentCategory}
                </td>

                <td className="text-xl">
                  {item.subCategory}
                </td>

                <td className="text-xl">
                  {item.categoryName}
                </td>

                <td className="text-center">
                  <img
                    src={item.image}
                    alt=""
                    className="w-12 h-12 rounded-full mx-auto object-cover"
                  />
                </td>

                <td className="text-center">
                  {item.order}
                </td>

                <td className="text-center">
                  <span className="bg-green-500 text-white px-5 py-2 rounded-md">
                    {item.status}
                  </span>
                </td>

                <td className="text-center">
                  <button className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                    <FaEdit className="mx-auto" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}