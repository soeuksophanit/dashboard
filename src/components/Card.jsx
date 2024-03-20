import more from "@/assets/more.svg";
import SmallTitle from "./sub_components/SmallTitle";
import BigTitle from "./sub_components/BigTitle";
import Label from "./sub_components/Label";

export default function Card({ user, children }) {
  return (
    <main className="p-3 rounded-[22px] shadow-sm bg-white flex flex-col gap-3 h-auto duration-300 hover:scale-[0.99]">
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
        <BigTitle className={" line-clamp-2"}>{user?.name}</BigTitle>
      </div>
      <div>
        <Label tagName={user?.type} className={" font-medium"} />
      </div>
      {children}
    </main>
  );
}
