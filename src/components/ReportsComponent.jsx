import React, { useState } from 'react';

const ReportsComponent = ({ theme }) => {
  const [selectedReport, setSelectedReport] = useState('entry');

  // Data for Container Entry Plan
  const entryPlanData = [
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
  ];

  // Data for Container Delivery Plan
  const deliveryPlanData = [
    {
      no: '1',
      truckNo: 'TRK001',
      trailerNo: 'TRL001',
      transporterName: 'ABC Transports',
      driverName: 'John Doe',
      deliveryDate: '2025-04-01',
      deliveryTerminal: 'Terminal A',
      containerNo: 'CN001',
      size: '20ft',
      delayed: 'No',
      remarks: 'On time',
    },
    {
      no: '2',
      truckNo: 'TRK002',
      trailerNo: 'TRL002',
      transporterName: 'DEF Logistics',
      driverName: 'Jane Smith',
      deliveryDate: '2025-04-02',
      deliveryTerminal: 'Terminal B',
      containerNo: 'CN002',
      size: '40ft',
      delayed: 'Yes',
      remarks: 'Traffic delay',
    },
    {
      no: '3',
      truckNo: 'TRK003',
      trailerNo: 'TRL003',
      transporterName: 'GHI Shipping',
      driverName: 'Mike Brown',
      deliveryDate: '2025-04-03',
      deliveryTerminal: 'Terminal C',
      containerNo: 'CN003',
      size: '20ft',
      delayed: 'No',
      remarks: 'Smooth delivery',
    },
    {
      no: '4',
      truckNo: 'TRK004',
      trailerNo: 'TRL004',
      transporterName: 'JKL Transport',
      driverName: 'Sarah Lee',
      deliveryDate: '2025-04-04',
      deliveryTerminal: 'Terminal D',
      containerNo: 'CN004',
      size: '40ft',
      delayed: 'No',
      remarks: 'No issues',
    },
    {
      no: '5',
      truckNo: 'TRK005',
      trailerNo: 'TRL005',
      transporterName: 'MNO Carriers',
      driverName: 'Tom Clark',
      deliveryDate: '2025-04-05',
      deliveryTerminal: 'Terminal E',
      containerNo: 'CN005',
      size: '20ft',
      delayed: 'Yes',
      remarks: 'Mechanical issue',
    },
  ];

  // Data for Commodities Delivery Plan
  const commoditiesPlanData = [
    {
      no: '1',
      truckNo: 'TRK001',
      trailerNo: 'TRL001',
      transporterName: 'ABC Transports',
      driverName: 'John Doe',
      loadingDate: '2025-04-01',
      loadingFrom: 'Warehouse A',
      commodity: 'Electronics',
      clientName: 'XYZ Corp',
      type: 'Dry',
      weight: '15000kg',
      remarks: 'Loaded on time',
    },
    {
      no: '2',
      truckNo: 'TRK002',
      trailerNo: 'TRL002',
      transporterName: 'DEF Logistics',
      driverName: 'Jane Smith',
      loadingDate: '2025-04-02',
      loadingFrom: 'Warehouse B',
      commodity: 'Textiles',
      clientName: 'LMN Ltd',
      type: 'Reefer',
      weight: '20000kg',
      remarks: 'Slight delay',
    },
    {
      no: '3',
      truckNo: 'TRK003',
      trailerNo: 'TRL003',
      transporterName: 'GHI Shipping',
      driverName: 'Mike Brown',
      loadingDate: '2025-04-03',
      loadingFrom: 'Warehouse C',
      commodity: 'Machinery',
      clientName: 'PQR Inc',
      type: 'Dry',
      weight: '18000kg',
      remarks: 'No issues',
    },
    {
      no: '4',
      truckNo: 'TRK004',
      trailerNo: 'TRL004',
      transporterName: 'JKL Transport',
      driverName: 'Sarah Lee',
      loadingDate: '2025-04-04',
      loadingFrom: 'Warehouse D',
      commodity: 'Food Items',
      clientName: 'STU Co',
      type: 'Reefer',
      weight: '22000kg',
      remarks: 'Smooth loading',
    },
    {
      no: '5',
      truckNo: 'TRK005',
      trailerNo: 'TRL005',
      transporterName: 'MNO Carriers',
      driverName: 'Tom Clark',
      loadingDate: '2025-04-05',
      loadingFrom: 'Warehouse E',
      commodity: 'Chemicals',
      clientName: 'VWX Ltd',
      type: 'Dry',
      weight: '16000kg',
      remarks: 'Extra checks',
    },
  ];

  // Headers for each report
  const entryPlanHeaders = [
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
  ];

  const deliveryPlanHeaders = [
    { icon: 'ri-number-1', label: 'No.', aria: 'Number' },
    { icon: 'ri-truck-line', label: 'Truck No.', aria: 'Truck Number' },
    { icon: 'ri-truck-line', label: 'Trailer No.', aria: 'Trailer Number' },
    { icon: 'ri-user-line', label: 'Transporter Name', aria: 'Transporter Name' },
    { icon: 'ri-user-3-line', label: 'Driver Name', aria: 'Driver Name' },
    { icon: 'ri-calendar-line', label: 'Delivery Date', aria: 'Delivery Date' },
    { icon: 'ri-building-line', label: 'Delivery Terminal', aria: 'Delivery Terminal' },
    { icon: 'ri-inbox-line', label: 'Container No.', aria: 'Container Number' },
    { icon: 'ri-ruler-line', label: 'Size', aria: 'Container Size' },
    { icon: 'ri-time-line', label: 'Delayed', aria: 'Delayed Status' },
    { icon: 'ri-message-line', label: 'Remarks', aria: 'Remarks' },
  ];

  const commoditiesPlanHeaders = [
    { icon: 'ri-number-1', label: 'No.', aria: 'Number' },
    { icon: 'ri-truck-line', label: 'Truck No.', aria: 'Truck Number' },
    { icon: 'ri-truck-line', label: 'Trailer No.', aria: 'Trailer Number' },
    { icon: 'ri-user-line', label: 'Transporter Name', aria: 'Transporter Name' },
    { icon: 'ri-user-3-line', label: 'Driver Name', aria: 'Driver Name' },
    { icon: 'ri-calendar-line', label: 'Loading Date', aria: 'Loading Date' },
    { icon: 'ri-map-pin-line', label: 'Loading From', aria: 'Loading From' },
    { icon: 'ri-box-3-line', label: 'Commodity', aria: 'Commodity' },
    { icon: 'ri-user-2-line', label: 'Client Name', aria: 'Client Name' },
    { icon: 'ri-file-list-line', label: 'Type', aria: 'Type' },
    { icon: 'ri-weight-line', label: 'Weight', aria: 'Weight' },
    { icon: 'ri-message-line', label: 'Remarks', aria: 'Remarks' },
  ];

  // Determine which data and headers to display based on selected report
  const reportData =
    selectedReport === 'entry'
      ? entryPlanData
      : selectedReport === 'delivery'
      ? deliveryPlanData
      : commoditiesPlanData;

  const reportHeaders =
    selectedReport === 'entry'
      ? entryPlanHeaders
      : selectedReport === 'delivery'
      ? deliveryPlanHeaders
      : commoditiesPlanHeaders;

  const reportTitle =
    selectedReport === 'entry'
      ? "CONTAINER'S ENTRY PLAN"
      : selectedReport === 'delivery'
      ? "CONTAINER'S DELIVERY PLAN"
      : "COMMODITIES DELIVERY PLAN";

  // Define grid columns based on the number of headers
  const gridCols = reportHeaders.map((_, index) => {
    if (index === 0) return '1fr'; // No.
    if (index === 1 || index === 2) return '2fr'; // Truck No., Trailer No.
    if (index === 3) return '3fr'; // Transporter Name
    if (index === 4) return '2fr'; // Container No. or Driver Name
    if (index === 5) return '1fr'; // Size or Delivery Date
    if (index === 6) return '2fr'; // Return Date or Delivery Terminal
    if (index === 7) return '2fr'; // Commodity
    if (index === 8) return '2fr'; // Client Name
    if (index === 9) return '1fr'; // Type
    if (index === 10) return '2fr'; // Weight
    return '1fr'; // Damaged, Delayed, or Remarks
  }).join('_');

  return (
    <div className="min-h-screen text-zinc-300 p-6">
      <div className="w-full">
        <div className="flex justify-between items-center mb-6 bg-gradient-to-r from-teal-700 to-teal-600 text-white p-5 rounded-lg">
          <h2 className="text-xl font-semibold">DAILY ACTIVITY REPORT - {reportTitle}</h2>
          <div className="flex items-center gap-4">
            <select
              value={selectedReport}
              onChange={(e) => setSelectedReport(e.target.value)}
              className="bg-teal-500 text-white p-2 rounded-lg"
            >
              <option value="entry">Container Entry Plan</option>
              <option value="delivery">Container Delivery Plan</option>
              <option value="commodities">Commodities Delivery Plan</option>
            </select>
            <span className="font-bold">DATE - {new Date().toLocaleDateString()}</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {/* Headers */}
          <div
            className={`grid gap-3 grid-cols-1 md:grid-cols-[${gridCols}] ${theme ? 'bg-zinc-800/90 text-white' : 'bg-gray-200 text-gray-900'} p-4 rounded-lg shadow-md hover:shadow-xl hover:bg-teal-400/5 transition-all duration-300 border-l-2 border-teal-400`}
          >
            {reportHeaders.map(({ icon, label, aria }, index) => (
              <div
                key={index}
                className={`flex flex-col items-center justify-center p-3 rounded-lg ${
                  theme ? 'bg-teal-400/8 text-white' : 'bg-teal-400/5 text-gray-900'
                }`}
              >
                <i className={`${icon} text-teal-400 text-xl mb-1`} aria-label={aria}></i>
                <span className="text-sm font-semibold tracking-wide">{label}</span>
              </div>
            ))}
          </div>

          {/* Rows */}
          {reportData.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-[${gridCols}] ${theme ? 'bg-zinc-800/90 text-white' : 'bg-gray-200 text-gray-900'} p-4 rounded-lg shadow-md hover:shadow-xl hover:bg-teal-400/5 transition-all duration-300 border-l-2 border-transparent hover:border-teal-400`}
            >
              <div className="text-teal-400 flex items-center gap-2 text-center md:text-base text-sm">
                <i className="ri-number-1 md:hidden"></i>
                <span className="md:hidden">No. </span>
                {item.no}
              </div>
              <div className="flex items-center gap-2 md:text-base text-sm">
                <i className="ri-truck-line text-teal-400 md:hidden"></i>
                <span className="md:hidden">Truck No. </span>
                {item.truckNo}
              </div>
              <div className="flex items-center gap-2 md:text-base text-sm">
                <i className="ri-truck-line text-teal-400 md:hidden"></i>
                <span className="md:hidden">Trailer No.: </span>
                {item.trailerNo}
              </div>
              <div className="flex items-center gap-2 md:text-base text-sm">
                <i className="ri-user-line text-teal-400 md:hidden"></i>
                <span className="md:hidden">Transporter: </span>
                {item.transporterName}
              </div>

              {/* Conditional fields based on report type */}
              {selectedReport !== 'entry' && (
                <div className="flex items-center gap-2 md:text-base text-sm">
                  <i className="ri-user-3-line text-teal-400 md:hidden"></i>
                  <span className="md:hidden">Driver: </span>
                  {item.driverName}
                </div>
              )}

              {selectedReport === 'entry' ? (
                <>
                  <div className="text-teal-400 flex items-center gap-2 md:text-base text-sm">
                    <i className="ri-inbox-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Container No.: </span>
                    {item.containerNo}
                  </div>
                  <div className="flex items-center gap-2 text-center md:text-base text-sm">
                    <i className="ri-ruler-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Size: </span>
                    {item.size}
                  </div>
                  <div className="flex items-center gap-2 md:text-base text-sm">
                    <i className="ri-calendar-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Return Date: </span>
                    {item.returnDate}
                  </div>
                  <div className="flex items-center gap-2 md:text-base text-sm">
                    <i className="ri-box-3-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Commodity: </span>
                    {item.commodity}
                  </div>
                  <div className="flex items-center gap-2 md:text-base text-sm">
                    <i className="ri-user-2-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Client: </span>
                    {item.clientName}
                  </div>
                  <div className="flex items-center gap-2 text-center md:text-base text-sm">
                    <i className="ri-file-list-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Type: </span>
                    {item.type}
                  </div>
                  <div className="flex items-center gap-2 md:text-base text-sm">
                    <i className="ri-weight-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Weight: </span>
                    {item.weight}
                  </div>
                  <div className="flex items-center justify-center md:text-base text-sm">
                    <i className="ri-alert-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Damaged: </span>
                    <span
                      className={`text-sm px-2 py-1 rounded-full flex items-center gap-1 ${
                        item.damaged === 'Yes'
                          ? !theme
                            ? 'bg-red-300 text-red-800'
                            : 'bg-red-900 text-red-300'
                          : !theme
                          ? 'bg-green-300 text-green-800'
                          : 'bg-green-900 text-green-300'
                      }`}
                    >
                      <i
                        className={`text-lg ${
                          item.damaged === 'Yes' ? 'ri-close-circle-line' : 'ri-checkbox-circle-line'
                        }`}
                      ></i>
                    </span>
                  </div>
                </>
              ) : selectedReport === 'delivery' ? (
                <>
                  <div className="flex items-center gap-2 md:text-base text-sm">
                    <i className="ri-calendar-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Delivery Date: </span>
                    {item.deliveryDate}
                  </div>
                  <div className="flex items-center gap-2 md:text-base text-sm">
                    <i className="ri-building-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Terminal: </span>
                    {item.deliveryTerminal}
                  </div>
                  <div className="text-teal-400 flex items-center gap-2 md:text-base text-sm">
                    <i className="ri-inbox-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Container No.: </span>
                    {item.containerNo}
                  </div>
                  <div className="flex items-center gap-2 text-center md:text-base text-sm">
                    <i className="ri-ruler-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Size: </span>
                    {item.size}
                  </div>
                  <div className="flex items-center justify-center md:text-base text-sm">
                    <i className="ri-time-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Delayed: </span>
                    <span
                      className={`text-sm px-2 py-1 rounded-full flex items-center gap-1 ${
                        item.delayed === 'Yes'
                          ? !theme
                            ? 'bg-red-300 text-red-800'
                            : 'bg-red-900 text-red-300'
                          : !theme
                          ? 'bg-green-300 text-green-800'
                          : 'bg-green-900 text-green-300'
                      }`}
                    >
                      <i
                        className={`text-lg ${
                          item.delayed === 'Yes' ? 'ri-close-circle-line' : 'ri-checkbox-circle-line'
                        }`}
                      ></i>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 md:text-base text-sm">
                    <i className="ri-message-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Remarks: </span>
                    {item.remarks}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 md:text-base text-sm">
                    <i className="ri-calendar-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Loading Date: </span>
                    {item.loadingDate}
                  </div>
                  <div className="flex items-center gap-2 md:text-base text-sm">
                    <i className="ri-map-pin-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Loading From: </span>
                    {item.loadingFrom}
                  </div>
                  <div className="flex items-center gap-2 md:text-base text-sm">
                    <i className="ri-box-3-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Commodity: </span>
                    {item.commodity}
                  </div>
                  <div className="flex items-center gap-2 md:text-base text-sm">
                    <i className="ri-user-2-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Client: </span>
                    {item.clientName}
                  </div>
                  <div className="flex items-center gap-2 text-center md:text-base text-sm">
                    <i className="ri-file-list-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Type: </span>
                    {item.type}
                  </div>
                  <div className="flex items-center gap-2 md:text-base text-sm">
                    <i className="ri-weight-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Weight: </span>
                    {item.weight}
                  </div>
                  <div className="flex items-center gap-2 md:text-base text-sm">
                    <i className="ri-message-line text-teal-400 md:hidden"></i>
                    <span className="md:hidden">Remarks: </span>
                    {item.remarks}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReportsComponent;