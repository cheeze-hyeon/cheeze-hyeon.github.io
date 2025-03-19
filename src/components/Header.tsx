"use client";

import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
export default function Header() {
  const router = useRouter();

  return (
    <header className="p-4">
      <IoIosArrowBack
        size={28}
        className="cursor-pointer text-gray-700"
        onClick={() => router.back()}
      />
    </header>
  );
}
