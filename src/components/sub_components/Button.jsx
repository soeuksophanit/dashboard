export default function Button({ className, children, onClick }) {
  return (
    <span
      onClick={onClick}
      className={
        "inline-block py-2 px-3 bg-[#A587FA] cursor-pointer " + className
      }
    >
      {children}
    </span>
  );
}
