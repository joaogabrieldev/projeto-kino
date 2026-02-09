const SkeletonBackdropImage = () => {
  return (
    <section className="relative h-[85vh] w-full animate-pulse bg-[#141414]">
      <div className="absolute inset-0 bg-neutral-800" />

      <div className="absolute inset-0 bg-linear-to-t from-[#141414] via-transparent to-transparent" />

      <div className="relative z-10 flex h-full max-w-4xl flex-col justify-center space-y-6 px-8 md:px-16">
        <div className="h-16 w-3/4 rounded-md bg-neutral-700" />
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-neutral-700" />
          <div className="h-4 w-5/6 rounded bg-neutral-700" />
          <div className="h-4 w-2/3 rounded bg-neutral-700" />
        </div>
      </div>
    </section>
  );
};

export default SkeletonBackdropImage;
