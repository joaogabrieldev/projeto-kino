"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";

import { useDebounce } from "@/hooks/useDebounce";
import { onest } from "@/utils/fonts";

interface IFilterSearchBar {
  isPersonSearch?: boolean;
}

const FilterSearchBar = ({ isPersonSearch }: IFilterSearchBar) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("q") || "";
  const [inputValue, setInputValue] = useState(initialQuery);

  const debouncedQuery = useDebounce(inputValue, 500);

  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    const sanitizedQuery = debouncedQuery.trim();

    if (sanitizedQuery) {
      const params = new URLSearchParams();
      params.set("q", sanitizedQuery);

      if (isPersonSearch) {
        router.replace(`/search/person?${params.toString()}`);
      } else {
        router.replace(`/search?${params.toString()}`);
      }
    } else {
      if (pathname.includes("/search")) {
        router.replace(isPersonSearch ? `/search/person` : `/search`);
      }
    }
  }, [debouncedQuery, isPersonSearch, pathname, router]);

  const placeholder = isPersonSearch ? "Busque por Artistas..." : "Busque por Títulos...";

  return (
    <div className="flex w-full max-w-sm items-center rounded-full border border-gray-700 bg-gray-800 px-4 py-2 transition-colors focus-within:border-gray-200">
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        className={`w-full bg-transparent text-white placeholder-gray-400 outline-none ${onest.className}`}
      />
      <FiSearch size={20} className="ml-2 text-gray-400" />
    </div>
  );
};

export default FilterSearchBar;
