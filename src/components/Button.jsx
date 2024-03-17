export default function Button({ className, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={"inline-block py-2 px-3 bg-[#A587FA] " + className}
    >
      {children}
    </button>
  );
}
