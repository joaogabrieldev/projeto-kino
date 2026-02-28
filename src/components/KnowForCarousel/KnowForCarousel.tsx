import Image from "next/image";
import Link from "next/link";

import { IPersonCastCredit } from "@/assets/types/person";
import { getImageURL } from "@/constants/endpoints";
import { onest } from "@/utils/fonts";

interface IKnownForCarouselProps {
  credits?: IPersonCastCredit[];
  title?: string;
}

const KnownForCarousel = ({ credits, title = "Conhecido(a) por" }: IKnownForCarouselProps) => {
  if (!credits || credits.length === 0) {
    return null;
  }

  return (
    <section className="my-8">
      <h2
        className={`mx-auto mb-4 max-w-7xl px-4 text-2xl font-bold text-[#a10000] dark:text-white ${onest.className} select-none`}
      >
        {title}
      </h2>

      <div className="scrollbar-hide mx-auto flex max-w-7xl gap-4 overflow-x-auto px-4 pt-2 pb-4 select-none">
        {credits.slice(0, 25).map((item) => {
          const posterURL = item.poster_path ? getImageURL(item.poster_path, "w185") : null;

          const displayName = item.title || item.name || "Desconhecido";

          const linkHref = `/${item.media_type}/${item.id}`;

          return (
            <Link
              href={linkHref}
              key={`${item.id}-${displayName}`}
              className="group flex w-[140px] shrink-0 flex-col overflow-hidden rounded-lg bg-zinc-900 shadow-md transition-transform duration-300 hover:scale-105 md:w-[160px]"
            >
              <div className="relative aspect-[2/3] w-full">
                {posterURL ? (
                  <Image
                    src={posterURL}
                    alt={displayName}
                    fill
                    className="object-cover"
                    sizes="160px"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs text-zinc-500">
                    Sem Pôster
                  </div>
                )}
              </div>

              <div className="p-3">
                <p className="truncate text-sm font-bold text-white" title={displayName}>
                  {displayName}
                </p>
                {item.character && (
                  <p className="truncate text-xs text-zinc-400" title={item.character}>
                    {item.character}
                  </p>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default KnownForCarousel;
