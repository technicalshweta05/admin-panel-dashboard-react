import { useMemo, useState } from "react";
import {
  FaFilter,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

export default function UserTable() {

  const initialUsers = [
    {
      id: 1,
      name: "Neil Sims",
      email: "xyz@gmail.com",
      mobile: "9876543210",
      status: "Active",
    },
    {
      id: 2,
      name: "Neil Sims",
      email: "xyz@gmail.com",
      mobile: "9876543210",
      status: "Deactive",
    },
    {
      id: 3,
      name: "John Doe",
      email: "john@gmail.com",
      mobile: "9988776655",
      status: "Active",
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleSelectAll = () => {
    if (selected.length === filteredUsers.length) {
      setSelected([]);
    } else {
      setSelected(filteredUsers.map((user) => user.id));
    }
  };

  const deleteSelected = () => {
    setUsers(users.filter((user) => !selected.includes(user.id)));
    setSelected([]);
  };

  return (
    <div className="bg-white rounded-lg border shadow-sm overflow-hidden">

      {/* Header */}

      <div className="flex justify-between items-center p-6 border-b">

        <h2 className="text-4xl font-bold">
          View User
        </h2>

        <div className="flex gap-3">

          <button
            onClick={() => setShowSearch(!showSearch)}
            className="bg-blue-600 text-white p-3 rounded-md"
          >
            <FaFilter />
          </button>

          <button
            className="bg-green-600 text-white px-6 rounded-md"
          >
            Change Status
          </button>

          <button
            onClick={deleteSelected}
            className="bg-red-600 text-white px-6 rounded-md flex items-center gap-2"
          >
            <FaTrash />
            Delete
          </button>

        </div>

      </div>

      {showSearch && (

        <div className="p-5 border-b bg-gray-50">

          <input
            type="text"
            placeholder="Search User..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-md px-4 py-3 w-full md:w-96 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

      )}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b bg-gray-50">

              <th className="p-4">

                <input
                  type="checkbox"
                  checked={
                    filteredUsers.length > 0 &&
                    selected.length === filteredUsers.length
                  }
                  onChange={handleSelectAll}
                />

              </th>

              <th className="text-left p-4">NAME</th>

              <th className="text-left p-4">EMAIL ID</th>

              <th className="text-left p-4">MOBILE NUMBER</th>

              <th className="text-left p-4">STATUS</th>

              <th className="text-center p-4">ACTION</th>

            </tr>

          </thead>

          <tbody>

            {filteredUsers.map((user) => (

              <tr
                key={user.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">

                  <input
                    type="checkbox"
                    checked={selected.includes(user.id)}
                    onChange={() => handleSelect(user.id)}
                  />

                </td>

                <td className="p-4 font-medium">
                  {user.name}
                </td>

                <td className="p-4 text-gray-600">
                  {user.email}
                </td>

                <td className="p-4 text-gray-600">
                  {user.mobile}
                </td>

                <td className="p-4">

                  <span
                    className={`px-5 py-2 rounded-md text-white font-medium ${
                      user.status === "Active"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {user.status}
                  </span>

                </td>

                <td className="p-4 text-center">

                  <button
                    className="bg-blue-600 w-11 h-11 rounded-full text-white inline-flex items-center justify-center"
                  >
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