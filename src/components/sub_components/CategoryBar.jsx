export const getBgColor = (cateName) => {
  const cate = cateName?.toLowerCase();
  return cate == "finish project"
    ? "bg-primarypurple  text-white"
    : cate == "upcoming"
    ? "bg-secondarypurple text-white"
    : cate == "total project"
    ? "bg-primarypink text-white"
    : cate == "in progress"
    ? "bg-primaryred text-white"
    : "";
};

export default function CategoryBar({ className, svgIcon, length, cateName }) {
  return (
    <main
      className={
        "py-1 px-2 flex gap-2 items-center rounded-md " +
        getBgColor(cateName) +
        className
      }
    >
      <img
        className="w-[28px] h-[28px] object-cover p-1 bg-white rounded-md"
        src={svgIcon}
      />

      <div className="flex flex-col justify-between">
        <p className="text-[14px] font-semibold">{cateName}</p>
        <p className="font-medium text-[12px]">{length}</p>
      </div>
    </main>
  );
}
