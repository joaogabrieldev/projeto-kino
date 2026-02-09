import React, { Suspense } from "react";

import BackdropImages from "@/components/BackdropImages/BackdropImages";
import SkeletonBackdropImage from "@/components/SkeletonBackdropImage/SkeletonBackdropImage";

const Main = () => {
  return (
    <main>
      <Suspense fallback={<SkeletonBackdropImage />}>
        <BackdropImages />
      </Suspense>
    </main>
  );
};

export default Main;
