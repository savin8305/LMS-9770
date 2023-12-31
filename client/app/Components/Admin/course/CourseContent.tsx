import React, { FC, useState } from "react";
import { AiOutlineDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsLink45Deg, BsPencil } from "react-icons/bs";

import { styles } from "@/app/styles/styles"; // Adjust the path based on your project structure
import toast from "react-hot-toast";

type Link = {
  title: string;
  url: string;
};

type CourseItem = {
  videoSection: string;
  title: string;
  videoUrl: string;
  description: string;
  links: Link[];
};

type Props = {
  active: number;
  setActive: (active: number) => void;
  courseContentData: CourseItem[];
  setCourseContentData: (courseContentData: CourseItem[]) => void;
  handleSubmit: () => void;
};

const CourseContent: FC<Props> = ({
  courseContentData,
  setCourseContentData,
  active,
  setActive,
  handleSubmit,
}) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean[]>(
    Array(courseContentData.length).fill(false)
  );

  const handleAddLink = (index: number) => {
    const updatedData = [...courseContentData];
    updatedData[index].links.push({ title: "", url: "" });
    setCourseContentData(updatedData);
  };

  const handleCollapseToggle = (index: number) => {
    setIsCollapsed((prev) => {
      const updatedCollapseState = [...prev];
      updatedCollapseState[index] = !updatedCollapseState[index];
      return updatedCollapseState;
    });
  };

  const handleRemovalLink = (index: number, linkIndex: number) => {
    const updatedData = [...courseContentData];
    updatedData[index].links.splice(linkIndex, 1);
    setCourseContentData(updatedData);
  };

  const newContentHandler = (item: CourseItem) => {
    // Placeholder implementation for adding new content
    if (
      item.title === "" ||
      item.description === "" ||
      item.videoUrl === "" ||
      item.links[0].title === "" ||
      item.links[0].url === ""
    ) {
      toast.error("Please fill all the fields first");
    } else {
      let newVideoSection = "";
      if (courseContentData.length > 0) {
        const lastVideoSection =
          courseContentData[courseContentData.length - 1].videoSection;
        newVideoSection = lastVideoSection || item.videoSection;
      } else {
        newVideoSection = item.videoSection;
      }

      // Create new content
      const newContent: CourseItem = {
        videoSection: newVideoSection,
        title: "New Title",
        videoUrl: "",
        description: "",
        links: [{ title: "", url: "" }],
      };

      // Update course content data
      setCourseContentData([...courseContentData, newContent]);
    }
  };

  return (
    <div className="w-[80%] m-auto mt-24 p-3">
      <form onSubmit={handleSubmit}>
        {courseContentData.map((item, index) => (
          <div
            key={index}
            className={`w-full bg-[#cdc8c817] p-4 ${
              index === 0 ||
              item.videoSection !== courseContentData[index - 1].videoSection
                ? "mt-18"
                : "mb-0"
            }`}
          >
            {/* Video Section Input */}
            {index === 0 ||
            item.videoSection !== courseContentData[index - 1].videoSection ? (
              <div className="flex items-center">
                <input
                  type="text"
                  className={`text-[20px] ${
                    item.videoSection === "Untitled Section"
                      ? "w-[170px]"
                      : "w-min"
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
            ) : null}

            {/* Title and Collapse Section */}
            <div className="flex w-full items-center justify-between my-0">
              {isCollapsed[index] ? (
                item.title && (
                  <p className="font-Poppins dark:text-white text-black">
                    {index + 1}. {item.title}
                  </p>
                )
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
                    transform: isCollapsed[index]
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                  }}
                  onClick={() => handleCollapseToggle(index)}
                />
              </div>
            </div>

            {/* Expanded Content */}
            {!isCollapsed[index] ? (
              <>
                {/* Video Title Input */}
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

                {/* Video URL Input */}
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

                {/* Description Textarea */}
                <div className="mb-3">
                  <label className={styles.label}>Description</label>
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
                </div>

                {/* Links Section */}
                {item?.links.map((link: Link, linkIndex: number) => (
                  <div className="mb-3 block" key={linkIndex}>
                    <div className="w-full flex items-center justify-between">
                      <label className={styles.label}>
                        Link {linkIndex + 1}
                      </label>
                      <AiOutlineDelete
                        className={`${
                          linkIndex === 0 ? "cursor-no-drop" : "cursor-pointer"
                        } text-black dark:text-white text-[20px]`}
                        onClick={() =>
                          linkIndex === 0
                            ? null
                            : handleRemovalLink(index, linkIndex)
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
                        updatedData[index].links[linkIndex].title =
                          e.target.value;
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
                        updatedData[index].links[linkIndex].url =
                          e.target.value;
                        setCourseContentData(updatedData);
                      }}
                    />
                  </div>
                ))}

                {/* Add Link Button */}
                <div
                  className="flex items-center text-[18px] dark:text-white text-black cursor-pointer"
                  onClick={() => handleAddLink(index)}
                >
                  <BsLink45Deg /> Add Link
                </div>
              </>
            ) : null}
          </div>
        ))}
        {/* Add New Content Button */}
        <div
          className="flex items-center text-[18px] dark:text-white text-black cursor-pointer"
          onClick={() => newContentHandler(courseContentData[0])}
        >
          <AiOutlinePlusCircle className="mr-2" /> Add New Content
        </div>
      </form>
    </div>
  );
};

export default CourseContent;
