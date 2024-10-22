"use client";
import React, { useState } from "react";

const PdfUploader = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file && file.type !== "application/pdf") {
      setErrorMessage("Please upload only PDF files.");
      setFileName("");
      e.target.value = null;
    } else {
      setErrorMessage("");
      setFileName(file.name);
      console.log("File uploaded:", file.name);
    }
  };

  return (
    <div className="flex flex-row h-auto w-auto gap-5 items-center mb-10" >
      <div className="flex h-auto w-auto flex-col items-start gap-3">
        <label
          htmlFor="file-upload"
          className=" flex h-20 w-50 cursor-pointer flex-col items-center  justify-center gap-3   bg-white px-4 py-2  text-black shadow-lg dark:bg-boxdark dark:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-9"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
            />
          </svg>

          <p className="dark:text-white">UPLOAD FILE</p>
        </label>

        <input
          id="file-upload"
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
      <div>
        {errorMessage && (
          <p className="font-semibold text-red ">
            {errorMessage}
          </p>
        )}
        {fileName && (
          <p className="font-medium text-red ">
            File: {fileName}
          </p>
        )}
      </div>
    </div>
  );
};

export default PdfUploader;
