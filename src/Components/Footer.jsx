import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside>
        <Link to="/" className="flex items-center gap-2 group">
          <img
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
            src="/Ai-inventory_Image.png"
            alt="AI Model Logo"
          />

          <span className="text-xl font-semibold text-orange-500">
            AI Model
          </span>
        </Link>
        <p>
          AI Model Inventory Manager.
          <br />
          Copyright © {new Date().getFullYear()} - Providing reliable tech since
          1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid w-10 grid-flow-col gap-4">
          <Link to="https://x.com/" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </Link>
          <Link
            to="https://github.com/sajib-rahman90"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            to="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
