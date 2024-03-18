export default function Container({ className, children }) {
  return <main className={"w-[1330px] mx-auto " + className}>{children}</main>;
}
