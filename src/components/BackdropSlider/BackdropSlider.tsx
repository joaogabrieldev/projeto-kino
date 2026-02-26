"use client";

import "./BackdropSlider.css";

import { Info } from "lucide-react";
import { AnimatePresence } from "motion/react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { MediaItem } from "@/assets/types";
import { ENDPOINTS } from "@/constants/endpoints";
import { defaultSelection } from "@/utils/defaults";
import { ubuntu } from "@/utils/fonts";

interface IBackdropSlider {
  content: MediaItem[];
}

export default function BackdropSlider({ content }: IBackdropSlider) {
  const [index, setIndex] = useState(0);

  const { theme } = useTheme();

  useEffect(() => {
    if (content.length === 0) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % content.length);
    }, 10000); // 10 segundos

    return () => clearInterval(timer);
  }, [content.length]);

  const currentContent = content[index];

  if (!currentContent || !("backdrop_path" in currentContent)) return null;

  const imageSrc = `${ENDPOINTS.IMAGES.BASE_URL}${ENDPOINTS.IMAGES.SIZES.BACKDROP}${currentContent.backdrop_path}`;

  const title = "title" in currentContent ? currentContent.title : currentContent.name;

  const mediaType = currentContent.media_type;

  const isDark = theme === "dark";

  const themeSet = {
    background: isDark ? "bg-black" : "bg-[#CFCFCF]",
    fade1: isDark ? "from-[#141414] via-[#141414]/50" : "from-[#BABABA] via-[#BABABA]/30",
    fade2: isDark ? "from-[#141414] via-transparent " : "from-[#C4C4C4]/50 via-[#C4C4C4]/10",
    title: isDark ? "text-[#d4af37]" : "text-[#a10000]",
    overview: isDark ? "text-gray-300" : "text-gray-800 font-semibold",
    detailsButton: isDark
      ? "border-white bg-white text-black shadow-lg shadow-black"
      : "border-zinc-800 bg-zinc-800 px-6 py-2 text-white shadow-lg shadow-gray-400",
  };

  return (
    <section
      className={`relative z-0 h-screen w-full overflow-hidden ${themeSet.background} select-none`}
    >
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

          <div
            className={`absolute bottom-0 z-10 h-[80vh] w-full bg-linear-to-t ${themeSet.fade1} to-transparent`}
          />

          <div
            className={`absolute inset-0 bg-linear-to-r ${themeSet.fade2} to-transparent blur-2xl`}
          />
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
            <h1
              className={`movie-title text-5xl font-black tracking-tighter uppercase drop-shadow-2xl select-none md:text-7xl ${themeSet.title} `}
            >
              {title}
            </h1>

            <p
              className={`mt-4 line-clamp-3 max-w-2xl text-lg md:text-xl ${defaultSelection} ${themeSet.overview} `}
            >
              {currentContent.overview}
            </p>
          </motion.div>
        </AnimatePresence>

        <div>
          <Link
            href={`/${mediaType}/${currentContent.id}`}
            className={`flex w-fit flex-row gap-1 rounded-lg border-2 px-6 py-2 ${themeSet.detailsButton} `}
          >
            <span>
              <Info width={32} className="antialiased" />
            </span>

            <span className={`${ubuntu.className} font-semibold select-none`}>Ver Detalhes</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
