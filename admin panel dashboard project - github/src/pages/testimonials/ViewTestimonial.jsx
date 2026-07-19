import { useState } from "react";
import {
  FaEdit,
  FaFilter,
} from "react-icons/fa";
import BreadCrumb from "../../components/BreadCrumb";

export default function ViewTestimonial() {
  const [testimonials] = useState([
    {
      id: 1,
      name: "Neil Sims",
      designation: "CEO Of SunPark",
      rating: 5,
      order: 1,
      status: "Active",
      image:
        "https://dummyimage.com/70x70/f4c542/000.png&text=Logo",
    },
    {
      id: 2,
      name: "Neil Sims",
      designation: "CEO Of SunPark",
      rating: 5,
      order: 1,
      status: "Deactive",
      image:
        "https://dummyimage.com/70x70/f4c542/000.png&text=Logo",
    },
  ]);

  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "Category",
          "View",
        ]}
      />

      <div className="p-6">
        <div className="bg-white border rounded-lg overflow-hidden">

          {/* Header */}

          <div className="bg-slate-100 border-b px-6 py-5 flex justify-between items-center">

            <h2 className="text-5xl font-semibold">
              View Testimonial
            </h2>

            <div className="flex gap-3">

              <button className="bg-blue-600 text-white w-12 h-12 rounded-lg flex justify-center items-center hover:bg-blue-700">
                <FaFilter size={20} />
              </button>

              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-medium">
                Change Status
              </button>

              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg text-lg font-medium">
                Delete
              </button>

            </div>
          </div>

          {/* Table */}

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead className="bg-white border-b">

                <tr className="text-left">

                  <th className="p-5">
                    <input type="checkbox" />
                  </th>

                  <th className="p-5 font-semibold uppercase">
                    Name
                  </th>

                  <th className="p-5 font-semibold uppercase text-center">
                    Image
                  </th>

                  <th className="p-5 font-semibold uppercase">
                    Designation
                  </th>

                  <th className="p-5 font-semibold uppercase">
                    Rating
                  </th>

                  <th className="p-5 font-semibold uppercase">
                    Order
                  </th>

                  <th className="p-5 font-semibold uppercase">
                    Status
                  </th>

                  <th className="p-5 font-semibold uppercase text-center">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {testimonials.map((item) => (

                  <tr
                    key={item.id}
                    className="border-b hover:bg-gray-50"
                  >

                    <td className="p-5">
                      <input type="checkbox" />
                    </td>

                    <td className="p-5 text-xl">
                      {item.name}
                    </td>

                    <td className="p-5 text-center">

                      <img
                        src={item.image}
                        alt=""
                        className="w-14 h-14 mx-auto rounded-full object-cover border"
                      />

                    </td>

                    <td className="p-5 text-gray-600 text-lg">
                      {item.designation}
                    </td>

                    <td className="p-5 text-lg">
                      {item.rating}
                    </td>

                    <td className="p-5 text-lg">
                      {item.order}
                    </td>

                    <td className="p-5">

                      <span
                        className={`px-5 py-2 rounded-lg text-white font-medium ${
                          item.status === "Active"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      >
                        {item.status}
                      </span>

                    </td>

                    <td className="p-5 text-center">

                      <button className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex justify-center items-center mx-auto">
                        <FaEdit />
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