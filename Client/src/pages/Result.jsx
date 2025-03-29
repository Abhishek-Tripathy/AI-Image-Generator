import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../context/AppContext";

function Result() {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(true);
  const [loading, setLoading] = useState(false);
  const [input, setInpuut] = useState("");
  const { generateImage, theme } = useContext(AppContext);

  const onSumitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (input) {
      const image = await generateImage(input);
      if (image) {
        setIsImageLoaded(true);
        setImage(image);
      }
    }
    setLoading(false);
  };

  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={onSumitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center"
    >
      <div>
        <div className="relative">
          <img src={image} className="max-w-sm rounded" alt="" />
          <span
            className={`absolute bottom-0 h-1 left-0 bg-blue-500 ${
              loading ? "transition-all duration-[10s] w-full" : "w-0"
            }`}
          />
        </div>
        <p className={!loading ? "hidden" : "text-gray-400"}>Loading...</p>
      </div>

      {!isImageLoaded && (
        <div
          className={`flex w-full max-w-xl p-0.5 mt-10 rounded-full text-sm ${
            theme === "dark"
              ? "bg-gray-800 text-gray-300"
              : "bg-neutral-500 text-white"
          }`}
        >
          <input
            value={input}
            onChange={(e) => setInpuut(e.target.value)}
            type="text"
            placeholder="Describe What You Want To Generate"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-gray-400"
          />
          <button
            type="submit"
            className={`px-10 sm:px-16 py-3 rounded-full ${
              theme === "dark"
                ? "bg-blue-600 hover:bg-blue-700 text-gray-100"
                : "bg-zinc-900 hover:bg-black"
            }`}
          >
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex flex-wrap gap-2 justify-center text-sm p-0.5 mt-10 rounded-full">
          <p
            onClick={() => setIsImageLoaded(false)}
            className={`px-8 py-3 rounded-full cursor-pointer border ${
              theme === "dark"
                ? "border-gray-200 text-gray-200"
                : "border-zinc-900 text-black"
            }`}
          >
            Generate Another
          </p>
          <a
            href={image}
            download
            className={`px-10 py-3 rounded-full cursor-pointer ${
              theme === "dark"
                ? "bg-blue-600 hover:bg-blue-700 text-white border border-gray-200"
                : "bg-zinc-900 text-white"
            }`}
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
}

export default Result;
