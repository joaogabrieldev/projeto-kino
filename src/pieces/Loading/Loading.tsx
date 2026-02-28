import "./Loading.css";

const Loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-1/2">
      <div className="loader text-[#a10000] dark:text-[#D4AF37]"></div>
    </div>
  );
};

export default Loading;
