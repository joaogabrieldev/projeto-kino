import React, { Suspense } from "react";

import BackdropImages from "@/components/BackdropImages/BackdropImages";
import SkeletonBackdropImage from "@/components/SkeletonBackdropImage/SkeletonBackdropImage";

import ContentCarousels from "../../widgets/ContentCarousels/ContentCarousels";

const Main = () => {
  return (
    <main>
      <Suspense fallback={<SkeletonBackdropImage />}>
        <BackdropImages />
      </Suspense>
      <ContentCarousels />
    </main>
  );
};

export default Main;
