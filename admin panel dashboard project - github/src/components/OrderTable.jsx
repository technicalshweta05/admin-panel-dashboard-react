import { useState } from "react";

export default function OrderTable() {
  const [orders] = useState([
    {
      id: 1,
      orderId: "Frank01",
      customer: "Roshan Chaurasia",
      quantity: 2,
      price: 3500,
      date: "10/06/2024",
      status: "Processing...",
    },
    {
      id: 2,
      orderId: "Frank02",
      customer: "Rahul Sharma",
      quantity: 1,
      price: 2500,
      date: "12/06/2024",
      status: "Delivered",
    },
    {
      id: 3,
      orderId: "Frank03",
      customer: "Aman Gupta",
      quantity: 4,
      price: 7800,
      date: "15/06/2024",
      status: "Shipped",
    },
    {
      id: 4,
      orderId: "Frank04",
      customer: "Neha Singh",
      quantity: 3,
      price: 5600,
      date: "17/06/2024",
      status: "Cancelled",
    },
  ]);

  return (
    <div className="bg-white border rounded-lg overflow-hidden">

      {/* Heading */}

      <div className="bg-slate-100 border-b px-6 py-5">
        <h2 className="text-4xl font-semibold">
          Order's List
        </h2>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="p-5 text-left">
                <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold">
                  Delete
                </button>
              </th>

              <th className="text-left font-bold">S. NO.</th>

              <th className="text-left font-bold">
                ORDER ID
              </th>

              <th className="text-left font-bold">
                NAME
              </th>

              <th className="text-left font-bold">
                QUANTITY
              </th>

              <th className="text-left font-bold">
                PRICE
              </th>

              <th className="text-left font-bold">
                DATE
              </th>

              <th className="text-left font-bold">
                STATUS
              </th>

              <th className="text-left font-bold">
                VIEW
              </th>

            </tr>

          </thead>

          <tbody>

            {orders.map((item, index) => (

              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-6">
                  <input
                    type="checkbox"
                    className="w-5 h-5"
                  />
                </td>

                <td className="text-lg">
                  {index + 1}
                </td>

                <td className="text-lg">
                  {item.orderId}
                </td>

                <td className="text-lg">
                  {item.customer}
                </td>

                <td className="text-lg">
                  {item.quantity}
                </td>

                <td className="text-lg">
                  ₹ {item.price}
                </td>

                <td className="text-lg">
                  {item.date}
                </td>

                <td>

                  <span
                    className={`font-medium ${
                      item.status === "Delivered"
                        ? "text-green-600"
                        : item.status === "Cancelled"
                        ? "text-red-500"
                        : item.status === "Shipped"
                        ? "text-blue-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

                <td>

                  <button className="border rounded-full px-8 py-2 hover:bg-gray-100 transition">
                    View
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