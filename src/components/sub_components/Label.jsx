export const getTagName = (tagName) => {
  const tag = tagName?.toLowerCase();
  return tag === "full time"
    ? "bg-[#FAE1E0] text-red-500 "
    : tag === "part time"
    ? "bg-[#F0E5FF] text-purple-500 "
    : tag === "freelance"
    ? "bg-[#FAF5C3] text-yellow-600 "
    : "";
};

export default function Label({ className, tagName }) {
  return (
    <span
      className={
        "text-[12px] cursor-pointer font-medium inline-block py-1 px-2 rounded-[32px] " +
        getTagName(tagName) +
        className
      }
    >
      {tagName}
    </span>
  );
}
