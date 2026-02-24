import Image from "next/image";
import React from "react";

import { ICastMember } from "@/assets/types/movie";
import CastCard from "@/components/CastCard/CastCard";
import { getImageURL } from "@/constants/endpoints";
import { onest } from "@/utils/fonts";

interface ICastCarouselProps {
  cast?: ICastMember[];
  title: string;
}

const CastCarousel = ({ cast, title }: ICastCarouselProps) => {
  if (!cast || cast.length === 0) {
    return null;
  }

  return (
    <section className="my-8">
      <h2
        className={`mx-auto mb-4 max-w-7xl px-4 text-2xl font-bold text-white ${onest.className} select-none`}
      >
        {title}
      </h2>

      <div className="scrollbar-hide mx-auto flex max-w-7xl gap-4 overflow-x-auto px-4 pt-2 pb-4 select-none">
        {cast.slice(0, 25).map((actor) => {
          const profileURL = actor.profile_path ? getImageURL(actor.profile_path, "w185") : null;

          return (
            <CastCard
              key={actor.id}
              profileURL={profileURL ?? ""}
              actorName={actor.name}
              actorCharacter={actor.character}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CastCarousel;
