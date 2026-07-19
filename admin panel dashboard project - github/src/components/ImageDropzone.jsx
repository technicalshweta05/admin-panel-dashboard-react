import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaCloudUploadAlt } from "react-icons/fa";

export default function ImageDropzone({
  image,
  setImage,
}) {
  const onDrop = useCallback((acceptedFiles) => {

    const file = acceptedFiles[0];

    if (!file) return;

    setImage({
      file,
      preview: URL.createObjectURL(file),
    });

  }, [setImage]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
  } = useDropzone({

    accept: {
      "image/*": [],
    },

    multiple: false,

    onDrop,

  });

  return (
    <div>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg cursor-pointer
        h-[320px] flex flex-col justify-center items-center
        transition

        ${
          isDragActive
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300"
        }`}
      >

        <input {...getInputProps()} />

        {image ? (

          <img
            src={image.preview}
            alt=""
            className="h-full w-full object-contain rounded-lg"
          />

        ) : (

          <>

            <FaCloudUploadAlt
              className="text-7xl text-gray-300"
            />

            <h2 className="text-3xl text-gray-400 mt-4">

              Drag and drop

            </h2>

            <p className="text-gray-400 mt-2">

              or click to upload

            </p>

          </>

        )}

      </div>

    </div>
  );
}