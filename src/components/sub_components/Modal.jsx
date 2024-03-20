import React from "react";
import Label, { getTagName } from "./Label";
import { useEffect } from "react";

export default function Modal({ isOpen, user, onClick }) {
  useEffect(() => {
    isOpen && document.getElementById("my_modal_3").showModal();
  });
  return (
    <>
      <dialog id="my_modal_3" className="modal !text-[#393939]">
        <div className={"modal-box " + getTagName(user?.type)}>
          <form method="dialog">
            <button
              onClick={onClick}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <div className="flex flex-col gap-1 items-start text-[#393939]">
            <h3 className="font-bold text-lg">
              <span>{user?.company} Company</span>
            </h3>
            <p className="flex items-center gap-3">
              <span className="font-semibold !text-[#393939]">Position : </span>
              <span>{user?.name}</span>
              <Label
                tagName={user ? user?.type : "freelance"}
                className={" bg-white"}
              />
            </p>
            <p>
              <span className="font-semibold !text-[#393939]">Duration : </span>
              <span>From </span>
              <span>{user?.startDate} to </span>
              <span>{user?.endDate}</span>
            </p>
            <p>
              <span className="font-semibold !text-[#393939]">
                Decription :
              </span>
              <span> {user?.detail}</span>
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}
