import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import BreadCrumb from "../../components/BreadCrumb";

export default function ViewFaq() {
  const [faqs] = useState([
    {
      id: 1,
      question:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae adipisci explicabo molestias possimus quidem obcaecati deserunt vel, officiis, nobis facilis earum quaerat aut esse consequuntur ab praesentium eius suscipit natus!",
      order: 1,
      status: "Active",
    },
    {
      id: 2,
      question: "Neil Sims",
      answer:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae debitis hic, voluptate ullam optio laboriosam, delectus, reiciendis esse vitae eos nostrum? Praesentium provident doloremque debitis, fuga quod quidem doloribus. Aliquid.",
      order: 1,
      status: "Deactive",
    },
  ]);

  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "Faq",
          "View",
        ]}
      />

      <div className="p-6">
        <div className="bg-white border rounded-lg overflow-hidden">

          {/* Header */}

          <div className="bg-slate-100 border-b px-6 py-5 flex justify-between items-center">

            <h2 className="text-5xl font-semibold">
              View Faq
            </h2>

            <div className="flex gap-3">

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

              <thead className="border-b">

                <tr>

                  <th className="p-5 text-left">
                    <input type="checkbox" />
                  </th>

                  <th className="p-5 text-left uppercase font-semibold">
                    Question
                  </th>

                  <th className="p-5 text-left uppercase font-semibold">
                    Answer
                  </th>

                  <th className="p-5 text-left uppercase font-semibold">
                    Order
                  </th>

                  <th className="p-5 text-left uppercase font-semibold">
                    Status
                  </th>

                  <th className="p-5 text-center uppercase font-semibold">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {faqs.map((faq) => (

                  <tr
                    key={faq.id}
                    className="border-b hover:bg-gray-50 align-top"
                  >

                    <td className="p-5">
                      <input type="checkbox" />
                    </td>

                    <td className="p-5 w-[30%]">
                      <p className="text-2xl font-semibold leading-9">
                        {faq.question}
                      </p>
                    </td>

                    <td className="p-5 w-[40%]">
                      <p className="text-lg text-gray-600 leading-9">
                        {faq.answer}
                      </p>
                    </td>

                    <td className="p-5 text-xl">
                      {faq.order}
                    </td>

                    <td className="p-5">

                      <span
                        className={`px-5 py-2 rounded-lg text-white text-lg ${
                          faq.status === "Active"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      >
                        {faq.status}
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
