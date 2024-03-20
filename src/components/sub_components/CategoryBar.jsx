export const getBgColor = (cateName) => {
  const cate = cateName?.toLowerCase();
  return cate == "finish project"
    ? "bg-primarypurple  text-white box1"
    : cate == "upcoming"
    ? "bg-secondarypurple text-white box2"
    : cate == "total project"
    ? "bg-primarypink text-white box3"
    : cate == "in progress"
    ? "bg-primaryred text-white box4"
    : "";
};

export default function CategoryBar({ className, svgIcon, length, cateName }) {
  return (
    <main
      className={
        "py-1 px-2 flex gap-2 items-center rounded-md cursor-pointer hover:scale-[1.05] duration-300 " +
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
