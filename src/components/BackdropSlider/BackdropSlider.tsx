"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Movie {
  id: number;
  title?: string;
  name?: string;
  backdrop_path: string | null;
  overview: string;
}

export default function BackdropSlider({ movies }: { movies: Movie[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (movies.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 6000); // 6 segundos por imagem

    return () => clearInterval(timer);
  }, [movies.length]);

  const currentMovie = movies[index];

  if (!currentMovie || !currentMovie.backdrop_path) return null;

  const imageBaseURL = "https://image.tmdb.org/t/p/original";
  const imageSrc = `${imageBaseURL}${currentMovie.backdrop_path}`;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          key={currentMovie.id}
          src={imageSrc}
          alt={currentMovie.title || currentMovie.name || "Destaque"}
          fill
          priority
          className="animate-in fade-in object-cover opacity-60 duration-1000"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#141414] via-transparent to-black/40" />
        <div className="absolute inset-0 bg-linear-to-r from-[#141414] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex h-full max-w-4xl flex-col justify-center space-y-4 px-8 md:px-16">
        <h1
          key={`title-${currentMovie.id}`}
          className="animate-in slide-in-from-bottom-5 fade-in text-5xl font-black tracking-tighter text-white uppercase drop-shadow-2xl duration-700 md:text-8xl"
        >
          {currentMovie.title || currentMovie.name}
        </h1>
        <p
          key={`desc-${currentMovie.id}`}
          className="animate-in slide-in-from-bottom-5 fade-in line-clamp-3 max-w-2xl text-lg text-gray-300 delay-100 duration-1000 md:text-xl"
        >
          {currentMovie.overview}
        </p>
      </div>
    </section>
  );
}
