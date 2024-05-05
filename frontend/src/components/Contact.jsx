import React from "react";

const Contact = () => {
  const handleSendMessage = (e) => {
    e.preventDefault();
    // Perform the email sending logic here
    // For demonstration purposes, we'll display a pop-up message to confirm that the mail has been "sent"
    window.alert('Your message has been sent!');
  };

  return (
    <div className="max-w-screen-xl mx-auto pt-20">
      <section className="bg-white">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-[#8B4513] to-[#FF7F50] text-transparent bg-clip-text">
          Contact Us
        </h1>

        <div className="py-8 lg:py-8 px-4 mx-auto max-w-screen-md">
          <p className="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">
            Got a technical issue? Let us know.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#FF7F50] dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-[#FF7F50] dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-[#FF7F50] dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              onClick={handleSendMessage} // Call handleSendMessage function on button click
              className="px-6 py-3 bg-[#FF7F50] text-white rounded-md shadow-md mr-4 hover:bg-primary-dark font-semibold"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
