export default function SmallTitle({ className, children }) {
  return (
    <p className={"text-[14px] font-medium text-[#393939] " + className}>
      {children}
    </p>
  );
}
