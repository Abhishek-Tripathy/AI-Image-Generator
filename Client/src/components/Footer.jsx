import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

function Footer() {
  const { theme } = useContext(AppContext);
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <img src={theme==='dark' ? assets.logo_wizardo_white : assets.logo_wizardo_black} width={150} alt="" />
      <p
        className={`flex-1 border-l pl-4 text-sm max-sm:hidden ${
          theme === "dark"
            ? "border-gray-600 text-gray-400"
            : "border-gray-400 text-gray-500"
        }`}
      >
        Copyright @Abhishek | All rights reserved.
      </p>

      <div className="flex gap-2.5">
        <img src={assets.facebook_icon} width={35} alt="" />
        <img src={assets.twitter_icon} width={35} alt="" />
        <img src={assets.instagram_icon} width={35} alt="" />
      </div>
    </div>
  );
}

export default Footer;
