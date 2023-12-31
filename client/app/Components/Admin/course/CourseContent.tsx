import React, { FC, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { styles } from "@/app/styles/styles";

type Props = {
  active: number;
  setActive: (active: number) => void;
  courseContentData: any;
  setCourseContentData: (courseContentData: any) => void;
  handleSubmit: any;
};

const CourseContent: FC<Props> = ({
  courseContentData,
  setCourseContentData,
  active,
  setActive,
  handleSubmit: handleCourseSubmit,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(
    Array(courseContentData.length).fill(false)
  );
  const [activeSection, setActiveSection] = useState(1);

  const handleSubmit = (e: any) => {
    // Add your form submission logic here
  };

  const handleCollapseToggle = (index: number) => {
    const updatedCollapseState = [...isCollapsed];
    updatedCollapseState[index] = !updatedCollapseState[index];
    setIsCollapsed(updatedCollapseState);
  };

  const handleRemovalLink = (index: number, linkIndex: number) => {
    const updatedData = [...courseContentData];
    updatedData[index].links.splice(linkIndex, 1);
    setCourseContentData(updatedData);
  };

  return (
    <div className="w-[80%] m-auto mt-24 p-3">
      <form onSubmit={handleSubmit}>
        {courseContentData?.map((item: any, index: number) => (
          <div
            key={index}
            className={`w-full bg-[#cdc8c817] p-4 ${
              index === 0 || item.videoSection !== courseContentData[index - 1].videoSection
                ? "mt-18"
                : "mb-0"
            }`}
          >
            {index === 0 || item.videoSection !== courseContentData[index - 1].videoSection ? (
              <>
                <div className="flex w-full items-center"></div>
                <div className="flex items-center">
                  <input
                    type="text"
                    className={`text-[20px] ${
                      item.videoSection === "Untitled Section" ? "w-[170px]" : "w-min"
                    } font-Poppins cursor-pointer dark:text-white text-black bg-transparent outline-none`}
                    value={item.videoSection}
                    onChange={(e) => {
                      const updatedData = [...courseContentData];
                      updatedData[index].videoSection = e.target.value;
                      setCourseContentData(updatedData);
                    }}
                  />
                  <BsPencil className="ml-2 cursor-pointer dark:text-white text-black" />
                </div>
              </>
            ) : null}

            <div className="flex w-full items-center justify-between my-0">
              {isCollapsed[index] ? (
                <>
                  {item.title ? (
                    <p className="font-Poppins dark:text-white text-black">
                      {index + 1}. {item.title}
                    </p>
                  ) : null}
                </>
              ) : (
                <div></div>
              )}
              <div className="flex items-center">
                {/* Delete button */}
                <AiOutlineDelete
                  className={`dark:text-white text-[20px] mr-2 ☐ text-black ${
                    index > 0 ? "cursor-pointer" : "cursor-no-drop"
                  }`}
                  onClick={() => {
                    if (index > 0) {
                      const updatedData = [...courseContentData];
                      updatedData.splice(index, 1);
                      setCourseContentData(updatedData);
                    }
                  }}
                />

                {/* Arrow button */}
                <MdOutlineKeyboardArrowDown
                  fontSize="large"
                  className="dark:text-white ☐ text-black"
                  style={{
                    transform: isCollapsed[index] ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                  onClick={() => handleCollapseToggle(index)}
                />
              </div>
            </div>
            {!isCollapsed[index] ? (
              <>
                <div className="my-3">
                  <label className={styles.label}>Video Title</label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="Project Plan..."
                      className={`${styles.input}`}
                      value={item.title}
                      onChange={(e) => {
                        const updatedData = [...courseContentData];
                        updatedData[index].title = e.target.value;
                        setCourseContentData(updatedData);
                      }}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className={styles.label}>Video Url</label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      placeholder="sdder"
                      className={`${styles.input}`}
                      value={item.videoUrl}
                      onChange={(e) => {
                        const updatedData = [...courseContentData];
                        updatedData[index].videoUrl = e.target.value;
                        setCourseContentData(updatedData);
                      }}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className={styles.label}></label>

                  <textarea
                    rows={10}
                    cols={30}
                    placeholder="Enter description..."
                    className={`${styles.input} h-min`}
                    value={item.description}
                    onChange={(e) => {
                      const updatedData = [...courseContentData];
                      updatedData[index].description = e.target.value;
                      setCourseContentData(updatedData);
                    }}
                  />
                  <br />
                </div>
                {item?.links.map((link: any, linkIndex: number) => (
                  <div className="mb-3 block" key={linkIndex}>
                    <div className="w-full flex items-center justify-between">
                      <label className={styles.label}>Link {linkIndex + 1}</label>
                      <AiOutlineDelete
                        className={`${
                          linkIndex === 0 ? "cursor-no-drop" : "cursor-pointer"
                        } text-black dark:text-white text-[20px]`}
                        onClick={() =>
                          linkIndex === 0 ? null : handleRemovalLink(index, linkIndex)
                        }
                      /> 
                    </div>
                    <input
                      type="text"
                      placeholder="Source Code... (Link title)"
                      className={`${styles.input}`}
                      value={link.title}
                      onChange={(e) => {
                        const updatedData = [...courseContentData];
                        updatedData[index].links[linkIndex].title = e.target.value;
                        setCourseContentData(updatedData);
                      }}
                    />
                    <input
                      type="url"
                      placeholder="Source Code Url... (Link URL)"
                      className={`${styles.input} mt-6`}
                      value={link.url}
                      onChange={(e) => {
                        const updatedData = [...courseContentData];
                        updatedData[index].links[linkIndex].url = e.target.value;
                        setCourseContentData(updatedData);
                      }}
                    />
                  </div>
                ))}
              </>
            ) : null}
          </div>
        ))}
      </form>
    </div>
  );
};

export default CourseContent;
