import { use } from "react";

import DiscoverHomePage from "@/widgets/DiscoverHomePage/DiscoverHomePage";

interface ISlugTVShow {
  params: Promise<{
    slug: string;
  }>;
}

const SlugTVShowPage = ({ params }: ISlugTVShow) => {
  const { slug } = use(params);

  return <DiscoverHomePage type="tv" categorySlug={slug} />;
};

export default SlugTVShowPage;
