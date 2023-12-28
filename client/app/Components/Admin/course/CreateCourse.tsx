"use client";
import React, { FC, useState } from "react";
interface Props {}

const CreateCourse = (props: Props) => {
  const [active, setActive] = useState(0);
  const [courseInfo, setCourseInfo] = useState({
    name: "",
    description: "",
    price: 0,
    estimatedPrice: 0,
    tags: "",
    level: "",
    demoUrl: "",
    thumbnail: "",
  });
  const [benefits, setBenefits] = useState([{ title: "" }]);
  const [prerequisites, setPrerequisites] = useState([{ title: "" }]);

  return (
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
      nesciunt tempore odit molestias, assumenda itaque similique soluta ducimus
      dicta qui rerum aspernatur sit ab molestiae culpa, delectus earum hic? At.{" "}
    </div>
  );
};

export default CreateCourse;
