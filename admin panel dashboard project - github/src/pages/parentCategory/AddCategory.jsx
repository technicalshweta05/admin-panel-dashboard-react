import { useContext, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import ImageDropzone from "../../components/ImageDropzone";
import { ParentCategoryContext } from "../../context/ParentCategoryContext";

export default function AddCategory() {

  const { addCategory } = useContext(
    ParentCategoryContext
  );

  const [image, setImage] = useState(null);

  const [name, setName] = useState("");

  const [order, setOrder] = useState("");

  const submit = (e) => {

    e.preventDefault();

    if (!image || !name || !order) {

      alert("Please fill all fields");

      return;
    }

    addCategory({

      id: Date.now(),

      image: image.preview,

      name,

      order,

      status: "Active",

    });

    alert("Category Added");

    setImage(null);
    setName("");
    setOrder("");

  };

  return (
    <>

      <BreadCrumb
        items={[
          "Home",
          "Category",
          "Add",
        ]}
      />

      <div className="bg-white rounded-lg border shadow overflow-hidden">

        <div className="bg-gray-100 border-b px-6 py-5">

          <h2 className="text-4xl font-semibold">

            Add Category

          </h2>

        </div>

        <form
          onSubmit={submit}
          className="p-6 grid lg:grid-cols-2 gap-8"
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

            <div className="mb-8">

              <label className="text-xl font-semibold">

                Category Name

              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="Category Name"
                className="w-full border rounded-lg p-4 mt-3"
              />

            </div>

            <div>

              <label className="text-xl font-semibold">

                Order

              </label>

              <input
                type="number"
                value={order}
                onChange={(e) =>
                  setOrder(e.target.value)
                }
                placeholder="Order"
                className="w-full border rounded-lg p-4 mt-3"
              />

            </div>

          </div>

          <div>

            <button
              className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Add Category
            </button>

          </div>

        </form>

      </div>

    </>
  );
}