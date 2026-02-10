"use client";

import { Play } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { ubuntu } from "@/utils/fonts";

interface Movie {
  id: number;
  title?: string;
  name?: string;
  backdrop_path: string | null;
  overview: string;
  media_type?: "movie" | "tv";
}

export default function BackdropSlider({ movies }: { movies: Movie[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (movies.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % movies.length);
    }, 10000); // 10 segundos

    return () => clearInterval(timer);
  }, [movies.length]);

  const currentMovie = movies[index];

  if (!currentMovie || !currentMovie.backdrop_path) return null;

  const imageBaseURL = "https://image.tmdb.org/t/p/original";

  const imageSrc = `${imageBaseURL}${currentMovie.backdrop_path}`;

  const mediaType = currentMovie.media_type || (currentMovie.name ? "tv" : "movie");

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentMovie.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            key={currentMovie.id}
            src={imageSrc}
            alt={currentMovie.title || currentMovie.name || "Destaque"}
            fill
            priority
            className="animate-fade-image object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-linear-to-t from-[#141414] via-transparent to-black/40" />

          <div className="absolute inset-0 bg-linear-to-r from-[#141414] via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full max-w-4xl flex-col justify-center space-y-4 px-8 md:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMovie.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase drop-shadow-2xl select-none md:text-7xl">
              {currentMovie.title || currentMovie.name}
            </h1>

            <p className="mt-4 line-clamp-3 max-w-2xl text-lg text-gray-300 md:text-xl">
              {currentMovie.overview}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="border-2 border-red-500">
          <Link
            href={`/${mediaType}/${currentMovie.id}`}
            className="flex w-fit flex-row gap-1 border-2 border-white px-6 py-2 text-white"
          >
            <span>
              <Play width={32} />
            </span>

            <span className={`${ubuntu.className}`}>Ver Detalhes</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
