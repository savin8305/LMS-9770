import React, { useState } from "react";
import CourseInfo from "./CourseInfo";
import CourseOptions from "./CourseOptions";

type Props = {};

const CreateCourse: React.FC<Props> = (props) => {
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
  const [courseContentData, setCourseContentData] = useState([
    {
      videoUrl: "",
      title: "",
      description: "",
      videoSection: "Untitled Section",
      links: [
        {
          title: "",
          url: "",
          suggestion: "",
        },
      ],
    },
  ]);
  const [courseData, setCourseData] = useState({});
  return (
    <div className="w-full flex min-h-screen">
      <div className="w-[80%]">{active === 0 && <CourseInfo />}</div>
      <div className="w-[20%] mt-[100px] h-screen fixed z-[-1] top-18 right-0">
        <CourseOptions active={active} setActive={setActive}/>
      </div>
    </div>
  );
};

export default CreateCourse;
