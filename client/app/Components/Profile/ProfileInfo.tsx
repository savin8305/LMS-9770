import Image from "next/image";
import { styles } from "../../styles/styles";
import React, { FC, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import avatarIcon from "../../../public/e14cdba99c88a55fa7e7590397743cda.jpg";

type Props = {
  avatar: string | null;
  user: any;
};

const ProfileInfo: FC<Props> = ({ avatar, user }) => {
  const [name, setName] = useState(user && user.name);

  const imageHandler = async (e: any) => {
    console.log("Image selected");
  };

  const handleSubmit = async (e: any) => {
    console.log("Form submitted");
  };

  return (
    <div className="animation-container flex flex-col items-center">
 

      <div className=" relative mb-4">
        <Image
          src={user.avatar || avatar ? user.avatar.url || avatar : avatarIcon}
          alt=""
          className="activity w-32 h-32 object-cover rounded-full border-4 border-[#37a39a]"
        />
        <input
          type="file"
          name="avatar"
          id="avatar"
          className="hidden"
          onChange={imageHandler}
          accept="image/png, image/jpg, image/jpeg, image/webp"
        />
        <label htmlFor="avatar" className="absolute bottom-2 right-2">
          <div className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center">
            <AiOutlineCamera size={20} className="text-white" />
          </div>
        </label>
      </div>

      <form onSubmit={handleSubmit} className="activity w-full max-w-md space-y-4">
        <div>
          <label className="block mb-2 text-blue-950">Full Name</label>
          <input
            type="text"
            className={`${styles.input} w-full`}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2 text-blue-950">Email Address</label>
          <input
            type="text"
            readOnly
            className={`${styles.input} w-full`}
            required
            value={user?.email}
          />
        </div>

        <input
          className="w-full h-10 border border-[#37a39a] text-white bg-[#37a39a] rounded-[3px] cursor-pointer"
          type="submit"
          value="Update"
        />
      </form>

  
    </div>
  );
};

export default ProfileInfo;
