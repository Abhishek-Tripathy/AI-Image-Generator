import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function GenerateButton() {
  const navigate = useNavigate();
  const { user, setShowLogin, theme } = useContext(AppContext);

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="pb-16 text-center"
    >
      <h1
        className={`text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold py-6 md:py-16 ${
          theme === "dark" ? "text-gray-200" : "text-neutral-800"
        }`}
      >
        See the magic, Try now
      </h1>

      <button
        onClick={onClickHandler}
        className={`inline-flex items-center px-12 gap-2 py-3 rounded-full m-auto hover:scale-105 transition-all duration-500 ${
          theme === "dark" ? "bg-white text-black" : "bg-black text-white"
        }`}
      >
        Generate Image Text
        <img src={assets.star_group} className="h-6" alt="" />
      </button>
    </motion.div>
  );
}

export default GenerateButton;
