import { useContext, useMemo, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import ImageDropzone from "../../components/ImageDropzone";

import { ParentCategoryContext } from "../../context/ParentCategoryContext";
import { SubCategoryContext } from "../../context/SubCategoryContext";
import { SubSubCategoryContext } from "../../context/SubSubCategoryContext";

export default function AddSubSubCategory() {
  const { categories } = useContext(ParentCategoryContext);
  const { subCategories } = useContext(SubCategoryContext);
  const { addSubSubCategory } = useContext(SubSubCategoryContext);

  const [image, setImage] = useState(null);
  const [parentId, setParentId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [name, setName] = useState("");
  const [order, setOrder] = useState("");

  const filteredSubCategories = useMemo(() => {
    return subCategories.filter(
      (item) => String(item.parentId) === String(parentId)
    );
  }, [parentId, subCategories]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !image ||
      !parentId ||
      !subCategoryId ||
      !name ||
      !order
    ) {
      alert("Please fill all fields");
      return;
    }

    const parent = categories.find(
      (item) => String(item.id) === String(parentId)
    );

    const subCategory = subCategories.find(
      (item) => String(item.id) === String(subCategoryId)
    );

    addSubSubCategory({
      id: Date.now(),
      image: image.preview,
      parentId,
      parentName: parent?.name,
      subCategoryId,
      subCategoryName: subCategory?.name,
      name,
      order,
      status: "Active",
    });

    alert("Sub Sub Category Added Successfully");

    setImage(null);
    setParentId("");
    setSubCategoryId("");
    setName("");
    setOrder("");
  };

  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "Sub Sub Category",
          "Add Sub Sub Category",
        ]}
      />

      <div className="bg-white rounded-lg border border-gray-300 shadow overflow-hidden">

        {/* Header */}

        <div className="bg-gray-100 border-b px-6 py-5">

          <h2 className="text-4xl font-semibold">
            Add Sub Sub Category
          </h2>

        </div>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-2 gap-8 p-6"
        >

          {/* Left */}

          <div>

            <label className="text-2xl font-medium">
              Category Image
            </label>

            <div className="mt-3">

              <ImageDropzone
                image={image}
                setImage={setImage}
              />

            </div>

          </div>

          {/* Right */}

          <div>

            {/* Parent Category */}

            <div className="mb-6">

              <label className="text-2xl font-medium">
                Parent Category Name
              </label>

              <select
                value={parentId}
                onChange={(e) => {
                  setParentId(e.target.value);
                  setSubCategoryId("");
                }}
                className="w-full border rounded-lg px-5 py-4 mt-3 outline-none"
              >

                <option value="">
                  Select Category
                </option>

                {categories.map((item) => (

                  <option
                    key={item.id}
                    value={item.id}
                  >
                    {item.name}
                  </option>

                ))}

              </select>

            </div>

            {/* Sub Category */}

            <div className="mb-6">

              <label className="text-2xl font-medium">
                Sub Category Name
              </label>

              <select
                value={subCategoryId}
                onChange={(e) =>
                  setSubCategoryId(e.target.value)
                }
                className="w-full border rounded-lg px-5 py-4 mt-3 outline-none"
              >

                <option value="">
                  Select Category
                </option>

                {filteredSubCategories.map((item) => (

                  <option
                    key={item.id}
                    value={item.id}
                  >
                    {item.name}
                  </option>

                ))}

              </select>

            </div>

            {/* Category Name */}

            <div className="mb-6">

              <label className="text-2xl font-medium">
                Category Name
              </label>

              <input
                type="text"
                placeholder="Category Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full border rounded-lg px-5 py-4 mt-3 outline-none"
              />

            </div>

            {/* Order */}

            <div className="mb-8">

              <label className="text-2xl font-medium">
                Order
              </label>

              <input
                type="number"
                placeholder="Order"
                value={order}
                onChange={(e) =>
                  setOrder(e.target.value)
                }
                className="w-full border rounded-lg px-5 py-4 mt-3 outline-none"
              />

            </div>

          </div>

          {/* Button */}

          <div>

            <button
              type="submit"
              className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-10 py-4 rounded-lg"
            >
              Add Sub Category
            </button>

          </div>

        </form>

      </div>
    </>
  );
}