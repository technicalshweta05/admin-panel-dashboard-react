import { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";

export default function AddFaq() {
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
    order: "",
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

    alert("FAQ Added Successfully!");

    setFormData({
      question: "",
      answer: "",
      order: "",
    });
  };

  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "Faq",
          "Add",
        ]}
      />

      <div className="p-6">

        <div className="bg-white border rounded-lg overflow-hidden">

          {/* Header */}

          <div className="bg-slate-100 border-b px-6 py-5">
            <h2 className="text-5xl font-semibold">
              Add Faq
            </h2>
          </div>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="p-6 space-y-6"
          >

            {/* Question */}

            <div>

              <label className="block text-xl font-medium mb-2">
                Question
              </label>

              <input
                type="text"
                name="question"
                placeholder="Question"
                value={formData.question}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-4 text-lg outline-none focus:ring-2 focus:ring-violet-500"
                required
              />

            </div>

            {/* Answer */}

            <div>

              <label className="block text-xl font-medium mb-2">
                Answer
              </label>

              <textarea
                name="answer"
                placeholder="Answer"
                rows={7}
                value={formData.answer}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-4 text-lg outline-none resize-none focus:ring-2 focus:ring-violet-500"
                required
              />

            </div>

            {/* Order */}

            <div>

              <label className="block text-xl font-medium mb-2">
                Order
              </label>

              <input
                type="number"
                name="order"
                placeholder="Order"
                value={formData.order}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-4 text-lg outline-none focus:ring-2 focus:ring-violet-500"
                required
              />

            </div>

            {/* Button */}

            <button
              type="submit"
              className="bg-violet-700 hover:bg-violet-800 text-white text-xl font-medium px-8 py-3 rounded-lg"
            >
              Add Faq
            </button>

          </form>

        </div>

      </div>
    </>
  );
}