import { onest } from "@/utils/fonts";

interface ISelectBadge {
  genreTitle: string;
  isSelected: boolean;
  onClick: () => void;
}

const SelectBadge = ({ genreTitle, isSelected, onClick }: ISelectBadge) => {
  const selectedStyle = isSelected
    ? "bg-[#8b0000] text-gray-300 hover:text-gray-300 font-semibold border-[#8b0000] dark:text-[#d4af37] dark:hover:text-[#d4af37]"
    : "border border-[#a10000] text-[#a10000] dark:border-white dark:text-white";

  return (
    <div
      className={`flex w-fit cursor-pointer items-center justify-center rounded-xl border px-4 py-0.5 ${selectedStyle}`}
      onClick={onClick}
    >
      <span className={`${onest.className}`}>{genreTitle}</span>
    </div>
  );
};

export default SelectBadge;
