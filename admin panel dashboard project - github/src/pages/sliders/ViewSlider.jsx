import { useState } from "react";
import {
  FaEdit,
  FaTrash,
  FaFilter,
} from "react-icons/fa";
import BreadCrumb from "../../components/BreadCrumb";

export default function ViewSlider() {
  const [rows] = useState([
    {
      id: 1,
      name: "Neil Sims",
      image: "https://picsum.photos/60",
      order: 1,
      status: "Active",
    },
    {
      id: 2,
      name: "Neil Sims",
      image: "https://picsum.photos/61",
      order: 1,
      status: "Deactive",
    },
  ]);

  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "Slider",
          "View",
        ]}
      />

      <div className="p-6">

        <div className="bg-white border rounded-lg overflow-hidden">

          {/* Header */}

          <div className="bg-slate-100 border-b px-6 py-5 flex justify-between items-center">

            <h2 className="text-5xl font-semibold">
              View Slider
            </h2>

            <div className="flex gap-3">

              <button className="w-14 h-14 rounded-lg bg-blue-600 text-white flex justify-center items-center">
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

                <tr className="border-b text-left">

                  <th className="p-5">
                    <input
                      type="checkbox"
                      className="w-6 h-6"
                    />
                  </th>

                  <th className="p-5 text-xl font-bold">
                    NAME
                  </th>

                  <th className="p-5 text-xl font-bold text-center">
                    IMAGE
                  </th>

                  <th className="p-5 text-xl font-bold text-center">
                    ORDER
                  </th>

                  <th className="p-5 text-xl font-bold text-center">
                    STATUS
                  </th>

                  <th className="p-5 text-xl font-bold text-center">
                    ACTION
                  </th>

                </tr>

              </thead>

              <tbody>

                {rows.map((item) => (

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

                    <td className="p-5 text-3xl">
                      {item.name}
                    </td>

                    <td className="p-5">

                      <div className="flex justify-center">

                        <img
                          src={item.image}
                          alt=""
                          className="w-14 h-14 rounded-full object-cover"
                        />

                      </div>

                    </td>

                    <td className="p-5 text-center text-2xl">
                      {item.order}
                    </td>

                    <td className="p-5 text-center">

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

                    <td className="p-5">

                      <div className="flex justify-center">

                        <button className="w-14 h-14 rounded-full bg-blue-600 text-white flex justify-center items-center">
                          <FaEdit size={22} />
                        </button>

                      </div>

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