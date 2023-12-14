import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface HeroProps {}

const Hero: FC<HeroProps> = () => {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const stagger = {
    animate: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <motion.div className="dark:bg-black bg-white grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Background Image */}
      <motion.div className="relative z-10 flex flex-col justify-center items-center text-white text-center p-4 md:p-8">
        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
          className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-8 -mt-32 leading-tight text-purple-300"
        >
          Embrace the Unconventional, <br /> Ignite Imaginations
        </motion.h1>
        <motion.p
          {...fadeInUp}
          transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
          className="text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl mb-6 leading-relaxed text-blue-500"
        >
          Transforming Minds Through Innovation
        </motion.p>
        <motion.a
          {...fadeInUp}
          transition={{ delay: 1.5, duration: 0.5, ease: "easeInOut" }}
          href="/courses"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-8 rounded-full text-md sm:text-xl md:text-2xl hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition duration-300 inline-block mb-8"
        >
          Hi Experience the Future
        </motion.a>
        {/* Search Bar */}
        <motion.div className="flex items-center justify-center mb-4 relative">
          <motion.input
            type="text"
            placeholder="Search courses..."
            className="bg-white text-gray-800 py-3 dark:bg-white px-6 rounded-full text-md sm:text-xl md:text-2xl focus:outline-none focus:ring focus:border-blue-300 transition duration-300 bg-blend-color ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileFocus={{
              scale: 1.1,
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          />
        </motion.div>
        <motion.div
          className="flex items-center justify-center text-white text-center mb-8"
          {...stagger}
        >
          <motion.div {...fadeInUp} className="-mr-5">
            <Image
              src="/client-1.webp"
              alt="Client Image 1"
              width={50}
              height={50}
              className="rounded-full border-r-slate-400"
            />
          </motion.div>
          <motion.div {...fadeInUp} className="-mr-5">
            <Image
              src="/client-2.webp"
              alt="Client Image 2"
              width={50}
              height={50}
              className="rounded-full border-r-slate-400"
            />
          </motion.div>
          <motion.div {...fadeInUp} className="-mr-6">
            <Image
              src="/client-3.webp"
              alt="Client Image 3"
              width={50}
              height={50}
              className="rounded-full border-r-slate-400"
            />
          </motion.div>
          <p className="px-8 text-lg  dark:text-purple-100 text-blue-500">
            500K+ People already trusted us. View Courses
          </p>
        </motion.div>
      </motion.div>

      {/* Illustration */}
      <motion.div className="mt-8   hidden dark:border-l-teal-50  md:block relative border-l-teal-50  overflow-hidden col-span-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 dark:bg-white mix-blend-multiply"
        />
        <Image
          src="/business-img.webp"
          alt="Education Illustration"
          layout="responsive"
          width={30}
          height={30}
          objectFit="contain"
          className="dark:z-1000 h-50 w-50 "
        />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
