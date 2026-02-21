"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

import { useDebounce } from "@/hooks/useDebounce";
import { onest } from "@/utils/fonts";

const FilterSearchBar = () => {
  const router = useRouter();

  const [inputValue, setInputValue] = useState("");

  const debouncedQuery = useDebounce(inputValue, 500);

  useEffect(() => {
    const sanitizedQuery = debouncedQuery.trim();

    if (sanitizedQuery) {
      const params = new URLSearchParams();
      params.set("q", sanitizedQuery);

      router.replace(`/search?${params.toString()}`);
    } else {
    }
  }, [debouncedQuery, router]);

  return (
    <div className="flex w-full max-w-sm items-center rounded-full border border-gray-700 bg-gray-800 px-4 py-2 transition-colors focus-within:border-gray-200">
      <input
        type="text"
        placeholder="Busque por Títulos"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        className={`w-full bg-transparent text-white placeholder-gray-400 outline-none ${onest.className}`}
      />
      <FiSearch size={20} className="ml-2 text-gray-400" />
    </div>
  );
};

export default FilterSearchBar;
