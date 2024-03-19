import React from "react";
import SmallTitle from "./SmallTitle";
import more from "@/assets/more.svg";
import { useState } from "react";
import { useEffect } from "react";
import { SkeletonMessage } from "./Skeleton";
import { motion } from "framer-motion";
import { useMessage } from "@/hooks/useMessage";

export default function Messages() {
  const [isLoading, setLoading] = useState(true);
  const { message, setMessage } = useMessage();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-between py-3">
        <p className="font-semibold">Client Message</p>
        <img src={more} alt="more" className="w-[24px] h-[24px] " />
      </div>
      <div className="h-[530px]  overflow-y-scroll">
        {isLoading &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((s) => <SkeletonMessage key={s} />)}
        {!isLoading &&
          message.map((p, index) => (
            <motion.main
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8 + index / 3,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="grid grid-cols-[auto_1fr] gap-3 items-center w-[350px] border-b py-3"
            >
              <aside className="grid grid-cols-[auto_1fr] gap-3">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-[50px] h-[50px] rounded-full object-cover"
                />
                <article className="flex flex-col">
                  <section className="flex items-center justify-between">
                    <SmallTitle className={" font-semibold text-[16px]"}>
                      {p.name}
                    </SmallTitle>
                    <svg
                      onClick={() =>
                        setMessage(
                          message.map((m) =>
                            m.id === p.id ? { ...m, like: !p.like } : m
                          )
                        )
                      }
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={
                        p.like === false
                          ? "w-[16px] h-[16px] cursor-pointer"
                          : "w-[16px] h-[16px] cursor-pointer fill-[#393939]"
                      }
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />
                    </svg>
                  </section>
                  <p className="text-slate-500 text-[14px]">{p.message}</p>
                  <p className="self-end text-slate-500 text-[14px]">
                    {p.date}
                  </p>
                </article>
              </aside>
            </motion.main>
          ))}
      </div>
    </div>
  );
}
