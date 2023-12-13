import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useFormik } from "formik";
import React, { FC, useRef, useState } from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import * as Yup from "yup";
import { styles } from "../../styles/styles";
import { Toast } from "react-hot-toast";
type Props = {
  setRoute: (route: string) => void;
};

type VerifyNumber = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
};

const Verification: FC<Props> = ({ setRoute }) => {
  const [invalidError, setInvalidError] = useState<boolean>(false);
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];
  const [verifyNumber, setverifyNumber] = useState<VerifyNumber>({
    0: "",
    1: "",
    2: "",
    3: "",
  });
  const verificationHandler = async () => {
     setInvalidError(true);
};
  const handleInputChange = (index: number, value: string) => {
    setInvalidError(false);
    const newVirifyNumber = {
      ...verifyNumber,
      [index]: value,
    };
    setverifyNumber(newVirifyNumber);
    if (value === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };
  return (
    <div>
      <h1
        className={`${styles.title} text-xl md:text-2xl lg:text-2xl font-bold mb-0 md:mb-0 text-center text-black`}
      >
        Verify Your Account
      </h1>
      <br />
      <div className="w-full flex items-center justify-center mt-0">
        <div className="w-[70px] h-[70px] rounded-full bg-[#497df2] flex items-center justify-center">
          <VscWorkspaceTrusted />
        </div>
      </div>
      <br />
      <br />
      <div className="1100px:w-[70%] m-auto flex items-center justify-around">
        {Object.keys(verifyNumber).map((key, index) => (
          <input
            type="number"
            key={key}
            ref={inputRefs[index]}
            className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex items-center text-black dark:text-white justify-center text-[18px] font-Poppins outline-none text-center 
               ${
                 invalidError
                   ? "shake border-red-500"
                   : "dark:border-white border-[#00004a]"
               }
                `}
            placeholder=""
            maxLength={1}
            value={verifyNumber[key as keyof VerifyNumber]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <br />
      <br />
      <div className="w-full flex justify-center">
        <button
          className={`${styles.button} w-full`}
          onClick={verificationHandler}
        >Submit</button>
      </div>
      <br />
      <h5 className="text-center text-black pt-2 font-Poppins text-xs md:text-sm">
        Go back to sign in
        <span
          className="text-[#2190ff] pl-1 cursor-pointer"
          onClick={() => setRoute("Login")}
        >
          Sign In
        </span>
      </h5>
    </div>
  );
};

export default Verification;
