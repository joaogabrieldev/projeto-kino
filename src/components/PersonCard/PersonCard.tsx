import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ENDPOINTS } from "@/constants/endpoints";
import { onest } from "@/utils/fonts";

export interface IPerson {
  id: number;
  name: string;
  profile_path: string | null;
  known_for_department?: string;
}

interface PersonCardProps {
  person: IPerson;
}

type TMDBDepartment =
  | "Acting"
  | "Directing"
  | "Writing"
  | "Production"
  | "Editing"
  | "Sound"
  | "Camera"
  | "Art"
  | "Costume & Make-Up"
  | "Visual Effects"
  | "Lighting"
  | "Crew"
  | "Creator"
  | (string & {});

const translateDepartment = (dept?: TMDBDepartment) => {
  const departmentMap: Record<string, string> = {
    Acting: "Atuação",
    Directing: "Direção",
    Writing: "Roteiro",
    Production: "Produção",
    Editing: "Edição",
    Sound: "Som",
    Camera: "Fotografia",
    Art: "Arte",
    "Costume & Make-Up": "Figurino e Maquiagem",
    "Visual Effects": "Efeitos Visuais",
    Lighting: "Iluminação",
    Crew: "Equipe Técnica",
    Creator: "Criação",
  };

  if (!dept) return "Artista";

  return departmentMap[dept] || dept;
};

const PersonCard = ({ person }: PersonCardProps) => {
  const image = {
    base_url: ENDPOINTS.IMAGES.BASE_URL,
    size: ENDPOINTS.IMAGES.SIZES.POSTER,
    source: person.profile_path,
  };

  const imageSrc = person.profile_path ? `${image.base_url}${image.size}${image.source}` : null;

  const imageURL = `/person/${person.id}`;

  return (
    <Link href={imageURL}>
      <div className="group relative flex cursor-pointer flex-col overflow-hidden rounded-lg bg-gray-900 shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-300">
        <div className="relative aspect-2/3 w-full overflow-hidden bg-gray-800">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={person.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-400 ease-in-out group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user-icon lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <div>
                <span className="font-semibold">Sem foto</span>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col p-4">
          <h3
            className={`truncate text-lg font-bold text-white transition-colors group-hover:text-[#c5a059] ${onest.className}`}
          >
            {person.name}
          </h3>
          <p className="text-sm text-gray-400">
            {translateDepartment(person.known_for_department)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PersonCard;
