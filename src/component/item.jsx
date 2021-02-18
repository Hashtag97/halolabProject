import React, { useState } from "react";
import Modal from "./modal";

const Item = (props) => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl flex-col p-5 max-w-xl">
        <div className="mb-2">
          <p className="text-gray-400 text-sl">{props.data.name}</p>
        </div>
        <div className="ml-1 mb-5">
          <p className="text-3xl">{props.data.category}</p>
        </div>
        <div className="flex mb-2 justify-between">
          <div className="flex">
            <span className="text-xl pt-2">$</span>
            <p className="text-5xl pl-1">{props.data.price}</p>
          </div>
          <div className="flex p-1">
            <button
              onClick={onClose}
              className="rounded-xl border-grey-500 border hover:bg-green-500 hover:border-green-500 duration-300 focus:outline-white"
            >
              <p className="p-2.5 text-green-400 hover:text-white">BUY</p>
            </button>
          </div>
        </div>
      </div>
      <Modal data={props.data} open={open} onClose={onClose} />
    </>
  );
};

export default Item;
