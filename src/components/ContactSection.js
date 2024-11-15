import React from 'react';
import { Phone, Mail } from 'react-feather';

const ContactSection = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold border-b pb-2">CONTACT</h2>
      <div className="max-w-md mx-auto text-center space-y-4">
        <h3 className="text-xl font-semibold">Feel free to contact me!</h3>
        <div className="flex items-center justify-center space-x-8">
          <a
            href="tel:+917981589800"
            className="flex flex-col items-center space-y-2"
          >
            <div className="w-12 h-12 rounded-full bg-[#FDB813] flex items-center justify-center">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <span className="text-sm text-gray-600">+91 7981589800</span>
          </a>
          <a
            href="mailto:jobs.umeshchowdary@gmail.com"
            className="flex flex-col items-center space-y-2"
          >
            <div className="w-12 h-12 rounded-full bg-[#FDB813] flex items-center justify-center">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <span className="text-sm text-gray-600">jobs.umeshchowdary@gmail.com</span>
          </a>
        </div>
        <p className="mt-8 text-gray-600">THANKS FOR PATIENCE!</p>
      </div>
    </div>
  );
};

export default ContactSection;