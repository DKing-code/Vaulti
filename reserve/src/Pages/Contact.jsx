import React, { useState } from 'react';

const ContactUs = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Typically, you'd send the form data to your server here
    console.log('Form Data Submitted:', formData);
    alert('error sending message');
    // Clear form data after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-center min-h-screen p-6">
      {/* Left side - Contact Information */}
      <div className="md:w-1/2 p-6">
        <h2 className=" text-xl md:text-4xl font-semibold mb-4 text-gray-800">Contact Information</h2>
        <p className="mb-2">
          <strong>Address:</strong>
          <br />
          701, wim noordhoekkade, amsterdam north holland 1067, NJ<br />
          Netherlands
        </p>
        <p className="mb-2">
          <strong>Email:</strong>
          <br />
          <a href="mailto:info@example.com" className="text-blue-600 hover:underline">
          Info@coastalvault.com 
          </a>
        </p>
        <p className="mb-2">
          <strong>Phone:</strong>
          <br />
          +3197005034563
        </p>
      </div>

      {/* Right side - Contact Form */}
      <div className="md:w-1/2 bg-white p-6 border rounded-lg shadow-lg mt-6 md:mt-0 md:ml-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
