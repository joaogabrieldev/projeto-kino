"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";

import { onest } from "@/utils/fonts";

const HeaderSearchBar = ({ isScrolled }: { isScrolled: boolean }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (event: ChangeEvent) => {
    event.preventDefault();

    const sanitizedQuery = query.trim();
    if (!sanitizedQuery) return;

    const params = new URLSearchParams();
    params.set("q", sanitizedQuery);

    router.push(`/search?${params.toString()}`);
  };

  const inputBorder = isScrolled
    ? "border-3 focus-within:border-[#CC0000] dark:border-yellow-500 dark:border-2"
    : "border-3 focus-within:border-[#CC0000] dark:border-2 dark:border-gray-200";

  const buttonColor = isScrolled ? "text-[#CC0000] dark:text-yellow-500" : "text-white";

  return (
    <form
      onSubmit={handleSearch}
      className={`flex w-full max-w-sm items-center rounded-full border-gray-700 bg-gray-800 px-4 py-2 transition-colors duration-200 ease-in-out ${inputBorder}`}
    >
      <input
        type="text"
        placeholder="Buscar filme (Aperte Enter)..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        className={`w-full bg-transparent text-white placeholder-gray-400 outline-none ${onest.className}`}
      />
      <button type="submit" className={`ml-2 transition-colors ${buttonColor}`}>
        <FiSearch size={20} />
      </button>
    </form>
  );
};

export default HeaderSearchBar;
