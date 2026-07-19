import { useState } from "react";
import { FaEdit, FaFilter } from "react-icons/fa";
import BreadCrumb from "../../components/BreadCrumb";

export default function ViewCountry() {
  const [countries] = useState([
    {
      id: 1,
      country: "Neil Sims",
      order: 1,
      status: "Active",
    },
    {
      id: 2,
      country: "Neil Sims",
      order: 1,
      status: "Deactive",
    },
  ]);

  return (
    <>
      <BreadCrumb items={["Home", "Location", "View"]} />

      <div className="p-6">
        <div className="bg-white border border-slate-300 rounded-lg overflow-hidden">
          {/* Header */}

          <div className="bg-slate-100 border-b px-6 py-5 flex justify-between items-center">
            <h2 className="text-5xl font-semibold">
              View Country
            </h2>

            <div className="flex gap-3">
              <button className="w-14 h-14 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                <FaFilter size={22} />
              </button>

              <button className="bg-green-700 text-white px-8 rounded-lg text-2xl font-medium">
                Change Status
              </button>

              <button className="bg-red-700 text-white px-8 rounded-lg text-2xl font-medium">
                Delete
              </button>
            </div>
          </div>

          {/* Table */}

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="p-5 w-20">
                    <input
                      type="checkbox"
                      className="w-6 h-6"
                    />
                  </th>

                  <th className="text-left text-xl font-bold">
                    COUNTRY NAME
                  </th>

                  <th className="text-center text-xl font-bold">
                    ORDER
                  </th>

                  <th className="text-center text-xl font-bold">
                    STATUS
                  </th>

                  <th className="text-center text-xl font-bold">
                    ACTION
                  </th>
                </tr>
              </thead>

              <tbody>
                {countries.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="p-5">
                      <input
                        type="checkbox"
                        className="w-6 h-6"
                      />
                    </td>

                    <td className="text-3xl py-8">
                      {item.country}
                    </td>

                    <td className="text-center text-2xl">
                      {item.order}
                    </td>

                    <td className="text-center">
                      <span
                        className={`px-6 py-2 rounded-lg text-white text-xl ${
                          item.status === "Active"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="text-center">
                      <button className="w-14 h-14 rounded-full bg-blue-600 text-white inline-flex justify-center items-center">
                        <FaEdit size={22} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}