import { useContext, useMemo, useState } from "react";
import { FaFilter, FaTrash, FaEdit } from "react-icons/fa";
import { SubCategoryContext } from "../context/SubCategoryContext";

export default function SubCategoryTable() {
  const { subCategories, setSubCategories } =
    useContext(SubCategoryContext);

  const [selected, setSelected] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return subCategories.filter(
      (item) =>
        item.parentName.toLowerCase().includes(search.toLowerCase()) ||
        item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [subCategories, search]);

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
    setSubCategories(
      subCategories.filter((item) => !selected.includes(item.id))
    );
    setSelected([]);
  };

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

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 rounded-md">
            Change Status
          </button>

          <button
            onClick={deleteSelected}
            className="bg-red-600 hover:bg-red-700 text-white px-6 rounded-md flex items-center gap-2"
          >
            <FaTrash />
            Delete
          </button>

        </div>

      </div>

      {/* Search */}

      {showSearch && (
        <div className="bg-gray-50 border-b p-5">

          <input
            type="text"
            placeholder="Search Sub Category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg px-4 py-3 w-96 outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>
      )}

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

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

              <th className="text-left">
                PARENT CATEGORY NAME
              </th>

              <th className="text-left">
                SUB CATEGORY NAME
              </th>

              <th className="text-left">
                IMAGE
              </th>

              <th className="text-left">
                ORDER
              </th>

              <th className="text-left">
                STATUS
              </th>

              <th className="text-center">
                ACTION
              </th>

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

                <td className="text-xl">
                  {item.parentName}
                </td>

                <td className="text-xl">
                  {item.name}
                </td>

                <td>

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover border"
                  />

                </td>

                <td>
                  {item.order}
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

                  <button className="w-11 h-11 rounded-full bg-blue-600 text-white">

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