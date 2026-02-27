import Image from "next/image";
import React from "react";

import { ICastMember } from "@/assets/types/movie";
import { IPersonCastCredit } from "@/assets/types/person";
import { IAggregateCastMember } from "@/assets/types/tv";
import CastCard from "@/components/CastCard/CastCard";
import { getImageURL } from "@/constants/endpoints";
import { onest } from "@/utils/fonts";

interface ICastCarouselProps {
  cast?: (ICastMember | IAggregateCastMember | IPersonCastCredit)[];
  title: string;
}

const CastCarousel = ({ cast, title }: ICastCarouselProps) => {
  if (!cast || cast.length === 0) {
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
        {cast.slice(0, 25).map((actor) => {
          const imagePath =
            "profile_path" in actor && actor.profile_path
              ? actor.profile_path
              : "poster_path" in actor && actor.poster_path
                ? actor.poster_path
                : null;

          const imageURL = imagePath ? getImageURL(imagePath, "w185") : null;

          const displayName =
            "title" in actor && actor.title
              ? actor.title
              : "name" in actor && actor.name
                ? actor.name
                : "Desconhecido";

          const finalCharacter =
            "character" in actor
              ? actor.character
              : "roles" in actor && actor.roles.length > 0
                ? actor.roles[0].character
                : "Personagem";

          return (
            <CastCard
              imageHref={`/person/${actor.id}`}
              key={actor.id}
              profileURL={imageURL ?? ""}
              actorName={displayName}
              actorCharacter={finalCharacter}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CastCarousel;
