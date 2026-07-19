import { useContext, useState } from "react";
import BreadCrumb from "../../components/BreadCrumb";
import { ColorContext } from "../../context/ColorContext";
import ColorPickerComponent from "../../components/ColorPickerComponent";

export default function AddColor() {

  const { addColor, colors } = useContext(ColorContext);

  const [name, setName] = useState("");

  const [order, setOrder] = useState("");

  const [color, setColor] = useState("#000000");

  const submit = (e) => {

    e.preventDefault();

    if (!name || !order) {

      alert("Fill all fields");

      return;
    }

    addColor({
      id: Date.now(),
      name,
      color,
      order,
      status: "Active",
    });

    setName("");
    setOrder("");
    setColor("#000000");

    alert("Color Added Successfully");
  };

  return (
    <>

      <BreadCrumb
        items={[
          "Home",
          "Colors",
          "Add",
        ]}
      />

      <div className="bg-white border rounded shadow">

        <div className="bg-gray-100 border-b px-6 py-4">

          <h2 className="text-4xl font-semibold">

            Add Colors

          </h2>

        </div>

        <form
          onSubmit={submit}
          className="p-6 space-y-8"
        >

          <div>

            <label className="font-semibold text-xl">

              Color Name

            </label>

            <input
              type="text"
              placeholder="Enter Color Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full border rounded-lg p-4"
            />

          </div>

          <div>

            <label className="font-semibold text-xl">

              Color Picker

            </label>

            <div className="mt-4">

              <ColorPickerComponent
                color={color}
                setColor={setColor}
              />

            </div>

            <p className="mt-4 text-lg font-medium">

              Selected :

              <span
                className="ml-3"
                style={{
                  color,
                }}
              >
                {color}
              </span>

            </p>

          </div>

          <div>

            <label className="font-semibold text-xl">

              Order

            </label>

            <input
              type="number"
              value={order}
              onChange={(e) => setOrder(e.target.value)}
              placeholder="Enter Order"
              className="mt-2 w-full border rounded-lg p-4"
            />

          </div>

          <button
            className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-semibold"
          >
            Add Color
          </button>

        </form>

      </div>

    </>
  );
}