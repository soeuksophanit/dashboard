import more from "@/assets/more.svg";
import SmallTitle from "./SmallTitle";
import BigTitle from "./BigTitle";
import Label from "./Label";

export default function Card({ user, children }) {
  return (
    <main className="p-3 rounded-lg shadow-sm bg-white flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <span className="text-slate-400 text-sm">{user?.startDate}</span>
        <span>
          <img
            className="w-[24px] h-24px] object-cover cursor-pointer"
            src={more}
            alt="more option"
          />
        </span>
      </div>
      <div>
        <SmallTitle>{user?.company}</SmallTitle>
        <BigTitle>{user?.name}</BigTitle>
      </div>
      <div>
        <Label tagName={user?.type} className={" font-medium"} />
      </div>
      {children}
    </main>
  );
}
