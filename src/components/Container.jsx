export default function Container({ className, children }) {
  return <main className={"w-[1110px] mx-auto " + className}>{children}</main>;
}
