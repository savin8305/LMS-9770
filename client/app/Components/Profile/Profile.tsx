"use client";
import React, { FC, useState } from "react";
import SideBarProfile from "./SideBarProfile";
import { useLogOutQuery } from "../../../redux/features/auth/authApi";
import { signOut } from "next-auth/react";

interface Props {
  user: any;
}

const Profile: FC<Props> = ({ user }) => {
  const [scroll, setScroll] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [active, setActive] = useState(1);
  const [logout,setLogout]=useState(false)
  const {}=useLogOutQuery(undefined,{
    skip:logout ? true :false
  })
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 85) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }
  const logOutHandler = async () => {
    setLogout(true);
    await signOut();
  };
  return (
    <div className="bg-white w-full dark:bg-slate-900 flex ma-auto">
      <div
        className={` 800px:w-[310px] h-[450px] dark:bg-slate-900 bg-opacity-90 border dark:border-[#ffffff1d] rounded-[5px] shadow-sm mt-[40px] mb-[80px] sticky
     ${scroll ? "top-[120px]" : "top-[30px]"} left-[30px]`}
      >
        <SideBarProfile
          user={user}
          active={active}
          avatar={avatar}
          setActive={setActive}
          logOutHandler={logOutHandler}
        />
      </div>
    </div>
  );
};
export default Profile;