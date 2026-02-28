import { MediaItem } from "@/assets/types";
import { ENDPOINTS } from "@/constants/endpoints";
import ContentCard from "@/pieces/ContentCard/ContentCard";

interface IGridContentsProps {
  results: MediaItem[];
}

const GridContents = ({ results }: IGridContentsProps) => {
  return (
    <div className="grid gap-x-6 gap-y-8 select-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {results.map((item) => {
        if (item.media_type === "person" || !item.poster_path) return null;

        const imageSrc = `${ENDPOINTS.IMAGES.BASE_URL}${ENDPOINTS.IMAGES.SIZES.POSTER}${item.poster_path}`;

        const contentAlt = "name" in item ? item.name : item.title;

        const imageURL = `/${item.media_type}/${item.id}`;

        return (
          <ContentCard
            key={item.id}
            itemID={item.id}
            linkHref={imageURL}
            imageSrc={imageSrc}
            alt={contentAlt}
            width={250}
            height={750}
          />
        );
      })}
    </div>
  );
};

export default GridContents;
