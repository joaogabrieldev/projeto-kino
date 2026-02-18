"use client";

import { motion } from "motion/react";
import Link from "next/link";
import React, { useRef } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

import { hendrigo, onest } from "@/utils/fonts";
import { urlGithub, urlLinkedin } from "@/utils/links";
import { useSocialMedia } from "@/utils/utilitaries";

const Footer = () => {
  const openSocialMedia = useSocialMedia();

  return (
    <motion.footer className="static bottom-0 flex w-full max-w-full bg-[#8B0000] py-3 select-none">
      <div className={`${hendrigo.className} flex w-fit flex-col px-4 text-3xl text-yellow-500`}>
        <span className="">João</span>
        <span className="pl-6">Gabriel</span>
      </div>
      <div
        className={`w-full ${onest.className} text-md flex items-center justify-center text-yellow-500`}
      >
        <span>&copy; 2025, João Gabriel R. Rocha. Todos os direitos reservados.</span>
      </div>
      <div className="flex flex-row gap-2 px-4 pt-2">
        <span>
          <SiLinkedin
            className="h-8 w-8 cursor-pointer fill-yellow-500 transition-colors duration-200 hover:fill-yellow-600"
            onClick={() => openSocialMedia(urlLinkedin, "linkedin_tab")}
          />
        </span>
        <span>
          <SiGithub
            className="h-8 w-8 cursor-pointer fill-yellow-500 transition-colors duration-200 hover:fill-yellow-600"
            onClick={() => openSocialMedia(urlGithub, "github_tab")}
          />
        </span>
      </div>
    </motion.footer>
  );
};

export default Footer;
