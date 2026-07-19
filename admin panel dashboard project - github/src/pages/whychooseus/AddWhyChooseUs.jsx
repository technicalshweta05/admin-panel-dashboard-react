import { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import ImageUpload from "../../components/ImageUpload";

export default function AddWhyChooseUs() {

  const [image, setImage] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    order: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      ...formData,
      image,
    });

    alert("Why Choose Us Added Successfully");

    setFormData({
      title: "",
      order: "",
      description: "",
    });

    setImage(null);
  };

  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "Why Choose Us",
          "Add",
        ]}
      />

      <div className="p-6">

        <div className="bg-white rounded-lg border overflow-hidden">

          {/* Heading */}

          <div className="bg-slate-100 border-b px-6 py-5">
            <h2 className="text-4xl font-semibold">
              Add Why Choose Us
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-6"
          >

            <div className="grid lg:grid-cols-2 gap-8">

              {/* Left */}

              <div>

                <label className="block font-semibold text-xl mb-3">
                  Choose Image
                </label>

                <ImageUpload
                  image={image}
                  setImage={setImage}
                />

              </div>

              {/* Right */}

              <div className="space-y-6">

                <div>

                  <label className="block font-semibold text-xl mb-2">
                    Title
                  </label>

                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />

                </div>

                <div>

                  <label className="block font-semibold text-xl mb-2">
                    Order
                  </label>

                  <input
                    type="number"
                    name="order"
                    value={formData.order}
                    onChange={handleChange}
                    placeholder="Order"
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />

                </div>

                <div>

                  <label className="block font-semibold text-xl mb-2">
                    Description
                  </label>

                  <textarea
                    rows="5"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />

                </div>

              </div>

            </div>

            <button
              type="submit"
              className="mt-8 bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg text-lg font-semibold duration-300"
            >
              Add Category
            </button>

          </form>

        </div>

      </div>
    </>
  );
}