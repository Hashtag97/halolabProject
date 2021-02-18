import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import validator from "validator";

const Modal = (props) => {
  const [isHover, setIsHover] = useState("invisible");
  const [errorName, setErrorName] = useState("border-gray-300");
  const [errorNumber, setErrorNumber] = useState("border-gray-300");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [textErrorName, setTextErrorName] = useState("");
  const [textErrorNumber, setTextErrorNumber] = useState("");

  const changeName = (srt) => setName(srt);
  const changeNumber = (srt) => setNumber(srt);

  useEffect(() => {
    if (!props.open) {
      setName("");
      setNumber("");
      setErrorName("border-gray-300");
      setErrorNumber("border-gray-300");
    }
  }, [props.open]);

  const submit = () => {
    if (
      name.length !== 0 &&
      number.length !== 0 &&
      number.match(/\d/g) !== null &&
      number.match(/\d/g).length === number.length &&
      validator.isLength(number, { min: 12 })
    ) {
      console.log(`Name -> ${name}\nNumber -> ${number}`);
    }
    if (validator.isLength(name, { min: 1 })) {
      if (name.match(/\d/g) !== null) {
        setErrorName("border-red-400");
        setTextErrorName("Only letters allowed");
      } else {
        setErrorName("border-green-300");
        setTextErrorName("");
      }
    }

    if (number.length !== 0) {
      if (number.match(/\d/g) !== null)
        if (number.match(/\d/g).length === number.length) {
          if (!validator.isLength(number, { min: 12 })) {
            setErrorNumber("border-red-400");
            setTextErrorNumber("Should contain 12 characters");
          } else {
            setErrorNumber("border-green-300");
            setTextErrorNumber("");
          }
        } else {
          setErrorNumber("border-red-400");
          setTextErrorNumber("Only numbers allowed");
        }
    }
    if (number.match(/\d/g) === null) {
      setErrorNumber("border-red-400");
      setTextErrorNumber("Only numbers allowed");
    }
    if (validator.isLength(name, { max: 0 })) {
      setErrorName("border-red-400");
      setTextErrorName("This field in required");
    }
    if (validator.isLength(number, { max: 0 })) {
      setErrorNumber("border-red-400");
      setTextErrorNumber("This field in required");
    }
  };

  if (props.open) {
    return (
      <div className="fixed inset-0 overflow-y-auto bg-black bg-opacity-50">
        <div className="grid place-items-center h-full">
          <div className="bg-white rounded-xl w-max h-min">
            <div className="relative px-9 py-12 w-80">
              <div className="absolute -top-3 -right-3">
                <button
                  className="focus:outline-none"
                  onClick={() => props.onClose()}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="20" cy="20" r="20" fill="#F2F2F2" />
                    <path
                      d="M25 15L15 25"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 15L25 25"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="mb-2">
                <p className="text-gray-400 text-sl text-center">
                  {props.data.name}
                </p>
              </div>
              <div className="mb-1">
                <p className="text-3xl text-center">{props.data.category}</p>
              </div>
              <div className="flex place-content-center mb-8">
                <span className="text-xl pt-2.5">$</span>
                <p className="text-5xl pl-1">{props.data.price}</p>
              </div>
              <div className="grid-col-1">
                <div className="">
                  <input
                    className={` p-3 w-full rounded-xl border focus:outline-none ${errorName}`}
                    name="Name"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => changeName(event.target.value)}
                  ></input>
                  <div className="h-5">
                    <p className={"text-red-500 text-xs pl-3"}>
                      {textErrorName}
                    </p>
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    className={`p-3 w-full rounded-xl border focus:outline-none ${errorNumber}`}
                    name="Number"
                    placeholder="Number"
                    value={number}
                    onChange={(event) => changeNumber(event.target.value)}
                  ></input>
                  <div className="h-5">
                    <p className={"text-red-500 text-xs pl-3"}>
                      {textErrorNumber}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => submit()}
                  onMouseEnter={() => setIsHover("visible")}
                  onMouseLeave={() => setIsHover("invisible")}
                  className="p-3 w-full rounded-xl text-white bg-green-500 border-green-500 duration-300"
                >
                  <span className="flex justify-center">
                    <p>ORDER</p>
                    <div>
                      <svg
                        className={`pt-1.5 ${isHover}`}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.16663 10H15.8333"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 4.16666L15.8333 9.99999L10 15.8333"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else return <></>;
};

export default Modal;
