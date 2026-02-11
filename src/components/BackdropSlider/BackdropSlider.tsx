"use client";

import "./BackdropSlider.css";

import { Info } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { MediaItem } from "@/assets/types";
import { ENDPOINTS } from "@/constants/endpoints";
import { ubuntu } from "@/utils/fonts";

interface IBackdropSlider {
  content: MediaItem[];
}

export default function BackdropSlider({ content }: IBackdropSlider) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (content.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % content.length);
    }, 10000); // 10 segundos

    return () => clearInterval(timer);
  }, [content.length]);

  const currentContent = content[index];

  if (!currentContent || !currentContent.backdrop_path) return null;

  const imageBaseURL = "https://image.tmdb.org/t/p/original";

  const imageSrc = `${ENDPOINTS.IMAGES.BASE_URL}${ENDPOINTS.IMAGES.SIZES.BACKDROP}${currentContent.backdrop_path}`;

  const title = "title" in currentContent ? currentContent.title : currentContent.name;

  const mediaType = currentContent.media_type;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentContent.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            key={currentContent.id}
            src={imageSrc}
            alt={title || "Destaque"}
            fill
            priority
            className="animate-fade-image object-cover"
            sizes="100vw"
          />

          <div className="absolute bottom-0 z-10 h-[80vh] w-full bg-linear-to-t from-[#141414] via-[#141414]/50 to-transparent" />

          <div className="absolute inset-0 bg-linear-to-r from-[#000000] via-transparent to-transparent blur-2xl" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 flex h-full max-w-4xl flex-col justify-center space-y-4 px-8 md:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentContent.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="movie-title text-5xl font-black tracking-tighter text-white uppercase drop-shadow-2xl select-none md:text-7xl">
              {title}
            </h1>

            <p className="selection: mt-4 line-clamp-3 max-w-2xl text-lg text-gray-300 selection:bg-[#8b0000] selection:font-bold selection:text-yellow-500 md:text-xl">
              {currentContent.overview}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="border-2 border-red-500">
          <Link
            href={`/${mediaType}/${currentContent.id}`}
            className="flex w-fit flex-row gap-1 rounded-lg border-2 border-white bg-white px-6 py-2 text-black shadow-lg shadow-black"
          >
            <span>
              <Info width={32} className="antialiased" />
            </span>

            <span className={`${ubuntu.className} font-semibold`}>Ver Detalhes</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
