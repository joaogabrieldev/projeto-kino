"use client";

import { Moon, Sun } from "lucide-react";
import React, { useState } from "react";

const ModeButton = () => {
  const [isLight, setIsLight] = useState(false);

  return (
    <div
      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-yellow-500"
      onClick={() => setIsLight((prev) => !prev)}
    >
      <div>
        {isLight ? <Moon className="stroke-yellow-500" /> : <Sun className="stroke-yellow-500" />}
      </div>
    </div>
  );
};

export default ModeButton;
