import React from "react";
import CategoryBar from "./CategoryBar";
import Card from "./Card";
import { motion } from "framer-motion";
import Button from "./Button";
import BigTitle from "./BigTitle";
import Modal from "./Modal";
import { useState } from "react";
import { FormInput } from "./FormInput";

export default function ProjectBoard({ categories, users }) {
  const [isOpen, setOpen] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
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
      <div className="title flex justify-between items-center">
        <BigTitle>Projects</BigTitle>
        <Button
          onClick={() => setFormOpen(true)}
          className={
            " uppercase bg-slate-300 text-[#393939] rounded-md font-semibold"
          }
        >
          add new project
        </Button>
      </div>
      <div className="grid grid-cols-4 gap-[22px]">
        {categories.map((cat, index) => (
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
              length={1}
            />
          </motion.div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-[22px]">
        {users.map((user, index) => (
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
              <div className="py-4 border-t flex w-full justify-end">
                <Button
                  className={" text-white font-semibold rounded-[32px]"}
                  onClick={() => {
                    setOpen(true);
                    setCurrentUser(user);
                  }}
                >
                  See Detail
                </Button>
              </div>
              <Modal
                key={user.id}
                onClick={() => setOpen(false)}
                isOpen={isOpen}
                user={currentUser}
              />
            </Card>
          </motion.div>
        ))}
      </div>
      <FormInput isFormOpen={isFormOpen} onClick={() => setFormOpen(false)} />
    </motion.div>
  );
}
