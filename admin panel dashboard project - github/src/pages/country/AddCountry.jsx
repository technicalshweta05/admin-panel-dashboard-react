import { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";

export default function AddCountry() {
  const [countryName, setCountryName] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      countryName,
      order,
    });
  };

  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "Country",
          "Add",
        ]}
      />

      <div className="p-6">
        <div className="bg-white border border-slate-300 rounded-lg overflow-hidden">

          {/* Header */}

          <div className="bg-slate-100 border-b px-6 py-5">
            <h2 className="text-5xl font-semibold">
              Add Country
            </h2>
          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="p-6 space-y-8"
          >

            {/* Country Name */}

            <div>
              <label className="block text-2xl font-medium mb-3">
                Category Name
              </label>

              <input
                type="text"
                placeholder="Country Name"
                value={countryName}
                onChange={(e) =>
                  setCountryName(e.target.value)
                }
                className="w-full border rounded-lg px-5 py-4 text-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Order */}

            <div>
              <label className="block text-2xl font-medium mb-3">
                Order
              </label>

              <input
                type="number"
                placeholder="Order"
                value={order}
                onChange={(e) =>
                  setOrder(e.target.value)
                }
                className="w-full border rounded-lg px-5 py-4 text-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Button */}

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-700 to-blue-600 text-white px-8 py-3 rounded-lg text-xl font-medium hover:opacity-90"
            >
              Add Country
            </button>

          </form>

        </div>
      </div>
    </>
  );
}