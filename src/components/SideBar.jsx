import { side_bars } from "@/data/list_side_bar";
import React from "react";
import { useState } from "react";

export default function SideBar() {
  const [indexActive, setIndexActive] = useState(0);
  const classes =
    "w-6 h-6 cursor-pointer hover:bg-gray-200 box-content p-3 transition-all duration-300 rounded-full ";
  return (
    <main className="row-[2/3] col-[1/2] mt-[64px]">
      <aside className="flex flex-col gap-4 items-center">
        {side_bars.map((sidebar, index) => (
          <svg
            onClick={() => setIndexActive(index)}
            key={sidebar.id}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={
              indexActive == index
                ? classes + " bg-gray-200 fill-[#393939] stroke-slate-200"
                : classes
            }
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={sidebar.d} />
          </svg>
        ))}
      </aside>
    </main>
  );
}
