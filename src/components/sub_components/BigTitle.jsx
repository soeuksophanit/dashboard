export default function BigTitle({ className, children }) {
  return (
    <p className={"text-[18px] font-bold text-[#393939] " + className}>
      {children}
    </p>
  );
}
