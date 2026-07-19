import { FaEdit, FaFilter } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function WhyChooseUsTable() {

  const data = [
    {
      id: 1,
      title: "Neil Sims",
      image: "https://via.placeholder.com/45",
      description: "CEO Of SunPark",
      order: 1,
      status: "Active",
    },
    {
      id: 2,
      title: "Neil Sims",
      image: "https://via.placeholder.com/45",
      description: "CEO Of SunPark",
      order: 1,
      status: "Deactive",
    },
  ];

  return (
    <div className="bg-white border rounded-lg overflow-hidden">

      {/* Header */}

      <div className="bg-slate-100 border-b px-6 py-4 flex justify-between items-center">

        <h2 className="text-4xl font-semibold">
          View Testimonial
        </h2>

        <div className="flex gap-4">

          <button className="bg-blue-600 text-white w-12 h-12 rounded-lg flex justify-center items-center">
            <FaFilter />
          </button>

          <button className="bg-green-700 text-white px-6 rounded-lg font-semibold">
            Change Status
          </button>

          <button className="bg-red-600 text-white px-6 rounded-lg font-semibold">
            Delete
          </button>

        </div>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-5">
                <input type="checkbox" />
              </th>

              <th className="text-left font-bold">
                TITLE
              </th>

              <th className="text-left font-bold">
                IMAGE
              </th>

              <th className="text-left font-bold">
                DESCRIPTION
              </th>

              <th className="text-left font-bold">
                ORDER
              </th>

              <th className="text-left font-bold">
                STATUS
              </th>

              <th className="text-left font-bold">
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

                <td className="p-5">
                  <input type="checkbox" />
                </td>

                <td className="font-medium text-xl">
                  {item.title}
                </td>

                <td>

                  <img
                    src={item.image}
                    className="w-12 h-12 rounded-full border"
                    alt=""
                  />

                </td>

                <td className="text-gray-600">
                  {item.description}
                </td>

                <td>{item.order}</td>

                <td>

                  <span
                    className={`px-5 py-2 rounded-lg text-white font-semibold ${
                      item.status === "Active"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

                <td>

                  <button className="bg-blue-600 text-white w-12 h-12 rounded-full flex justify-center items-center hover:bg-blue-700">

                    <FaEdit />

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