import { useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import ImageUpload from "../../components/ImageUpload";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

export default function AddProduct() {

    // Images

    const [productImage, setProductImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const [galleryImages, setGalleryImages] = useState([]);

    // Form

    const [formData, setFormData] = useState({
        productName: "",
        parentCategory: "",
        subCategory: "",
        subSubCategory: "",
        material: "",
        color: "",
        productType: "",
        bestSelling: "",
        topRated: "",
        upSell: "",
        actualPrice: "",
        salePrice: "",
        stock: "",
        order: "",
        description: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // Dummy Data

    const parentCategories = [
        "Men",
        "Women",
        "Kids",
        "Sports",
    ];

    const subCategories = [
        "Shoes",
        "Clothing",
        "Accessories",
    ];

    const subSubCategories = [
        "Sneakers",
        "Boots",
        "Sandals",
        "Formal",
    ];

    const materials = [
        "Leather",
        "Cotton",
        "Canvas",
        "Rubber",
    ];

    const colors = [
        "Black",
        "White",
        "Blue",
        "Red",
        "Green",
    ];

    const productTypes = [
        "Simple Product",
        "Variable Product",
        "Featured Product",
    ];

    const yesNo = [
        "Yes",
        "No",
    ];

    const { addProduct } = useContext(ProductContext);
    const handleSubmit = (e) => {
        e.preventDefault();

        addProduct({
            id: Date.now(),

            ...formData,

            productImage: productImage?.preview,

            backImage: backImage?.preview,

            galleryImages: galleryImages.map(
                (item) => item.preview
            ),

            status: "Active",
        });

        alert("Product Added Successfully");

        setProductImage(null);
        setBackImage(null);
        setGalleryImages([]);

        setFormData({
            productName: "",
            parentCategory: "",
            subCategory: "",
            subSubCategory: "",
            material: "",
            color: "",
            productType: "",
            bestSelling: "",
            topRated: "",
            upSell: "",
            actualPrice: "",
            salePrice: "",
            stock: "",
            order: "",
            description: "",
        });
    };

    return (
        <>

            <BreadCrumb
                items={[
                    "Home",
                    "Product",
                    "Add",
                ]}
            />

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg border shadow-sm m-6"
            >

                <div className="bg-slate-100 border-b px-8 py-6">
                    <h2 className="text-4xl font-bold">
                        Add Product
                    </h2>
                </div>

                <div className="p-6">

                    <div className="grid lg:grid-cols-2 gap-8">

                        {/* LEFT */}

                        <div className="space-y-6">

                            <ImageUpload
                                title="Product Image"
                                image={productImage}
                                setImage={setProductImage}
                            />

                            <ImageUpload
                                title="Back Image"
                                image={backImage}
                                setImage={setBackImage}
                            />

                            <ImageUpload
                                title="Gallery Image"
                                image={galleryImages}
                                setImage={setGalleryImages}
                                multiple={true}
                            />

                        </div>

                        {/* RIGHT */}

                        <div className="grid md:grid-cols-2 gap-5">

                            {/* Product Name */}

                            <div>
                                <label className="font-semibold mb-2 block">
                                    Product Name
                                </label>

                                <input
                                    type="text"
                                    name="productName"
                                    placeholder="Product Name"
                                    value={formData.productName}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-3"
                                />
                            </div>

                            {/* Parent Category */}

                            <div>
                                <label className="font-semibold mb-2 block">
                                    Select Parent Category
                                </label>

                                <select
                                    name="parentCategory"
                                    value={formData.parentCategory}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-3"
                                >
                                    <option value="">Nothing Selected</option>

                                    {parentCategories.map((item) => (
                                        <option key={item}>{item}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Sub Category */}

                            <div>
                                <label className="font-semibold mb-2 block">
                                    Select Sub Category
                                </label>

                                <select
                                    name="subCategory"
                                    value={formData.subCategory}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-3"
                                >
                                    <option value="">Nothing Selected</option>

                                    {subCategories.map((item) => (
                                        <option key={item}>{item}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Sub Sub Category */}

                            <div>
                                <label className="font-semibold mb-2 block">
                                    Select Sub Sub Category
                                </label>

                                <select
                                    name="subSubCategory"
                                    value={formData.subSubCategory}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-3"
                                >
                                    <option value="">Nothing Selected</option>

                                    {subSubCategories.map((item) => (
                                        <option key={item}>{item}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Material */}

                            <div>
                                <label className="font-semibold mb-2 block">
                                    Select Material
                                </label>

                                <select
                                    name="material"
                                    value={formData.material}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-3"
                                >
                                    <option value="">Nothing Selected</option>

                                    {materials.map((item) => (
                                        <option key={item}>{item}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Color */}

                            <div>
                                <label className="font-semibold mb-2 block">
                                    Select Color
                                </label>

                                <select
                                    name="color"
                                    value={formData.color}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-3"
                                >
                                    <option value="">Nothing Selected</option>

                                    {colors.map((item) => (
                                        <option key={item}>{item}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Product Type */}

                            <div>
                                <label className="font-semibold mb-2 block">
                                    Select Product Type
                                </label>

                                <select
                                    name="productType"
                                    value={formData.productType}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-3"
                                >
                                    <option value="">Nothing Selected</option>

                                    {productTypes.map((item) => (
                                        <option key={item}>{item}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Best Selling */}

                            <div>
                                <label className="font-semibold mb-2 block">
                                    Is Best Selling
                                </label>

                                <select
                                    name="bestSelling"
                                    value={formData.bestSelling}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-3"
                                >
                                    <option value="">Nothing Selected</option>

                                    {yesNo.map((item) => (
                                        <option key={item}>{item}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Top Rated */}

                            <div>
                                <label className="font-semibold mb-2 block">
                                    Is Top Rated
                                </label>

                                <select
                                    name="topRated"
                                    value={formData.topRated}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-3"
                                >
                                    <option value="">Nothing Selected</option>

                                    {yesNo.map((item) => (
                                        <option key={item}>{item}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Upsell */}

                            <div>
                                <label className="font-semibold mb-2 block">
                                    Is Upsell
                                </label>

                                <select
                                    name="upSell"
                                    value={formData.upSell}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-3"
                                >
                                    <option value="">Nothing Selected</option>

                                    {yesNo.map((item) => (
                                        <option key={item}>{item}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Actual Price */}

                            <div>
                                <label className="font-semibold mb-2 block">
                                    Actual Price
                                </label>

                                <input
                                    type="number"
                                    name="actualPrice"
                                    placeholder="Actual Price"
                                    value={formData.actualPrice}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-3"
                                />
                            </div>

                            {/* Sale Price */}

                            <div>
                                <label className="font-semibold mb-2 block">
                                    Sale Price
                                </label>

                                <input
                                    type="number"
                                    name="salePrice"
                                    placeholder="Sale Price"
                                    value={formData.salePrice}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-3"
                                />
                            </div>

                            {/* Total Stock */}

                            <div>
                                <label className="font-semibold mb-2 block">
                                    Total In Stocks
                                </label>

                                <input
                                    type="number"
                                    name="stock"
                                    placeholder="Total Stock"
                                    value={formData.stock}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-3"
                                />
                            </div>

                            {/* Order */}

                            <div>
                                <label className="font-semibold mb-2 block">
                                    Order
                                </label>

                                <input
                                    type="number"
                                    name="order"
                                    placeholder="Order"
                                    value={formData.order}
                                    onChange={handleChange}
                                    className="w-full border rounded-lg px-4 py-3"
                                />
                            </div>

                        </div>

                    </div>

                    {/* Description */}

                    <div className="mt-8">

                        <label className="font-semibold mb-2 block">
                            Description
                        </label>

                        <ReactQuill
                            theme="snow"
                            value={formData.description}
                            onChange={(value) =>
                                setFormData({
                                    ...formData,
                                    description: value,
                                })
                            }
                            className="bg-white"
                            style={{
                                height: "250px",
                                marginBottom: "70px",
                            }}
                        />

                    </div>

                    {/* Button */}

                    <button
                        type="submit"
                        className="mt-4 bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold transition"
                    >
                        Add Product
                    </button>

                </div>

            </form>

        </>
    );
}