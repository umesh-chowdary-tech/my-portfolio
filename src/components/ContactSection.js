import React from 'react';
import { Phone, Mail } from 'react-feather';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold border-b pb-2">CONTACT</h2>
      <div className="max-w-md mx-auto text-center space-y-4">
        <h3 className="text-2xl font-bold text-[#FDB813]">Let's Connect & Collaborate!</h3>
        <p className="text-gray-700 text-base">
          I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Reach out directly or connect with me on social platforms!
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
          <a
            href="tel:+917981589800"
            className="flex flex-col items-center space-y-2 group"
            title="Call Me"
          >
            <div className="w-14 h-14 rounded-full bg-[#FDB813] flex items-center justify-center group-hover:bg-[#fbbf24] transition shadow-lg">
              <Phone className="h-7 w-7 text-white" />
            </div>
            <span className="text-sm text-gray-700 font-medium">+91 7981589800</span>
          </a>
          <a
            href="mailto:jobs.umeshchowdary@gmail.com"
            className="flex flex-col items-center space-y-2 group"
            title="Email Me"
          >
            <div className="w-14 h-14 rounded-full bg-[#FDB813] flex items-center justify-center group-hover:bg-[#fbbf24] transition shadow-lg">
              <Mail className="h-7 w-7 text-white" />
            </div>
            <span className="text-sm text-gray-700 font-medium">jobs.umeshchowdary@gmail.com</span>
          </a>
        </div>
        <div className="border-t border-gray-200 my-8"></div>
        <div>
          <p className="mb-4 text-gray-700 font-semibold">Connect with me on:</p>
          <div className="flex items-center justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/umesh-chowdary-anubrolu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 group"
              title="LinkedIn"
            >
              <div className="w-14 h-14 rounded-full bg-blue-700 flex items-center justify-center group-hover:bg-blue-800 transition shadow-lg">
                <FaLinkedin className="h-7 w-7 text-white" />
              </div>
              <span className="text-xs text-gray-700 font-medium">LinkedIn</span>
            </a>
            <a
              href="https://github.com/umesh-chowdary-learing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 group"
              title="GitHub"
            >
              <div className="w-14 h-14 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-black transition shadow-lg">
                <FaGithub className="h-7 w-7 text-white" />
              </div>
              <span className="text-xs text-gray-700 font-medium">GitHub</span>
            </a>
            <a
              href="https://x.com/UChowdary23"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 group"
              title="Twitter (X)"
            >
              <div className="w-14 h-14 rounded-full bg-pink-500 flex items-center justify-center group-hover:bg-pink-700 transition shadow-lg">
                <FaXTwitter className="h-7 w-7 text-white" />
              </div>
              <span className="text-xs text-gray-700 font-medium">Twitter (X)</span>
            </a>
          </div>
        </div>
        <p className="mt-10 text-[#FDB813] font-bold text-lg tracking-wide">Thank you for visiting my portfolio!</p>
      </div>
    </div>
  );
};

export default ContactSection;