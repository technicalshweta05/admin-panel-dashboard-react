import { useState } from "react";
import {
    FaTrash,
    FaEdit,
    FaFilter,
} from "react-icons/fa";
import ProductModal from "./ProductModal";

export default function ProductTable() {

    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            id: 1,
            name: "Men's Running Shoes",
            description:
                "Premium quality running shoes made with breathable mesh fabric and lightweight rubber sole for maximum comfort during daily activities.",
            shortDescription:
                "Lightweight running shoes for everyday use.",
            thumbnail:
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
            gallery: [
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
                "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600",
                "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600",
                "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600",
            ],
            price: 3999,
            salePrice: 2999,
            stock: 20,
            material: "Leather",
            color: "Black",
            category: "Shoes",
            status: "Active",
        },
        {
            id: 2,
            name: "Sports Sneakers",
            description:
                "Comfortable sneakers suitable for gym workouts and casual wear with modern styling.",
            shortDescription:
                "Comfortable sneakers.",
            thumbnail:
                "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600",
            gallery: [
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
                "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600",
                "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600",
                "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600",
            ],
            price: 3500,
            salePrice: 2500,
            stock: 15,
            material: "Mesh",
            color: "Blue",
            category: "Shoes",
            status: "Active",
        },
        {
            id: 3,
            name: "Casual Shoes",
            description:
                "Elegant casual shoes for office and daily wear with premium finishing.",
            shortDescription:
                "Office casual shoes.",
            thumbnail:
                "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600",
            gallery: [
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
                "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600",
                "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600",
                "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600",
            ],
            price: 4500,
            salePrice: 3499,
            stock: 12,
            material: "Leather",
            color: "Brown",
            category: "Shoes",
            status: "Inactive",
        },
        {
            id: 4,
            name: "Training Shoes",
            description:
                "Best training shoes with extra cushioning for workouts.",
            shortDescription:
                "Workout shoes.",
            thumbnail:
                "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600",
            gallery: [
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
                "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600",
                "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600",
                "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600",
            ],
            price: 5000,
            salePrice: 3899,
            stock: 10,
            material: "Rubber",
            color: "White",
            category: "Sports",
            status: "Active",
        },
    ];

    return (
        <>
            <div className="bg-white rounded-lg border overflow-hidden">

                <div className="flex justify-between items-center px-6 py-5 bg-slate-100 border-b">
                    <h2 className="text-4xl font-semibold">
                        Product Items
                    </h2>

                    <div className="flex gap-3">
                        <button className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                            <FaFilter />
                        </button>

                        <button className="bg-green-700 text-white px-6 rounded-lg font-semibold">
                            Change Status
                        </button>

                        <button className="bg-red-600 text-white px-6 rounded-lg font-semibold">
                            Delete
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b text-left">
                                <th className="p-5">
                                    <input type="checkbox" />
                                </th>
                                <th className="p-5 font-bold">
                                    S.NO.
                                </th>
                                <th className="p-5 font-bold">
                                    PRODUCT NAME
                                </th>
                                <th className="p-5 font-bold">
                                    DESCRIPTION
                                </th>
                                <th className="p-5 font-bold">
                                    SHORT DESCRIPTION
                                </th>
                                <th className="p-5 font-bold">
                                    THUMBNAIL
                                </th>
                                <th className="p-5 font-bold">
                                    ACTION
                                </th>
                                <th className="p-5 font-bold">
                                    STATUS
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {products.map((item, index) => (
                                <tr
                                    key={item.id}
                                    className="border-b hover:bg-gray-50"
                                >
                                    <td className="p-5">
                                        <input type="checkbox" />
                                    </td>

                                    <td className="p-5">
                                        {index + 1}
                                    </td>

                                    <td className="p-5 font-medium">
                                        {item.name}
                                    </td>

                                    <td className="p-5">
                                        <p className="text-gray-600">
                                            {item.description.substring(0, 40)}...
                                        </p>
                                        <button
                                            onClick={() => setSelectedProduct(item)}
                                            className="text-blue-600 mt-2 hover:underline"
                                        >
                                            Read More
                                        </button>
                                    </td> {/* <- Fixed: removed extra </td> */}

                                    <td className="p-5">
                                        <p className="text-gray-600">
                                            {item.shortDescription}
                                        </p>
                                        <button
                                            onClick={() => setSelectedProduct(item)}
                                            className="text-blue-600 mt-2 hover:underline"
                                        >
                                            Read More
                                        </button>
                                    </td>

                                    <td className="p-5">
                                        <img
                                            src={item.thumbnail}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-lg border"
                                        />
                                    </td>

                                    <td className="p-5">
                                        <div className="flex items-center gap-4 text-xl">
                                            <button className="text-red-500 hover:scale-110 duration-200">
                                                <FaTrash />
                                            </button>
                                            <span className="text-gray-400">|</span>
                                            <button className="text-yellow-500 hover:scale-110 duration-200">
                                                <FaEdit />
                                            </button>
                                        </div>
                                    </td>

                                    <td className="p-5">
                                        <span
                                            className={`px-4 py-2 rounded-lg text-white font-medium ${
                                                item.status === "Active"
                                                    ? "bg-green-500"
                                                    : "bg-red-500"
                                            }`}
                                        >
                                            {item.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Product Detail Modal */}
            {selectedProduct && (
                <ProductModal
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}
        </>
    );
}