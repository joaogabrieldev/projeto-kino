import { Star } from "lucide-react";

export interface IStarProps {
  key?: number;
  width: number;
}

const StarFilled = ({ key, width }: IStarProps) => {
  return <Star key={key} width={width} className="fill-yellow-400 text-yellow-400" />;
};

export default StarFilled;
