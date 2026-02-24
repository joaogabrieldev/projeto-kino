import Image from "next/image";
import React from "react";

import { onest } from "@/utils/fonts";

interface IRecommendationCard {
  posterURL: string;
  movieTitle: string;
}

const RecommendationCard = ({ posterURL, movieTitle }: IRecommendationCard) => {
  return (
    <div className="w-[140px] min-w-[140px] flex-none overflow-hidden rounded-xl bg-zinc-900 shadow-lg transition-transform hover:scale-102">
      <div className="relative h-[210px] w-full bg-zinc-800">
        {posterURL ? (
          <Image
            src={posterURL}
            alt={movieTitle}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 140px, 185px"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-zinc-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-clapperboard-icon lucide-clapperboard"
            >
              <path d="m12.296 3.464 3.02 3.956" />
              <path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3z" />
              <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <path d="m6.18 5.276 3.1 3.899" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendationCard;
