import { use } from "react";

import SearchHomePage from "@/widgets/SearchHomePage/SearchHomePage";

interface ISearchPage {
  searchParams: Promise<{
    q?: string;
  }>;
}

const SearchPage = ({ searchParams }: ISearchPage) => {
  const { q } = use(searchParams);

  if (!q) {
    return (
      <div className="mt-40 flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl font-bold">O que você quer assistir hoje?</h1>
        <p className="mt-2 text-gray-400">
          Use a barra de pesquisa no topo para buscar filmes ou séries.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-30 flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl font-bold text-gray-500 dark:text-white">
        Resultados para:{" "}
        <span className="text-[#850000] dark:text-yellow-500">&quot;{q}&quot;</span>
      </h1>

      <SearchHomePage query={q} />
    </div>
  );
};

export default SearchPage;
