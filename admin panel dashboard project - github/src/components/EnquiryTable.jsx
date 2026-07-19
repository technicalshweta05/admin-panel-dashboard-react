import { useState } from "react";
import { FaFilter, FaTrash, FaEdit } from "react-icons/fa";

export default function EnquiryTable() {
  const initialData = [
    {
      id: 1,
      user: "Neil Sims",
      subject: "xyz@gmail.com",
      message: "9876543210",
      status: "Active",
    },
    {
      id: 2,
      user: "Neil Sims",
      subject: "xyz@gmail.com",
      message: "9876543210",
      status: "Deactive",
    },
  ];

  const [enquiries, setEnquiries] = useState(initialData);
  const [selected, setSelected] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const filteredData = enquiries.filter((item) =>
    item.user.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleSelectAll = () => {
    if (selected.length === filteredData.length) {
      setSelected([]);
    } else {
      setSelected(filteredData.map((item) => item.id));
    }
  };

  const deleteSelected = () => {
    setEnquiries(
      enquiries.filter((item) => !selected.includes(item.id))
    );
    setSelected([]);
  };

  return (
    <div className="bg-white rounded-lg border shadow overflow-hidden">

      {/* Header */}

      <div className="flex justify-between items-center p-6 border-b bg-gray-50">

        <h2 className="text-4xl font-semibold">
          Contact Enquiry Management
        </h2>

        <div className="flex gap-3">

          <button
            onClick={() => setShowSearch(!showSearch)}
            className="bg-blue-600 text-white p-3 rounded"
          >
            <FaFilter />
          </button>

          <button className="bg-green-600 text-white px-6 rounded">
            Change Status
          </button>

          <button
            onClick={deleteSelected}
            className="bg-red-600 text-white px-6 rounded flex items-center gap-2"
          >
            <FaTrash />
            Delete
          </button>

        </div>

      </div>

      {showSearch && (
        <div className="border-b p-5 bg-gray-100">

          <input
            type="text"
            placeholder="Search Enquiry..."
            className="border rounded-md px-4 py-3 w-96 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>
      )}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b bg-white">

              <th className="p-5">

                <input
                  type="checkbox"
                  checked={
                    filteredData.length > 0 &&
                    selected.length === filteredData.length
                  }
                  onChange={handleSelectAll}
                />

              </th>

              <th className="text-left">USER INFO</th>

              <th className="text-left">SUBJECT</th>

              <th className="text-left">MESSAGE</th>

              <th className="text-left">STATUS</th>

              <th className="text-center">ACTION</th>

            </tr>

          </thead>

          <tbody>

            {filteredData.map((item) => (

              <tr
                key={item.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-5">

                  <input
                    type="checkbox"
                    checked={selected.includes(item.id)}
                    onChange={() => handleSelect(item.id)}
                  />

                </td>

                <td className="font-medium text-xl">
                  {item.user}
                </td>

                <td className="text-gray-600">
                  {item.subject}
                </td>

                <td className="text-gray-600">
                  {item.message}
                </td>

                <td>

                  <span
                    className={`px-5 py-2 rounded-md text-white ${
                      item.status === "Active"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>

                <td className="text-center">

                  <button className="bg-blue-600 text-white rounded-full w-11 h-11">

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