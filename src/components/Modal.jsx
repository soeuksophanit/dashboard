import React from "react";
import Label from "./Label";

export default function Modal({ isOpen, user, onClick }) {
  isOpen && document.getElementById("my_modal_3").showModal();
  return (
    <>
      <dialog id="my_modal_3" className="modal text-[#393939]">
        <div className="modal-box">
          <form method="dialog">
            <button
              onClick={onClick}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <div className="flex flex-col gap-6 items-center">
            <h3 className="font-bold text-lg">
              <span>{user?.company}</span>
            </h3>
            <p className="flex items-center gap-3">
              <span>Position : </span>
              <span>{user?.name}</span>
              <Label tagName={user ? user?.type : "freelance"} />
            </p>
            <p>
              <span>Duration : </span>
              <span>From </span>
              <span>{user?.startDate} to </span>
              <span>{user?.endDate}</span>
            </p>
          </div>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </>
  );
}
