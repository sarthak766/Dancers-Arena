import React from 'react';

const Contact = () => {
  return (
    <div className="bg-black py-12 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-6xl font-bold text-center mt-5 mb-8">Contact Us</h1>
        <div className="flex flex-col md:flex-row justify-between gap-11">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 ">
            <p className="text-lg mb-4">
              Do you have questions about our dance classes or want to inquire about our studio? Feel free to contact us using the information below or fill out the form, and we'll get back to you as soon as possible.
            </p>
            <ul className="list-disc ml-6">
              <li>Email: info@dancersarena.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Main Street, Your City, ABC123</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your Message"
                  rows="6"
                ></textarea>
              </div>
              <div className="flex items-center justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
