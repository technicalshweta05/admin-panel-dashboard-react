import { useContext, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import ImageDropzone from "../../components/ImageDropzone";
import { ParentCategoryContext } from "../../context/ParentCategoryContext";
import { SubCategoryContext } from "../../context/SubCategoryContext";

export default function AddSubCategory() {

  const { categories } = useContext(ParentCategoryContext);

  const { addSubCategory } = useContext(SubCategoryContext);

  const [image, setImage] = useState(null);

  const [parentId, setParentId] = useState("");

  const [name, setName] = useState("");

  const [order, setOrder] = useState("");

  const submit = (e) => {

    e.preventDefault();

    if (
      !image ||
      !parentId ||
      !name ||
      !order
    ) {
      alert("Please fill all fields");
      return;
    }

    addSubCategory({
      id: Date.now(),
      image: image.preview,
      parentId,
      parentName: categories.find(
        (item) => item.id == parentId
      )?.name,
      name,
      order,
      status: "Active",
    });

    alert("Sub Category Added");

    setImage(null);
    setParentId("");
    setName("");
    setOrder("");
  };

  return (
    <>
      <BreadCrumb
        items={[
          "Home",
          "Sub Category",
          "Add",
        ]}
      />

      <div className="bg-white border rounded-lg shadow overflow-hidden">

        <div className="bg-gray-100 border-b px-6 py-5">

          <h2 className="text-4xl font-semibold">

            Add Sub Category

          </h2>

        </div>

        <form
          onSubmit={submit}
          className="grid lg:grid-cols-2 gap-8 p-6"
        >

          <div>

            <label className="text-xl font-semibold">

              Category Image

            </label>

            <div className="mt-3">

              <ImageDropzone
                image={image}
                setImage={setImage}
              />

            </div>

          </div>

          <div>

            <div className="mb-6">

              <label className="text-xl font-semibold">

                Parent Category Name

              </label>

              <select
                value={parentId}
                onChange={(e) =>
                  setParentId(e.target.value)
                }
                className="w-full border rounded-lg p-4 mt-3"
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

            <div className="mb-6">

              <label className="text-xl font-semibold">

                Category Name

              </label>

              <input
                type="text"
                placeholder="Category Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className="w-full border rounded-lg p-4 mt-3"
              />

            </div>

            <div>

              <label className="text-xl font-semibold">

                Order

              </label>

              <input
                type="number"
                placeholder="Category Order"
                value={order}
                onChange={(e) =>
                  setOrder(e.target.value)
                }
                className="w-full border rounded-lg p-4 mt-3"
              />

            </div>

          </div>

          <div>

            <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold">

              Add Sub Category

            </button>

          </div>

        </form>

      </div>
    </>
  );
}