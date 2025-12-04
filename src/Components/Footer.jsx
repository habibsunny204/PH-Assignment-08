import React from "react";
import logo from "../assets/logo.png";
import { FaGithub, FaYoutube, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#001732] text-slate-200 py-6">
      <div className="mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Hero.io Logo" className="h-10 w-auto" />
            <h2 className="text-sm font-semibold">HERO.IO</h2>
          </div>
          <div className="text-right">
            <h3 className="text-xs font-semibold mb-2">Social Links</h3>
            <div className="flex items-center justify-end gap-3 text-lg">
              <a href="#" className="hover:text-white transition">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-white transition">
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-600 mt-4 pt-4"></div>
        <p className="text-center text-[11px] text-slate-400">
          Copyright © 2025 - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
