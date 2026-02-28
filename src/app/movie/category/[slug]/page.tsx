import { use } from "react";

import DiscoverHomePage from "@/widgets/DiscoverHomePage/DiscoverHomePage";

interface ISlugMoviePage {
  params: Promise<{
    slug: string;
  }>;
}

const SlugMoviePage = ({ params }: ISlugMoviePage) => {
  const { slug } = use(params);

  return <DiscoverHomePage type="movie" categorySlug={slug} />;
};

export default SlugMoviePage;
