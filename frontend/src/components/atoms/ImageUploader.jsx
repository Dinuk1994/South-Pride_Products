/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FileInput, Label, Button } from "flowbite-react";

export function ImageUploader( { setImages, resetImages }) {
    const [imageFiles, setImageFiles] = useState([]);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const updatedFiles = [...imageFiles, ...files];

        setImages(updatedFiles); 
        setImageFiles(updatedFiles);

        event.target.value = null; 
    };

    const handleDelete = (index) => {
        const updatedFiles = imageFiles.filter((_, i) => i !== index);
        setImageFiles(updatedFiles);
        setImages(updatedFiles);
    };

    useEffect(() => {
        if (resetImages) {
            setImageFiles([]);
            setImages([]);
        }
    }, [resetImages]); 

    return (
        <div className="flex flex-col items-center w-full">
            <Label
                htmlFor="dropzone-file"
                className="flex h-28 mobile:h-24 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
                <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                        className="mb-4 mobile:mb-1 h-8 w-8 mobile:h-6 mobile:w-6 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <FileInput
                    id="dropzone-file"
                    className="hidden"
                    onChange={handleFileChange}
                    multiple
                />
            </Label>

            <div className="mt-4 flex flex-wrap gap-4">
                {imageFiles.map((file, index) => (
                    <div key={index} className="relative w-32 h-32">
                        <img
                            src={URL.createObjectURL(file)}
                            alt={`Uploaded ${index + 1}`}
                            className="w-full h-full object-cover rounded-md"
                        />
                        <Button
                            className="absolute top-0 right-0 rounded-full p-1"
                            onClick={() => handleDelete(index)}
                        >
                            <svg
                                className="h-4 w-4 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
}
