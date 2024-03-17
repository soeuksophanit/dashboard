import { types } from "@/data/message";
import { useData } from "@/hooks/useData";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export function FormInput({ isFormOpen, onClick }) {
  const { addNewProject, users } = useData();
  useEffect(() => {
    console.log(users);
  }, [users]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  isFormOpen && document.getElementById("my_modal_4").showModal();
  const onSubmit = (data) => {
    console.log("submit", data);
    addNewProject(data);

    console.log(users);
  };
  return (
    <>
      <dialog id="my_modal_4" className="modal text-[#393939]">
        <div className="modal-box flex flex-col">
          <form method="dialog">
            <button
              onClick={onClick}
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
          <form className="mx-auto w-[90%]" onSubmit={handleSubmit(onSubmit)}>
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
                {...register("position", { required: true })}
                type="text"
                placeholder="Type here"
                className="input input-bordered "
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
                className="input input-bordered "
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
              <div className="flex justify-between">
                <div>
                  <div className="label">
                    <span className="label-text font-medium">Start Date</span>
                  </div>
                  <input
                    {...register("startDate")}
                    type="date"
                    className="border border-[#393939] rounded-md"
                  />
                </div>
                <div>
                  <div className="label">
                    <span className="label-text font-medium">End Date</span>
                  </div>
                  <input
                    {...register("endDate")}
                    type="date"
                    className="border border-[#393939] rounded-md"
                  />
                </div>
              </div>
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                {...register("description", { required: true })}
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
              ></textarea>
            </label>

            <button type="submit" className={" btn btn-outline mt-2"}>
              Submit
            </button>
          </form>
          <p className="text-center mt-6 text-sm font-semibold  rounded-[22px] cursor-pointer">
            Click on ✕ button to close
          </p>
        </div>
      </dialog>
    </>
  );
}
