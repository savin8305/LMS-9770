"use client";
import React, { FC, useState } from "react";
import Heading from "../utils/Heading";
import AdminSidebar from "../Components/Admin/sidebar/AdminSidebar";
interface Props {}

const Page: FC<Props> = () => {
  return (
    <div className="">
      <Heading
        title="Elearn-admin"
        description="Elearning is a plateform for students to learn and get help from mentor"
        keywords="program mern redux ml"
      />
      <div className="flex h-[200vh]">
        <div className="1500px:w-[16%] w-1/5">
            <AdminSidebar/>
        </div>
        <div className="w-[85%]"></div>
      </div>
    </div>
  );
};
export default Page;
