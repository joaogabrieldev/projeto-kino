import { use } from "react";

import DiscoverHomePage from "@/widgets/DiscoverHomePage/DiscoverHomePage";

interface IGenericDiscoverPage {
  params: Promise<{
    type: "movie" | "tv";
  }>;
}

const GenericDiscoverPage = ({ params }: IGenericDiscoverPage) => {
  const { type } = use(params);

  return <DiscoverHomePage type={type} />;
};

export default GenericDiscoverPage;
