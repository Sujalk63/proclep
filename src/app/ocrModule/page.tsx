"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import PdfUploader from "@/components/pdf uploader/PdfUploader";
import TableFour from "@/components/Tables/TableFour";
import TableOne from "@/components/Tables/TableOne";
import TableTwo from "@/components/Tables/TableTwo";
import TableThree from "@/components/Tables/TableThree";


// export const metadata: Metadata = {
//   title: "Next.js Profile | TailAdmin - Next.js Dashboard Template",
//   description:
//     "This is Next.js Profile page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
// };

const Profile = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-242.5">
        <Breadcrumb pageName="OCR Module" />
        <PdfUploader></PdfUploader>
        <TableOne></TableOne>
        <TableTwo></TableTwo>
        <TableThree></TableThree>
        <TableFour></TableFour>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
