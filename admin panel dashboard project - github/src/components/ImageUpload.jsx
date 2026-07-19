import { useRef } from "react";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";

export default function ImageUpload({
  title,
  image,
  setImage,
  multiple = false,
}) {
  const inputRef = useRef();

  const openFilePicker = () => {
    inputRef.current.click();
  };

  const handleFiles = (files) => {
    if (!files.length) return;

    if (multiple) {
      const arr = [...files].map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));

      setImage(arr);
    } else {
      setImage({
        file: files[0],
        preview: URL.createObjectURL(files[0]),
      });
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleChange = (e) => {
    handleFiles(e.target.files);
  };

  return (
    <div>
      <label className="font-semibold block mb-2">
        {title}
      </label>

      <div
        onClick={openFilePicker}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        className="border border-gray-300 rounded h-56 cursor-pointer flex items-center justify-center bg-white overflow-hidden relative"
      >
        {!multiple ? (
          image ? (
            <>
              <img
                src={image.preview}
                alt=""
                className="w-full h-full object-cover"
              />

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setImage(null);
                }}
                className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-2"
              >
                <FaTimes />
              </button>
            </>
          ) : (
            <div className="text-center text-gray-400">
              <FaCloudUploadAlt
                className="mx-auto text-6xl mb-4"
              />

              <p className="text-2xl">
                Drag and Drop
              </p>
            </div>
          )
        ) : (
          <div className="w-full h-full p-3 overflow-auto">
            {image.length === 0 ? (
              <div className="text-center text-gray-400 mt-16">
                <FaCloudUploadAlt
                  className="mx-auto text-6xl mb-4"
                />

                <p className="text-2xl">
                  Drag and Drop
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-3">
                {image.map((img, index) => (
                  <div
                    key={index}
                    className="relative"
                  >
                    <img
                      src={img.preview}
                      className="w-full h-24 rounded object-cover"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setImage(
                          image.filter(
                            (_, i) => i !== index
                          )
                        )
                      }
                      className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1"
                    >
                      <FaTimes size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <input
          ref={inputRef}
          hidden
          type="file"
          multiple={multiple}
          accept="image/*"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}