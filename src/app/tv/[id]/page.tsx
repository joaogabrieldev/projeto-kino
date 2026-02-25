import React, { use } from "react";

import ContentDetailsPage from "@/widgets/ContentDetailsPage/ContentDetailsPage";

interface ITVShowPage {
  params: Promise<{
    id: string;
  }>;
}

const TVShowPage = ({ params }: ITVShowPage) => {
  const { id } = use(params);

  return (
    <div className="mt-20 text-white">
      <ContentDetailsPage key={id} id={id} type="tv" />
    </div>
  );
};

export default TVShowPage;
