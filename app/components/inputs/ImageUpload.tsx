"use client";
import { FC, useCallback } from "react";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (values: string[]) => void; // Handler for updating image URLs
  values: string[]; // Array of image URLs
}

const ImageUpload: FC<ImageUploadProps> = ({ onChange, values }) => {
  // Ensure values is always an array
  const validValues = Array.isArray(values) ? values : [];

  const handleUpload = useCallback(
    (result: any) => {
      const newUrls = result.info.secure_url ? [result.info.secure_url] : [];
      onChange([...validValues, ...newUrls]); // Update state with new URLs
    },
    [onChange, validValues]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="lrwfkhh8"
      options={{
        maxFiles: 10,
        multiple: true, // Allow multiple file uploads
      }}
    >
      {({ open }) => (
        <div
          onClick={() => open?.()}
          className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
        >
          <TbPhotoPlus size={50} />
          <div className="font-semibold text-lg">Click to upload</div>
          <div className="flex flex-wrap gap-2">
            {validValues.map((url, index) => (
              <div key={index} className="relative w-24 h-24">
                <Image fill style={{ objectFit: "cover" }} src={url} alt={`Uploaded Image ${index}`} />
              </div>
            ))}
          </div>
        </div>
      )}
    </CldUploadWidget>
  );
};

export default ImageUpload;
