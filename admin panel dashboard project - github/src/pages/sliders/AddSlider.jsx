import { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import ImageUpload from "../../components/ImageUpload";

export default function AddSlider() {
  const [title, setTitle] = useState("");
  const [order, setOrder] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      title,
      order,
    });
  };

  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "Slider",
          "Add",
        ]}
      />

      <div className="p-6">

        <div className="bg-white border rounded-lg overflow-hidden">

          {/* Header */}

          <div className="bg-slate-100 border-b px-8 py-5">
            <h2 className="text-5xl font-semibold">
              Add Slider
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-8"
          >

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

              {/* Left */}

              <div>

                <label className="block text-2xl font-medium mb-3">
                  Choose Image
                </label>

                <ImageUpload />

                <button
                  type="submit"
                  className="mt-7 bg-gradient-to-r from-purple-700 to-blue-600 hover:opacity-90 text-white text-xl px-8 py-3 rounded-lg"
                >
                  Add Slider
                </button>

              </div>

              {/* Right */}

              <div className="space-y-8">

                <div>

                  <label className="block text-2xl font-medium mb-3">
                    Title
                  </label>

                  <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) =>
                      setTitle(e.target.value)
                    }
                    className="w-full border rounded-lg px-5 py-4 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                </div>

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
                    className="w-full border rounded-lg px-5 py-4 text-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                </div>

              </div>

            </div>

          </form>

        </div>

      </div>
    </>
  );
}