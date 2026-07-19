import { FaTimes } from "react-icons/fa";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-5">
      <div className="bg-white rounded-lg w-full max-w-5xl shadow-xl relative">

        {/* Header */}

        <div className="flex justify-between items-center border-b px-6 py-4">
          <h2 className="text-2xl font-semibold">
            Product Details
          </h2>

          <button
            onClick={onClose}
            className="text-red-500 text-xl hover:rotate-90 duration-300"
          >
            <FaTimes />
          </button>
        </div>

        {/* Body */}

        <div className="grid md:grid-cols-2 gap-8 p-6">

          {/* Left */}

          <div>

            <img
              src={product.thumbnail}
              alt=""
              className="w-full h-80 object-cover rounded border"
            />

            <div className="grid grid-cols-4 gap-3 mt-4">

              {product.gallery.map((img, index) => (

                <img
                  key={index}
                  src={img}
                  alt=""
                  className="h-20 w-full rounded border object-cover cursor-pointer hover:scale-105 duration-300"
                />

              ))}

            </div>

          </div>

          {/* Right */}

          <div>

            <h2 className="text-3xl font-bold mb-3">
              {product.name}
            </h2>

            <div className="flex gap-4 items-center mb-4">

              <span className="text-3xl font-bold text-green-600">
                ₹{product.salePrice}
              </span>

              <span className="text-xl line-through text-gray-400">
                ₹{product.price}
              </span>

            </div>

            <div className="space-y-4">

              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Product Description
                </h3>

                <p className="text-gray-600 leading-7">
                  {product.description}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Short Description
                </h3>

                <p className="text-gray-600">
                  {product.shortDescription}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-5">

                <div className="border rounded p-3">

                  <p className="text-gray-500 text-sm">
                    Stock
                  </p>

                  <h3 className="font-semibold">
                    {product.stock}
                  </h3>

                </div>

                <div className="border rounded p-3">

                  <p className="text-gray-500 text-sm">
                    Material
                  </p>

                  <h3 className="font-semibold">
                    {product.material}
                  </h3>

                </div>

                <div className="border rounded p-3">

                  <p className="text-gray-500 text-sm">
                    Color
                  </p>

                  <h3 className="font-semibold">
                    {product.color}
                  </h3>

                </div>

                <div className="border rounded p-3">

                  <p className="text-gray-500 text-sm">
                    Category
                  </p>

                  <h3 className="font-semibold">
                    {product.category}
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}