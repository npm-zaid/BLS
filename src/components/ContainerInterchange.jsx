import React from 'react';

const ContainerInterchange = ({theme}) => {
  return (
    <div className="min-h-screen w-full text-white sm:p-6">
      <div className={`p-6 rounded-lg shadow-md ${theme ? 'bg-zinc-800/80 text-white' : 'bg-gray-100 text-zinc-900'}`}>
        <div className="flex justify-between items-center mb-6 bg-gradient-to-r from-teal-700 to-teal-600 text-white py-3 px-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <i className="ri-inbox-line text-teal-400"></i>
            Interchange - Containers
          </h2>
          <span className=" font-bold hidden md:block">DATE - {new Date().toLocaleDateString()}</span>
        </div>
        <div className="space-y-6">
          {/* Group 1: Reference, ISO Code, Shipping Line, Vessel-Voyage */}
          <div className={`grid p-4 rounded-lg hover:shadow-md grid-cols-1 md:grid-cols-4 gap-4  ${theme ? 'bg-zinc-800/80' : 'bg-gray-200'}`}>
            <div className="flex-1">
              <label className=" flex items-center gap-2">
                <i className="ri-file-line text-teal-400"></i>
                Reference/BL No.
              </label>
              <input
                type="text"
                placeholder="Reference/BL No."
                className={`w-full p-2 mt-1 ${theme ? 'bg-zinc-700/80 text-white' : 'bg-gray-300 text-zinc-900'} rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none `}
              />
            </div>
            <div className="flex-1">
              <label className=" flex items-center gap-2">
                <i className="ri-code-box-line text-teal-400"></i>
                ISO Code
              </label>
              <input
                type="text"
                placeholder="ISO Code"
                className={`w-full p-2 mt-1 ${theme ? 'bg-zinc-700/80 text-white' : 'bg-gray-300 text-zinc-900'} rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none `}
              />
            </div>
            <div className="flex-1">
              <label className=" flex items-center gap-2">
                <i className="ri-ship-line text-teal-400"></i>
                Shipping Line
              </label>
              <input
                type="text"
                placeholder="Shipping Line"
                className={`w-full p-2 mt-1 ${theme ? 'bg-zinc-700/80 text-white' : 'bg-gray-300 text-zinc-900'} rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none `}
              />
            </div>
            <div className="flex-1">
              <label className=" flex items-center gap-2">
                <i className="ri-anchor-line text-teal-400"></i>
                Vessel-Voyage
              </label>
              <input
                type="text"
                placeholder="Vessel-Voyage"
                className={`w-full p-2 mt-1 ${theme ? 'bg-zinc-700/80 text-white' : 'bg-gray-300 text-zinc-900'} rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none `}
              />
            </div>
          </div>

          {/* Group 2: Container No., Seal, Weight, IMDG/UNNO */}
          <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 ${theme ? 'bg-zinc-800/90' : 'bg-gray-200'} p-4 rounded-lg shadow-md`}>
            <div className="flex-1">
              <label className=" flex items-center gap-2">
                <i className="ri-inbox-line text-teal-400"></i>
                Container No.
              </label>
              <input
                type="text"
                placeholder="Container No."
                className={`w-full p-2 mt-1 ${theme ? 'bg-zinc-700/80 text-white' : 'bg-gray-300 text-zinc-900'} rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none `}
              />
            </div>
            <div className="flex-1">
              <label className=" flex items-center gap-2">
                <i className="ri-lock-line text-teal-400"></i>
                Container Seal
              </label>
              <input
                type="text"
                placeholder="Container Seal"
                className={`w-full p-2 mt-1 ${theme ? 'bg-zinc-700/80 text-white' : 'bg-gray-300 text-zinc-900'} rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none `}
              />
            </div>
            <div className="flex-1">
              <label className=" flex items-center gap-2">
                <i className="ri-weight-line text-teal-400"></i>
                Weight
              </label>
              <input
                type="text"
                placeholder="Weight"
                className={`w-full p-2 mt-1 ${theme ? 'bg-zinc-700/80 text-white' : 'bg-gray-300 text-zinc-900'} rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none `}
              />
            </div>
            <div className="flex-1">
              <label className=" flex items-center gap-2">
                <i className="ri-alert-line text-teal-400"></i>
                IMDG/UNNO
              </label>
              <input
                type="text"
                placeholder="IMDG/UNNO"
                className={`w-full p-2 mt-1 ${theme ? 'bg-zinc-700/80 text-white' : 'bg-gray-300 text-zinc-900'} rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none `}
              />
            </div>
          </div>

          {/* Group 3: Transporter Name, Truck/Trailer Registration */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${theme ? 'bg-zinc-800/90' : 'bg-gray-200'} p-4 rounded-lg shadow-md`}>
            <div className="flex-1">
              <label className=" flex items-center gap-2">
                <i className="ri-truck-line text-teal-400"></i>
                Transporter Name
              </label>
              <input
                type="text"
                placeholder="Transporter Name"
                className={`w-full p-2 mt-1 ${theme ? 'bg-zinc-700/80 text-white' : 'bg-gray-300 text-zinc-900'} rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none `}
              />
            </div>
            <div className="flex-1">
              <label className=" flex items-center gap-2">
                <i className="ri-car-line text-teal-400"></i>
                Truck/Trailer Registration
              </label>
              <input
                type="text"
                placeholder="Truck/Trailer Registration"
                className={`w-full p-2 mt-1 ${theme ? 'bg-zinc-700/80 text-white' : 'bg-gray-300 text-zinc-900'} rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none `}
              />
            </div>
          </div>

          {/* Group 4: Destination, Origin */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${theme ? 'bg-zinc-800/90' : 'bg-gray-200'} p-4 rounded-lg shadow-md`}>
            <div className="flex-1">
              <label className=" flex items-center gap-2">
                <i className="ri-map-pin-line text-teal-400"></i>
                Destination to
              </label>
              <input
                type="text"
                placeholder="Destination to"
                className={`w-full p-2 mt-1 ${theme ? 'bg-zinc-700/80 text-white' : 'bg-gray-300 text-zinc-900'} rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none `}
              />
            </div>
            <div className="flex-1">
              <label className=" flex items-center gap-2">
                <i className="ri-map-pin-2-line text-teal-400"></i>
                Origin From
              </label>
              <input
                type="text"
                placeholder="Origin From"
                className={`w-full p-2 mt-1 ${theme ? 'bg-zinc-700/80 text-white' : 'bg-gray-300 text-zinc-900'} rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none `}
              />
            </div>
          </div>

          {/* Container Diagram and Parts List */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${theme ? 'bg-zinc-800/90' : 'bg-gray-200'} p-4 rounded-lg shadow-md border-l-4 border-teal-400`}>
            <div className="w-full">
              <img
                src="https://via.placeholder.com/200x150"
                alt="Container Diagram"
                className="rounded shadow-md w-full h-auto"
              />
            </div>
            <div className="w-full">
              <h3 className="text-lg font-semibold text-teal-400 mb-4 flex items-center gap-2">
                <i className="ri-box-3-line text-teal-400"></i>
                Container Parts
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  { no: '1-', part: 'Rear Side' },
                  { no: '1-', part: 'Right Gate' },
                  { no: '2-', part: 'Top Side' },
                  { no: '3-', part: 'Right Side' },
                  { no: '4-', part: 'Left Gate' },
                  { no: '5-', part: 'Back Side' },
                  { no: '6-', part: 'Container Downside' },
                  { no: '7-', part: 'Outer Bottom' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr] gap-4 ${theme ? 'bg-zinc-700/40 text-white' : 'bg-gray-300 text-zinc-900'} p-4 rounded-lg hover:shadow-xl hover:bg-teal-400/10   transition-all duration-300 border-l-2 border-transparent hover:border-teal-400`}
                  >
                    <div className="font-medium flex items-center gap-2 md:text-base text-sm">
                      <i className="ri-number-1 text-teal-400 md:hidden"></i>
                      <span className="md:hidden">Part No.: </span>
                      {item.no}
                    </div>
                    <div className=" font-medium flex items-center gap-2 md:text-base text-sm">
                      <i className="ri-box-3-line text-teal-400 md:hidden"></i>
                      <span className="md:hidden">Part: </span>
                      {item.part}
                    </div>
                    <div><i className="ri-check-line text-teal-400"></i></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Signatures */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${theme ? 'bg-zinc-800/90' : 'bg-gray-200'} p-4 rounded-lg shadow-md`}>
            <div className="flex-1">
              <label className="flex items-center gap-2">
                <i className="ri-edit-line text-teal-400"></i>
                Transporter Signature
              </label>
              <input
                type="text"
                placeholder="Transporter Signature"
                className={`w-full p-2 mt-1 ${theme ? 'bg-zinc-700/80 text-white' : 'bg-gray-300 text-zinc-900'} rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none `}
              />
            </div>
            <div className="flex-1">
              <label className="flex items-center gap-2">
                <i className="ri-edit-line text-teal-400"></i>
                GMS - Signature
              </label>
              <input
                type="text"
                placeholder="GMS Signature"
                className={`w-full p-2 mt-1 ${theme ? 'bg-zinc-700/80 text-white' : 'bg-gray-300 text-zinc-900'} rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none `}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="w-full mt-4 bg-teal-400 text-white py-2 rounded-lg shadow-md active:scale-95 transition-all duration-300 active:bg-teal-400/50">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContainerInterchange;