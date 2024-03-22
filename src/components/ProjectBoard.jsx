import React from "react";
import CategoryBar from "./sub_components/CategoryBar";
import Card from "./Card";
import { motion } from "framer-motion";
import Button from "./sub_components/Button";
import BigTitle from "./sub_components/BigTitle";
import Modal from "./sub_components/Modal";
import { useState } from "react";
import { FormInput } from "./sub_components/FormInput";
import { useEffect } from "react";
import { SkeletonCard, SkeletonEvent } from "./sub_components/Skeleton";

export default function ProjectBoard({ categories, users, addNewProject }) {
  const [isOpen, setOpen] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="flex flex-col gap-[22px] p-[32px] bg-[#F0F0F5] rounded-tl-[32px] rounded-tr-[32px]"
    >
      <div className="title flex justify-between items-center max-[930px]:flex-col max-[930px]:gap-6  ">
        <BigTitle>Projects</BigTitle>
        <Button
          onClick={() => setFormOpen(true)}
          className={
            " uppercase bg-slate-300 text-[#393939] max-[930px]:w-full rounded-md font-semibold hover:bg-slate-200 duration-200 hover:text-indigo-400"
          }
        >
          add new project
        </Button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,auto))] gap-[22px]">
        {isLoading &&
          [1, 2, 3, 4].map((eventTask) => <SkeletonEvent key={eventTask} />)}
        {!isLoading &&
          categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, x: -20 * index }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8 + index / 3,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <CategoryBar
                className={" "}
                key={cat.id}
                cateName={cat.cateName}
                svgIcon={cat.svgIcon}
                length={users.length}
              />
            </motion.div>
          ))}
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,auto))] gap-[22px] h-[402px] overflow-y-scroll rounded-lg">
        {isLoading &&
          [1, 2, 3, 4, 5, 6].map((skeleton) => <SkeletonCard key={skeleton} />)}
        {!isLoading &&
          users?.map((user, index) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8 + index / 100,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Card key={user.id} user={user}>
                <section className="py-4 border-t flex w-full justify-end">
                  <Button
                    className={" text-white font-semibold rounded-[32px]"}
                    onClick={() => {
                      setOpen(true);
                      setCurrentUser(user);
                    }}
                  >
                    See Detail
                  </Button>
                </section>
              </Card>
              <Modal
                onClick={() => setOpen(false)}
                isOpen={isOpen}
                user={currentUser}
              />
            </motion.div>
          ))}
      </div>
      <FormInput
        addNewProject={addNewProject}
        isFormOpen={isFormOpen}
        onClick={() => setFormOpen(false)}
      />
    </motion.div>
  );
}
