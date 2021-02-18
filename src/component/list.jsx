import React, { useState } from "react";
import Item from "./item";
import Modal from "./modal";
import _ from "lodash";
const List = (props) => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  const modalLowPrice = (isopen) => {
    const minPrice = Math.min(..._.map(props.data, (item) => item.price));
    const item = _.find(props.data, (item) => item.price === minPrice);
    return <Modal data={item} open={isopen} onClose={onClose} />;
  };

  return (
    <>
      <div className="p-5">
        <div className="mb-12 grid gap-8 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
          {props.data.map((item, key) => (
            <Item key={key} data={item} />
          ))}
        </div>
        <div className="grid justify-items-stretch">
          <button
            onClick={() => onClose()}
            className="justify-self-center bg-white rounded-xl border-gray-200 border py-3 px-12 text-xl hover:bg-green-400 hover:text-white hover:border-green-400 duration-300"
          >
            Buy cheapest
          </button>
          {modalLowPrice(open)}
        </div>
      </div>
    </>
  );
};

export default List;
