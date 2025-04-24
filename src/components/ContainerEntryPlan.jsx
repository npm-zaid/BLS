import React from 'react';

const ContainerEntryPlan = ({theme}) => {
  const demoData = [
    {
      no: '1',
      truckNo: 'TRK001',
      trailerNo: 'TRL001',
      transporterName: 'ABC Transports',
      containerNo: 'CN001',
      size: '20ft',
      returnDate: '2025-04-01',
      commodity: 'Electronics',
      clientName: 'XYZ Corp',
      type: 'Dry',
      weight: '15000kg',
      damaged: 'No',
    },
    {
      no: '2',
      truckNo: 'TRK002',
      trailerNo: 'TRL002',
      transporterName: 'DEF Logistics',
      containerNo: 'CN002',
      size: '40ft',
      returnDate: '2025-04-02',
      commodity: 'Textiles',
      clientName: 'LMN Ltd',
      type: 'Reefer',
      weight: '20000kg',
      damaged: 'Yes',
    },
    {
      no: '3',
      truckNo: 'TRK003',
      trailerNo: 'TRL003',
      transporterName: 'GHI Shipping',
      containerNo: 'CN003',
      size: '20ft',
      returnDate: '2025-04-03',
      commodity: 'Machinery',
      clientName: 'PQR Inc',
      type: 'Dry',
      weight: '18000kg',
      damaged: 'No',
    },
    {
      no: '4',
      truckNo: 'TRK004',
      trailerNo: 'TRL004',
      transporterName: 'JKL Transport',
      containerNo: 'CN004',
      size: '40ft',
      returnDate: '2025-04-04',
      commodity: 'Food Items',
      clientName: 'STU Co',
      type: 'Reefer',
      weight: '22000kg',
      damaged: 'No',
    },
    {
      no: '5',
      truckNo: 'TRK005',
      trailerNo: 'TRL005',
      transporterName: 'MNO Carriers',
      containerNo: 'CN005',
      size: '20ft',
      returnDate: '2025-04-05',
      commodity: 'Chemicals',
      clientName: 'VWX Ltd',
      type: 'Dry',
      weight: '16000kg',
      damaged: 'Yes',
    },
    {
      no: '6',
      truckNo: 'TRK006',
      trailerNo: 'TRL006',
      transporterName: 'PQR Logistics',
      containerNo: 'CN006',
      size: '40ft',
      returnDate: '2025-04-06',
      commodity: 'Furniture',
      clientName: 'YZA Corp',
      type: 'Dry',
      weight: '19000kg',
      damaged: 'No',
    },
    {
      no: '7',
      truckNo: 'TRK007',
      trailerNo: 'TRL007',
      transporterName: 'STU Transports',
      containerNo: 'CN007',
      size: '20ft',
      returnDate: '2025-04-07',
      commodity: 'Apparel',
      clientName: 'BCD Inc',
      type: 'Reefer',
      weight: '17000kg',
      damaged: 'Yes',
    },
    {
      no: '8',
      truckNo: 'TRK008',
      trailerNo: 'TRL008',
      transporterName: 'VWX Shipping',
      containerNo: 'CN008',
      size: '40ft',
      returnDate: '2025-04-08',
      commodity: 'Automotive Parts',
      clientName: 'EFG Ltd',
      type: 'Dry',
      weight: '21000kg',
      damaged: 'No',
    },
    {
      no: '9',
      truckNo: 'TRK009',
      trailerNo: 'TRL009',
      transporterName: 'YZA Carriers',
      containerNo: 'CN009',
      size: '20ft',
      returnDate: '2025-04-09',
      commodity: 'Beverages',
      clientName: 'HIJ Co',
      type: 'Reefer',
      weight: '14000kg',
      damaged: 'No',
    },
    {
      no: '10',
      truckNo: 'TRK010',
      trailerNo: 'TRL010',
      transporterName: 'KLM Logistics',
      containerNo: 'CN010',
      size: '40ft',
      returnDate: '2025-04-10',
      commodity: 'Plastics',
      clientName: 'MNO Inc',
      type: 'Dry',
      weight: '23000kg',
      damaged: 'Yes',
    },
  ];

  return (
    <div className="min-h-screen text-zinc-300  p-6">
      <div className="w-full">
        <div className="flex justify-between items-center mb-6 bg-gradient-to-r from-teal-700 to-teal-600 text-white p-5 rounded-lg">
          <h2 className="text-xl font-semibold">DAILY ACTIVITY REPORT - CONTAINER'S ENTRY PLAN</h2>
          <span className="font-bold">DATE - {new Date().toLocaleDateString()}</span>
        </div>
        <div className="flex flex-col gap-4">
          {/* Headers */}
          <div
      className={`grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr_3fr_2fr_1fr_2fr_2fr_2fr_1fr_2fr_1fr] gap-3 p-4 rounded-xl border-l-4 border-teal-400 shadow-lg transition-all duration-300 animate-fade-in ${
        theme ? 'bg-zinc-800/50 backdrop-blur-md' : 'bg-gray-100/50 backdrop-blur-md'
      }`}
    >
      {[
        { icon: 'ri-number-1', label: 'No.', aria: 'Number' },
        { icon: 'ri-truck-line', label: 'Truck No.', aria: 'Truck Number' },
        { icon: 'ri-truck-line', label: 'Trailer No.', aria: 'Trailer Number' },
        { icon: 'ri-user-line', label: 'Transporter Name', aria: 'Transporter Name' },
        { icon: 'ri-inbox-line', label: 'Container No.', aria: 'Container Number' },
        { icon: 'ri-ruler-line', label: 'Size', aria: 'Container Size' },
        { icon: 'ri-calendar-line', label: 'Return Date', aria: 'Return Date' },
        { icon: 'ri-box-3-line', label: 'Commodity', aria: 'Commodity' },
        { icon: 'ri-user-2-line', label: 'Client Name', aria: 'Client Name' },
        { icon: 'ri-file-list-line', label: 'Type', aria: 'Type' },
        { icon: 'ri-weight-line', label: 'Weight', aria: 'Weight' },
        { icon: 'ri-alert-line', label: 'Damaged', aria: 'Damaged Status' },
      ].map(({ icon, label, aria }, index) => (
        <div
          key={index}
          className={`flex flex-col items-center justify-center p-3 rounded-lg  ${
            theme
              ? 'bg-teal-400/8 text-white'
              : 'bg-teal-400/5 text-gray-900'
          }`}
        >
          <i
            className={`${icon} text-teal-400 text-xl mb-1`}
            aria-label={aria}
          ></i>
          <span className="text-sm font-semibold tracking-wide">{label}</span>
        </div>
      ))}
    </div>

          {/* Rows */}
          {demoData.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-[1fr_2fr_2fr_3fr_2fr_1fr_2fr_2fr_2fr_1fr_2fr_1fr] ${theme ? 'bg-zinc-800/90 text-white' : 'bg-gray-200 text-gray-900'} p-4 rounded-lg shadow-md hover:shadow-xl hover:bg-teal-400/5 transition-all duration-300 border-l-2 border-transparent hover:border-teal-400`}
            >
              <div className="text-teal-400  flex items-center gap-2 text-center md:text-base text-sm">
                <i className="ri-number-1 md:hidden"></i>
                <span className="md:hidden">No. </span>
                {item.no}
              </div>
              <div className=" flex items-center gap-2 md:text-base text-sm">
                <i className="ri-truck-line text-teal-400 md:hidden"></i>
                <span className="md:hidden">Truck No. </span>
                {item.truckNo}
              </div>
              <div className=" flex items-center gap-2 md:text-base text-sm">
                <i className="ri-truck-line text-teal-400 md:hidden"></i>
                <span className="md:hidden">Trailer No.: </span>
                {item.trailerNo}
              </div>
              <div className=" flex items-center gap-2 md:text-base text-sm">
                <i className="ri-user-line text-teal-400 md:hidden"></i>
                <span className="md:hidden">Transporter: </span>
                {item.transporterName}
              </div>
              <div className="text-teal-400  flex items-center gap-2 md:text-base text-sm">
                <i className="ri-inbox-line text-teal-400 md:hidden"></i>
                <span className="md:hidden">Container No.: </span>
                {item.containerNo}
              </div>
              <div className=" flex items-center gap-2 text-center md:text-base text-sm">
                <i className="ri-ruler-line text-teal-400 md:hidden"></i>
                <span className="md:hidden">Size: </span>
                {item.size}
              </div>
              <div className=" flex items-center gap-2 md:text-base text-sm">
                <i className="ri-calendar-line text-teal-400 md:hidden"></i>
                <span className="md:hidden">Return Date: </span>
                {item.returnDate}
              </div>
              <div className=" flex items-center gap-2 md:text-base text-sm">
                <i className="ri-box-3-line text-teal-400 md:hidden"></i>
                <span className="md:hidden">Commodity: </span>
                {item.commodity}
              </div>
              <div className=" flex items-center gap-2 md:text-base text-sm">
                <i className="ri-user-2-line text-teal-400 md:hidden"></i>
                <span className="md:hidden">Client: </span>
                {item.clientName}
              </div>
              <div className=" flex items-center gap-2 text-center md:text-base text-sm">
                <i className="ri-file-list-line text-teal-400 md:hidden"></i>
                <span className="md:hidden">Type: </span>
                {item.type}
              </div>
              <div className=" flex items-center gap-2 md:text-base text-sm">
                <i className="ri-weight-line text-teal-400 md:hidden"></i>
                <span className="md:hidden">Weight: </span>
                {item.weight}
              </div>
              <div className="flex items-center justify-center md:text-base text-sm">
                <i className="ri-alert-line text-teal-400 md:hidden"></i>
                <span className="md:hidden">Damaged: </span>
                <span
                  className={`text-sm px-2 py-1 rounded-full flex items-center gap-1 ${
                    item.damaged === 'Yes' ? (!theme ? 'bg-red-300 text-red-800' : 'bg-red-900 text-red-300') : (!theme ? 'bg-green-300 text-green-800' : 'bg-green-900 text-green-300')
                  }`}
                >
                  <i
                    className={`text-lg ${item.damaged === 'Yes' ? 'ri-close-circle-line' : 'ri-checkbox-circle-line'}`}
                  ></i>
                 
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContainerEntryPlan;