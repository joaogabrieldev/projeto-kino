"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
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
    ? "focus-within:border-yellow-500"
    : "focus-within:border-gray-200";

  return (
    <form
      onSubmit={handleSearch}
      className={`flex w-full max-w-sm items-center rounded-full border-2 border-gray-700 bg-gray-800 px-4 py-2 transition-colors ${inputBorder}`}
    >
      <input
        type="text"
        placeholder="Buscar filme (Aperte Enter)..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={`w-full bg-transparent text-white placeholder-gray-400 outline-none ${onest.className}`}
      />
      <button type="submit" className="ml-2 text-gray-400 transition-colors hover:text-white">
        <FiSearch size={20} />
      </button>
    </form>
  );
};

export default HeaderSearchBar;
