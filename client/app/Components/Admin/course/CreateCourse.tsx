import React, { useState } from "react";
import CourseInfo from "./CourseInfo";
import CourseOptions from "./CourseOptions";
import CourseData from "./CourseData";
import CourseContent from "./CourseContent";

type Props = {};

const CreateCourse: React.FC<Props> = (props) => {
  const [active, setActive] = useState(2);

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
  const handleCourseSubmit=async ()=>{

  }
  return (
    <div className="w-full flex min-h-screen">
      <div className="w-[80%]">
        {active === 0 && (
          <CourseInfo
            courseInfo={courseInfo}
            setCourseInfo={setCourseInfo}
            active={active}
            setActive={setActive}
          />
        )}
        {active === 1 && (
          <CourseData
            benefits={benefits}
            setBenefits={setBenefits}
            prerequisites={prerequisites}
            setPrerequisites={setPrerequisites}
            active={active}
            setActive={setActive}
          />
        )}
        {active === 2 && (
          <CourseContent
          active={active}
          setActive={setActive}
          courseContentData={courseContentData}
          setCourseContentData={setCourseContentData}
          handleSubmit={handleCourseSubmit}
          />
        )}
      </div>
      <div className="w-[20%] mt-[100px] h-screen fixed z-[-1] top-18 right-0">
        <CourseOptions active={active} setActive={setActive} />
      </div>
    </div>
  );
};

export default CreateCourse;
