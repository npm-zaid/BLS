import React, { useState } from 'react';

const ProofOfDelivery = () => {
  const [To, setTo] = useState('');
  const [Reference, setReference] = useState('');
  const [Vessel, setVessel] = useState('');
  const [ContainerQty, setContainerQty] = useState('');
  const [Commodity, setCommodity] = useState('');
  const [ContainerNo, setContainerNo] = useState('');
  const [SealNo, setSealNo] = useState('');
  const [CargoType, setCargoType] = useState('');
  const [Damage, setDamage] = useState('');
  const [Quantity, setQuantity] = useState('');
  
  // transporter details
  const [TransporterName, setTransporterName] = useState('');
 const [TruckRegistration, setTruckRegistration] = useState('');
 const [DriverName, setDriverName] = useState('');
 const [ContactNo, setContactNo] = useState('');
 const [IdPassportNo, setIdPassportNo] = useState('');
 const [GmsLda, setGmsLda] = useState('');
 const [Receiver, setReceiver] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = {
    To,
    Reference,
    Vessel,
    ContainerQty,
    Commodity,
    ContainerNo,
    SealNo,
    CargoType,
    Damage,
    Quantity,
    TransporterName,
    TruckRegistration,
    DriverName,
    ContactNo,
    IdPassportNo,
    GmsLda,
    Receiver
  };
  console.log(formData);
};




  return (
   
    <div className="min-h-screen w-full text-white p-6">

      <div className=" bg-zinc-800/80 p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6 bg-gradient-to-r from-teal-700 to-teal-600 text-white py-3 px-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <i className="ri-checkbox-circle-line text-teal-400"></i>
            Proof of Delivery
          </h2>
          <span className=" font-bold">DATE - {new Date().toLocaleDateString()}</span>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-zinc-800/90 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex-1">
              <label className=" text-zinc-300 flex items-center gap-2">
                <i className="ri-user-line text-teal-400"></i>
                To:
              </label>
              <input
                type="text"
                placeholder="Recipient Name"
                className="w-full p-2 mt-1 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none hover:bg-zinc-700/90"
                value={To}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className=" text-zinc-300 flex items-center gap-2">
                <i className="ri-file-text-line text-teal-400"></i>
                Reference/BL No.
              </label>
              <input
                type="text"
                placeholder="Reference/BL No."
                className="w-full p-2 mt-1 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none hover:bg-zinc-700/90"
                value={Reference}
                onChange={(e) => setReference(e.target.value)}
              />
            </div>
          </div>
          
          <div className="bg-zinc-800/90 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <p className="text-zinc-300 mb-4 flex items-center gap-2">
              <i className="ri-information-line text-teal-400"></i>
              This is to confirm the delivery of all the goods in proper conditions, according to the following descriptions:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-zinc-800/90 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex-1">
              <label className=" text-zinc-300 flex items-center gap-2">
                <i className="ri-ship-line text-teal-400"></i>
                Vessel/Voyage
              </label>
              <input
                type="text"
                placeholder="Vessel/Voyage"
                className="w-full p-2 mt-1 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none hover:bg-zinc-700/90"
                value={Vessel}
                onChange={(e) => setVessel(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className=" text-zinc-300 flex items-center gap-2">
                <i className="ri-box-3-line text-teal-400"></i>
                Container Qty.
              </label>
              <input
                type="text"
                placeholder="Container Qty."
                className="w-full p-2 mt-1 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none hover:bg-zinc-700/90"
                value={ContainerQty}
                onChange={(e) => setContainerQty(e.target.value)}
              />
            </div>
            <div className="flex-1">
              <label className=" text-zinc-300 flex items-center gap-2">
                <i className="ri-package-line text-teal-400"></i>
                Commodity
              </label>
              <input
                type="text"
                placeholder="Commodity"
                className="w-full p-2 mt-1 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none hover:bg-zinc-700/90"
                value={Commodity}
                onChange={(e) => setCommodity(e.target.value)}
              />
            </div>
          </div>
          
          <div className="bg-zinc-800/90 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-teal-400">
            <h3 className="text-lg font-semibold text-teal-400 mb-4 flex items-center gap-2">
              <i className="ri-table-line text-teal-400"></i>
              Container Details
            </h3>
            
            <div className="overflow-x-auto">
  <div className="w-full grid grid-cols-5 gap-0 ">
    {/* Header */}
    
    <div className="bg-zinc-700/80 p-3 text-left text-zinc-300 flex items-center gap-2">
      <i className="ri-box-1-line text-teal-400"></i>
      Container No.
    </div>
    <div className="bg-zinc-700/80 p-3 text-left text-zinc-300 flex items-center gap-2">
      <i className="ri-lock-line text-teal-400"></i>
      Seal No.
    </div>
    <div className="bg-zinc-700/80 p-3 text-left text-zinc-300 flex items-center gap-2">
      <i className="ri-list-check text-teal-400"></i>
      Cargo Type
    </div>
    <div className="bg-zinc-700/80 p-3 text-left text-zinc-300 flex items-center gap-2">
      <i className="ri-alert-line text-teal-400"></i>
      Damage
    </div>
    <div className="bg-zinc-700/80 p-3 text-left text-zinc-300 flex items-center gap-2">
      <i className="ri-number-1 text-teal-400"></i>
      Quantity
    </div>
   

    {/* Rows */}
    {[1, 2, 3, 4, 5].map((num) => (
      <div key={num} className="contents group hover:bg-zinc-700/50 transition-colors duration-200 ">
        <div className="p-3 border-t border-zinc-700">
          <input
            type="text"
            placeholder={`${num}-`}
            className="w-full p-2 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none group-hover:bg-zinc-700/90"
            value={ContainerNo}
            onChange={(e) => setContainerNo(e.target.value)}
          />
        </div>
        <div className="p-3 border-t border-zinc-700">
          <input
            type="text"
            placeholder="Seal No."
            className="w-full p-2 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none group-hover:bg-zinc-700/90"
            value={SealNo}
            onChange={(e) => setSealNo(e.target.value)}
          />
        </div>
        <div className="p-3 border-t border-zinc-700">
          <select
            className="w-full p-2 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none group-hover:bg-zinc-700/90"
            value={CargoType}
            onChange={(e) => setCargoType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
          </select>
        </div>
        <div className="p-3 border-t border-zinc-700">
          <select
            className="w-full p-2 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none group-hover:bg-zinc-700/90"
            value={Damage}
            onChange={(e) => setDamage(e.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="p-3 border-t border-zinc-700">
          <input
            type="number"
            placeholder="Qty"
            className="w-full p-2 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none group-hover:bg-zinc-700/90"
            value={Quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
      </div>
    ))}
  </div>
</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-zinc-800/90 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex-1">
              <label className=" text-zinc-300 flex items-center gap-2">
                <i className="ri-ruler-line text-teal-400"></i>
                Total Space [MT]
              </label>
              <input
                type="text"
                placeholder="Total Space"
                className="w-full p-2 mt-1 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none hover:bg-zinc-700/90"
              />
            </div>
            <div className="flex-1">
              <label className=" text-zinc-300 flex items-center gap-2">
                <i className="ri-scales-line text-teal-400"></i>
                Gross Weight [Kgs.]
              </label>
              <input
                type="text"
                placeholder="Gross Weight"
                className="w-full p-2 mt-1 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none hover:bg-zinc-700/90"
              />
            </div>
            <div className="flex-1">
              <label className=" text-zinc-300 flex items-center gap-2">
                <i className="ri-calculator-line text-teal-400"></i>
                Total
              </label>
              <input
                type="text"
                placeholder="Total"
                className="w-full p-2 mt-1 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none hover:bg-zinc-700/90"
              />
            </div>
            <div className="flex-1">
              <label className=" text-zinc-300 flex items-center gap-2">
                <i className="ri-stack-line text-teal-400"></i>
                Total Qty.
              </label>
              <input
                type="text"
                placeholder="Total Qty."
                className="w-full p-2 mt-1 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none hover:bg-zinc-700/90"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-zinc-800/90 p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
            <div className="flex-1">
              <label className=" text-zinc-300 flex items-center gap-2">
                <i className="ri-edit-line text-teal-400"></i>
                Receiver [Sign]
              </label>
              <input
                type="text"
                placeholder="Receiver Signature"
                className="w-full p-2 mt-1 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none hover:bg-zinc-700/90"
              />
            </div>
            <div className="flex-1">
              <label className=" text-zinc-300 flex items-center gap-2">
                <i className="ri-edit-line text-teal-400"></i>
                Delivery Agent [Sign]
              </label>
              <input
                type="text"
                placeholder="Agent Signature"
                className="w-full p-2 mt-1 bg-zinc-700/80 border border-gray-700 rounded text-white focus:ring-2 focus:ring-teal-400 focus:outline-none hover:bg-zinc-700/90"
              />
            </div>
          </div>

           {/* Transporter Form */}
      <div className="h-screen w-full  text-white mt-10">
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
                value={TransporterName}
                onChange={(e) => setTransporterName(e.target.value)}
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
                value={TruckRegistration}
                onChange={(e) => setTruckRegistration(e.target.value)}
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
                value={DriverName}
                onChange={(e) => setDriverName(e.target.value)}
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
                value={ContactNo}
                onChange={(e) => setContactNo(e.target.value)}
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
                value={IdPassportNo}
                onChange={(e) => setIdPassportNo(e.target.value)}
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
                value={GmsLda}
                onChange={(e) => setGmsLda(e.target.value)}
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
                value={Receiver}
                onChange={(e) => setReceiver(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <button className="w-full bg-teal-400 text-white py-2 rounded-lg shadow-md active:scale-95 transition-all duration-300 active:bg-teal-400/50">
            Submit
          </button>
        </form>
      </div>
     

    
    </div>
    
    
  );
};

export default ProofOfDelivery;