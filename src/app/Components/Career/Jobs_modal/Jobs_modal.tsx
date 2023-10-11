"use client";
import React from "react";

type Props = {
  item: string | object | any
};

const Jobs_modal = ({ item }: Props) => {
  console.log(item);

  return (
    <div>
      <div>
        <button
          className="text-white bg-blue-500 px-3 py-2 btn flex gap-2 items-center"
          onClick={() => {
            if (document) {
              (
                document.getElementById("my_modal_1") as HTMLFormElement
              ).showModal();
            }
          }}
        >
          Job details
        </button>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-white border-none">X</button>
            </form>
          </div>
          <h3 className="font-bold text-lg">{item?.name}</h3>
          <h1 className="text-center my-20 text-3xl font-semibold">There is no position available</h1>
        </div>
      </dialog>
    </div>
  );
};

export default Jobs_modal;
