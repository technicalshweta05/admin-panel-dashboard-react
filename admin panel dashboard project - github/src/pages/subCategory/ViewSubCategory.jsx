import BreadCrumb from "../../components/BreadCrumb";
import { FaFilter, FaTrash, FaEdit } from "react-icons/fa";

export default function ViewSubCategory() {
  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "Sub Category",
          "View",
        ]}
      />

      <div className="bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden">

        {/* Header */}

        <div className="bg-gray-100 border-b px-6 py-5 flex justify-between items-center">

          <h2 className="text-[44px] font-semibold">
            View Sub Category
          </h2>

          <div className="flex items-center gap-4">

            <button className="w-12 h-12 rounded-md bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700">

              <FaFilter />

            </button>

            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium">

              Change Status

            </button>

            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2">

              <FaTrash />

              Delete

            </button>

          </div>

        </div>

        {/* Table */}

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>

              <tr className="border-b text-gray-800">

                <th className="w-16 py-6">
                  <input type="checkbox" />
                </th>

                <th className="text-left">
                  PARENT CATEGORY NAME
                </th>

                <th className="text-left">
                  SUB CATEGORY NAME
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

              <tr className="border-b hover:bg-gray-50">

                <td className="text-center py-8">
                  <input type="checkbox" />
                </td>

                <td className="text-xl">
                  Shoe
                </td>

                <td className="text-xl">
                  Men
                </td>

                <td className="text-center">

                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Gold_badge_icon.svg/120px-Gold_badge_icon.svg.png"
                    alt=""
                    className="w-12 h-12 rounded-full mx-auto object-cover"
                  />

                </td>

                <td className="text-center">
                  1
                </td>

                <td className="text-center">

                  <span className="bg-green-500 text-white px-5 py-2 rounded-md">

                    Active

                  </span>

                </td>

                <td className="text-center">

                  <button className="w-12 h-12 rounded-full bg-blue-600 text-white">

                    <FaEdit className="mx-auto" />

                  </button>

                </td>

              </tr>

            </tbody>

          </table>

        </div>

      </div>
    </>
  );
}