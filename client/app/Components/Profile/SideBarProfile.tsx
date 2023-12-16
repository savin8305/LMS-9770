"use client";
import Image from "next/image";
import React, { FC, useState } from "react";
import avatarDefault from "../../../public/client-3.webp";
import {RiLockPasswordLine } from "react-icons/ri"
import {SiCoursera} from "react-icons/si"
import { AiOutlineLogout } from "react-icons/ai";
import { PiCertificateFill } from "react-icons/pi";

interface Props {
  user: any;
  active: number;
  avatar: string | null;
  setActive: (active: number) => void;
  logOutHandler: any;
}

const SideBarProfile: FC<Props> = ({
  user,
  active,
  avatar,
  setActive,
  logOutHandler,
}) => {
  return (
    <div className=" w-full">
      <div
        className={` w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 1 ? "bg-slate-100 dark:bg-slate-800" : "bg-transparent"
        }`}
        onClick={() => setActive(1)}
      >
        <Image
          src={user.avatar || avatar ? user.avatar || avatar : avatarDefault}
          alt={"profileavatar"}
          className="w-[30px] h-[30px] 800px:w-[30px] cursor-pointer rounded-full"
        />
        <h5 className="text-center pl-2 800px:block hidden font-Poppins text-blue-950 bold text-[18px] font-[100] dark:text-white light:text-balck">
          My Account
        </h5>
      </div>
      <div
        className={` w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 1 ? "bg-white dark:bg-slate-900" : "bg-transparent"
        }`}
        onClick={() => setActive(1)}
      >
       <RiLockPasswordLine size={20} fill="#E97451"/>
        <h5 className="fade-In-Up text-center pl-3 800px:block hidden font-Poppins text-blue-950 bold text-[18px] font-[100] dark:text-white light:text-balck">
          Change PassWord
        </h5>
      </div>
      <div
        className={`activity w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 1 ? "bg-white dark:bg-slate-900" : "bg-transparent"
        }`}
        onClick={() => setActive(1)}
      >
       <SiCoursera size={20} fill="#E97451"/>
        <h5 className="text-center pl-3 800px:block hidden font-Poppins text-blue-950 bold text-[18px] font-[100] dark:text-white light:text-balck">
          Enrolled Courses
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 1 ? "bg-white dark:bg-slate-900" : "bg-transparent"
        }`}
        onClick={() => setActive(1)}
      >
       <PiCertificateFill size={20} fill="#E97451"/>
        <h5 className="text-center pl-2 800px:block hidden font-Poppins text-blue-950 bold text-[18px] font-[100] dark:text-white light:text-balck">
          Certificate
        </h5>
      </div>
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 1 ? "bg-white dark:bg-slate-900" : "bg-transparent"
        }`}
        onClick={() => logOutHandler()}
      >
       <AiOutlineLogout size={20} fill="#E97451"/>
        <h5 className="text-center pl-2 800px:block hidden font-Poppins text-blue-950 bold text-[18px] font-[100] dark:text-white light:text-balck">
          LogOut
        </h5>
      </div>
    </div>
  );
};
export default SideBarProfile;
