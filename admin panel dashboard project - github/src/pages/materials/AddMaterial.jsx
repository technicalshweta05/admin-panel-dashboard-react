import { useContext, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { MaterialContext } from "../../context/MaterialContext";

export default function AddMaterial() {
  const { addMaterial } = useContext(MaterialContext);

  const [name, setName] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !order.trim()) {
      alert("Please fill all fields");
      return;
    }

    addMaterial({
      id: Date.now(),
      name,
      order,
      status: "Active",
    });

    alert("Material Added Successfully");

    setName("");
    setOrder("");
  };

  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "Material",
          "Add",
        ]}
      />

      <div className="bg-white rounded-lg border border-gray-300 shadow-sm overflow-hidden">

        {/* Header */}

        <div className="bg-gray-100 border-b px-6 py-5">

          <h2 className="text-3xl font-semibold">
            Add Material
          </h2>

        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6"
        >

          {/* Material Name */}

          <div className="mb-8">

            <label className="block text-xl font-medium mb-2">
              Category Name
            </label>

            <input
              type="text"
              placeholder="Material Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Order */}

          <div className="mb-10">

            <label className="block text-xl font-medium mb-2">
              Order
            </label>

            <input
              type="number"
              placeholder="Order"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-4 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          <button
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-8 py-3 rounded-lg"
          >
            Add Material
          </button>

        </form>

      </div>
    </>
  );
}