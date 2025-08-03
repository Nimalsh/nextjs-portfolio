import React from "react";
import Image from "next/image"; // ← Import Image component

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        {/* Small Logo */}
        <Image
          src="/logo.png" // Make sure logo.png is in the public folder
          alt="Logo"
          width={60}       // ← Small size
          height={20}
          className="object-contain"
        />

        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

