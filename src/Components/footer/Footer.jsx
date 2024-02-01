import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold">Contact Us</h2>
            <p className="mt-4">123 Main Street</p>
            <p>City, State, Zip Code</p>
            <p className="mt-2">Phone: (123) 456-7890</p>
            <p>Email: info@danceacademy.com</p>
          </div>
          <div className="mt-4 md:mt-0">
            <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Dance Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
