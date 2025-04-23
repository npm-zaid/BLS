import React from 'react';

const TransporterForm = () => {
  return (
    <div className="min-h-screen w-full  text-white mt-10">
      <div className=" bg-zinc-800/80 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-teal-400 mb-6 flex items-center gap-2">
          <i className="ri-truck-line text-teal-400"></i>
          Transporter Details
        </h1>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-zinc-800/90 p-4 rounded-lg shadow-md hover:shadow-xl  transition-all duration-300">
            <div className="flex-1">
              <label className=" text-zinc-300 flex items-center gap-2">
                <i className="ri-user-line text-teal-400"></i>
                Transporter Name
              </label>
              <input
                type="text"
                placeholder="Transporter Name"
                className="w-full p-2 mt-1 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none /90"
              />
            </div>
            <div className="flex-1">
              <label className=" text-zinc-300 flex items-center gap-2">
                <i className="ri-truck-line text-teal-400"></i>
                Truck/Trailer Registration
              </label>
              <input
                type="text"
                placeholder="Truck/Trailer Registration"
                className="w-full p-2 mt-1 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none /90"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-zinc-800/90 p-4 rounded-lg hover:shadow-lg shadow-teal-400  transition-all duration-300">
            <div className="flex-1">
              <label className=" text-zinc-300 flex items-center gap-2">
                <i className="ri-user-smile-line text-teal-400"></i>
                Driver's Name
              </label>
              <input
                type="text"
                placeholder="Driver's Name"
                className="w-full p-2 mt-1 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none /90"
              />
            </div>
            <div className="flex-1">
              <label className=" text-zinc-300 flex items-center gap-2">
                <i className="ri-phone-line text-teal-400"></i>
                Contact No.
              </label>
              <input
                type="text"
                placeholder="Contact No."
                className="w-full p-2 mt-1 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none /90"
              />
            </div>
            <div className="flex-1">
              <label className=" text-zinc-300 flex items-center gap-2">
                <i className="ri-passport-line text-teal-400"></i>
                ID/Passport No.
              </label>
              <input
                type="text"
                placeholder="ID/Passport No."
                className="w-full p-2 mt-1 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none /90"
              />
            </div>
          </div>
          <div className="bg-zinc-800/90 p-4 rounded-lg shadow-md hover:shadow-xl  transition-all duration-300">
            <p className="text-zinc-400 italic">
              We thank you for choosing GMS as your prioritized business partner. We look forward to working with you again.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-zinc-800/90 p-4 rounded-lg shadow-md hover:shadow-xl  transition-all duration-300">
            <div className="flex-1">
              <label className=" text-zinc-300 flex items-center gap-2">
                <i className="ri-building-line text-teal-400"></i>
                GMS, LDA
              </label>
              <input
                type="text"
                placeholder="GMS, LDA"
                className="w-full p-2 mt-1 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none /90"
              />
            </div>
            <div className="flex-1">
              <label className=" text-zinc-300 flex items-center gap-2">
                <i className="ri-user-line text-teal-400"></i>
                Transport/Driver
              </label>
              <input
                type="text"
                placeholder="Transport/Driver"
                className="w-full p-2 mt-1 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none /90"
              />
            </div>
            <div className="flex-1">
              <label className=" text-zinc-300 flex items-center gap-2">
                <i className="ri-user-received-line text-teal-400"></i>
                Receiver
              </label>
              <input
                type="text"
                placeholder="Receiver"
                className="w-full p-2 mt-1 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none /90"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransporterForm;