import Image from "next/image";
import Link from "next/link";
import React from "react";

import { onest } from "@/utils/fonts";

interface ICastCard {
  profileURL: string;
  actorName: string;
  actorCharacter: string;
  imageHref: string;
}

const CastCard = ({ actorName, actorCharacter, profileURL, imageHref }: ICastCard) => {
  return (
    <div className="w-[140px] min-w-[140px] flex-none overflow-hidden rounded-xl bg-zinc-900 shadow-lg transition-transform hover:scale-102">
      <div className="relative h-[210px] w-full">
        <Link href={imageHref}>
          {profileURL ? (
            <Image
              src={profileURL}
              alt={actorName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 140px, 185px"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-zinc-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-12 w-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
          )}
        </Link>
      </div>
      <div className="p-3">
        <p className={`truncate text-sm font-bold text-white ${onest.className}`} title={actorName}>
          {actorName}
        </p>
        <p className="truncate text-xs text-zinc-400" title={actorCharacter}>
          {actorCharacter}
        </p>
      </div>
    </div>
  );
};

export default CastCard;
