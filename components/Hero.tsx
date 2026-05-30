"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import profilePicture from "../public/assets/profilepic.png";
export default function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-[linear-gradient(to_bottom,#000,#340F41_35%,#8A3DA4_55%,#B993ED_85%)]">
      {/* Circle */}
      <div className="absolute  w-600 h-250 top-112.5  left-1/2 -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,#000_85%,#9E4AC5)] border border-purple-500/30 " />
      {/* Main Div */}
      <div className="container relative mx-auto px-4 pt-12 pb-24">
        <div className="flex flex-col items-center justify-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mb-8 mt-24 "
          >
            <div className="absolute inset-0 bg-linear-to-b from-purple-500/40 to-transparent rounded-full blur-3xl"></div>
            <Image
              src={profilePicture}
              alt="Profile Picture"
              width={250}
              className="relative z-10"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className=" text-6xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
              I am <br /> John <span className=" text-purple-400">Doe</span>
            </h1>
            <p className=" text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
              Some Text Some Text Some Text Some Text Some Text Some Text Some
              Text Some Text Some Text Some Text Some Text Some Text
            </p>
            <div className="flex gap-4 justify-center">
              <motion.button
                className=" px-6 py-3 bg-linear-to-r from-purple-500 to-pink-500 rounded-full font-medium hover:bg-gray-700 transition-colors "
                whileHover={{ scale: 1.05 }}
              >
                Contact Me
              </motion.button>
              <motion.button
                className=" px-6 py-3  rounded-full font-medium border border-white   transition-colors "
                whileHover={{ scale: 1.05 }}
              >
                View Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
