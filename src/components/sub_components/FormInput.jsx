import { types } from "@/data/message";
import { compareDate } from "@/data/validate";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export function FormInput({ isFormOpen, onClick, addNewProject }) {
  const [isDateValidate, setDateValidate] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  isFormOpen && document.getElementById("my_modal_4").showModal();
  const onSubmit = (data) => {
    if (!compareDate(data.startDate, data.endDate)) {
      setDateValidate(false);
      return;
    }
    addNewProject(data);
    document.getElementById("my_modal_4").close();
    onClick();
    reset();
    setDateValidate(true);
  };

  return (
    <>
      <dialog id="my_modal_4" className="modal text-[#393939]">
        <div className="modal-box flex flex-col">
          <form method="dialog">
            <button
              onClick={() => {
                onClick();
                reset();
              }}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <div className="flex flex-col gap-1 items-center">
            <h3 className="font-bold text-lg">
              <span>Enter New Project</span>
            </h3>
          </div>
          <form
            className="mx-auto w-[90%] flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-semibold">Position</span>
                {errors.position && (
                  <span className="text-red-500 text-sm">
                    Please Enter your Position
                  </span>
                )}
              </div>
              <input
                id="position"
                {...register("position", { required: true, min: 5 })}
                type="text"
                placeholder="Type here"
                className={
                  errors.position
                    ? "input  !ring-2 focus:outline-none !ring-red-500 border-none "
                    : "input input-bordered "
                }
                name="position"
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-semibold">Company</span>
                {errors.company && (
                  <span className="text-red-500 text-sm">
                    Please Enter your Company
                  </span>
                )}
              </div>
              <input
                {...register("company", { required: true })}
                type="text"
                placeholder="Type here"
                className={
                  errors.company
                    ? "input  !ring-2 !ring-red-500 focus:outline-none  border-none "
                    : "input input-bordered "
                }
              />
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text font-semibold">Type</span>
                {errors.type && (
                  <span className="text-red-500 text-sm">
                    Please Select your Type
                  </span>
                )}
              </div>
              <select className="select select-bordered" {...register("type")}>
                <option disabled>Pick one</option>
                {types.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </label>

            <label className="form-control">
              <div className="flex justify-between gap-6">
                <div className="flex-1">
                  <div className="label flex gap-2">
                    <span className="label-text font-medium">Start Date</span>
                    {errors.startDate && (
                      <span className="text-red-500 text-sm">
                        Date is require
                      </span>
                    )}
                  </div>
                  <input
                    {...register("startDate", {
                      required: true,
                      validate: isDateValidate ? true : "Date is not correct",
                    })}
                    type="date"
                    className={
                      errors.startDate
                        ? "input  !ring-2 !ring-red-500 focus:outline-none border-none w-full"
                        : "input input-bordered w-full"
                    }
                  />
                </div>
                <div className="flex-1">
                  <div className="label flex gap-2">
                    <span className="label-text font-medium">End Date</span>
                    {errors.endDate && (
                      <span className="text-red-500 text-sm">
                        Date is require
                      </span>
                    )}
                    {!isDateValidate && (
                      <span className="text-red-500 text-sm">
                        End &lt; Start Date
                      </span>
                    )}
                  </div>
                  <input
                    {...register("endDate", { required: true })}
                    type="date"
                    className={
                      errors.endDate || !isDateValidate
                        ? "input  !ring-2 !ring-red-500 border-none focus:outline-none w-full"
                        : "input input-bordered  w-full"
                    }
                  />
                </div>
              </div>
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Description</span>
                {errors.description && (
                  <span className="text-red-500 text-sm">
                    Please write your description
                  </span>
                )}
              </div>
              <textarea
                {...register("description", { required: true })}
                className={
                  errors.description
                    ? "textarea textarea-bordered h-24 !ring-2 !ring-red-500 border-none focus:outline-none"
                    : "textarea textarea-bordered h-24"
                }
                placeholder="Description"
              ></textarea>
            </label>

            <button type="submit" className={" btn btn-outline mt-2 self-end"}>
              Submit
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
