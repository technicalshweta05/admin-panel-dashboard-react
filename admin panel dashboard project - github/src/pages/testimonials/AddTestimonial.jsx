import { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import ImageUpload from "../../components/ImageUpload";

export default function AddTestimonial() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    rating: "",
    order: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "Testimonial",
          "Add",
        ]}
      />

      <div className="p-6">
        <div className="bg-white border border-slate-300 rounded-lg overflow-hidden">

          {/* Header */}

          <div className="bg-slate-100 border-b px-6 py-5">
            <h2 className="text-5xl font-semibold">
              Add Testimonial
            </h2>
          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="p-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Left */}

              <div>

                <label className="block text-2xl font-medium mb-3">
                  Choose Image
                </label>

                <ImageUpload />

                <button
                  type="submit"
                  className="mt-[400px] bg-gradient-to-r from-purple-700 to-blue-600 text-white px-8 py-3 rounded-lg text-xl font-medium hover:opacity-90"
                >
                  Add Testimonial
                </button>

              </div>

              {/* Right */}

              <div className="space-y-6">

                {/* Name */}

                <div>
                  <label className="block text-2xl font-medium mb-3">
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-5 py-4 text-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* Designation */}

                <div>
                  <label className="block text-2xl font-medium mb-3">
                    Designation
                  </label>

                  <input
                    type="text"
                    name="designation"
                    placeholder="Designation"
                    value={formData.designation}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-5 py-4 text-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* Rating */}

                <div>
                  <label className="block text-2xl font-medium mb-3">
                    Rating
                  </label>

                  <input
                    type="number"
                    min="1"
                    max="5"
                    name="rating"
                    placeholder="Rating"
                    value={formData.rating}
                    onChange={handleChange}
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
                    name="order"
                    placeholder="Order"
                    value={formData.order}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-5 py-4 text-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                {/* Message */}

                <div>
                  <label className="block text-2xl font-medium mb-3">
                    Message
                  </label>

                  <textarea
                    rows="5"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-5 py-4 text-xl resize-none focus:ring-2 focus:ring-blue-500 outline-none"
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