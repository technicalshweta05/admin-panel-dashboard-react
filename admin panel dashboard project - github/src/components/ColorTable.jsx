import { useContext, useMemo, useState } from "react";
import { FaFilter, FaTrash, FaEdit } from "react-icons/fa";
import { ColorContext } from "../context/ColorContext";

export default function ColorTable() {
  const { colors, setColors } = useContext(ColorContext);

  const [selected, setSelected] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");

  const filteredColors = useMemo(() => {
    return colors.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [colors, search]);

  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleSelectAll = () => {
    if (selected.length === filteredColors.length) {
      setSelected([]);
    } else {
      setSelected(filteredColors.map((item) => item.id));
    }
  };

  const deleteSelected = () => {
    setColors(colors.filter((item) => !selected.includes(item.id)));
    setSelected([]);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-300 shadow-sm overflow-hidden">

      {/* Header */}

      <div className="bg-gray-100 border-b flex justify-between items-center px-6 py-5">

        <h2 className="text-4xl font-semibold">
          View Color
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
            placeholder="Search Color..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-md px-4 py-3 w-96 outline-none focus:ring-2 focus:ring-blue-500"
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
                    filteredColors.length > 0 &&
                    selected.length === filteredColors.length
                  }
                  onChange={handleSelectAll}
                />
              </th>

              <th className="text-left">COLOR NAME</th>

              <th className="text-left">CODE</th>

              <th className="text-left">ORDER</th>

              <th className="text-left">STATUS</th>

              <th className="text-center">ACTION</th>

            </tr>

          </thead>

          <tbody>

            {filteredColors.map((item) => (

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
                  {item.name}
                </td>

                <td className="text-gray-600">

                  <div className="flex items-center gap-3">

                    <div
                      className="w-6 h-6 rounded border"
                      style={{
                        background: item.color,
                      }}
                    />

                    {item.color}

                  </div>

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