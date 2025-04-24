import React, { useState } from 'react';

// Sample data for each report
const stockData = [
  {
    FileNo: "00007/UVC/25",
    ContainerNo: "ECMU1704969",
    BillOfLading: "SEL1793950",
    CargoStatus: "Delivered",
    CargoDescription: "HYDROGEN PEROXIDE",
    TotalCargoQty: 54,
    TotalCargoBalanceLeft: 30,
    Consignee: "ETG Zimbabwe",
    WHCargoArrivalDate: "2025-01-01"
  },
  {
    FileNo: "00007/UVC/25",
    ContainerNo: "TGCU2056939",
    BillOfLading: "SEL1793950",
    CargoStatus: "In Storage",
    CargoDescription: "HYDROGEN PEROXIDE",
    TotalCargoQty: null,
    TotalCargoBalanceLeft: null,
    Consignee: "ETG Zimbabwe",
    WHCargoArrivalDate: "2025-01-01"
  },
  {
    FileNo: "00010/UVC/25",
    ContainerNo: "TEMU6308594",
    BillOfLading: "NGP1728334",
    CargoStatus: "Completed",
    CargoDescription: "AGRICULTURAL GOODS",
    TotalCargoQty: 200,
    TotalCargoBalanceLeft: 0,
    Consignee: "SAS Freight",
    WHCargoArrivalDate: "2025-01-04"
  },
  {
    FileNo: "00012/UVC/25",
    ContainerNo: "IPXU2156420",
    BillOfLading: "MAEU245321299",
    CargoStatus: "In Storage",
    CargoDescription: "FABRICS",
    TotalCargoQty: 150,
    TotalCargoBalanceLeft: 150,
    Consignee: "ETG Zambia",
    WHCargoArrivalDate: "2025-01-06"
  },
  {
    FileNo: "00014/UVC/25",
    ContainerNo: "TCLU1234567",
    BillOfLading: "MAEU245321299",
    CargoStatus: "In Transit",
    CargoDescription: "ELECTRONICS",
    TotalCargoQty: 300,
    TotalCargoBalanceLeft: 300,
    Consignee: "Global Imports",
    WHCargoArrivalDate: "2025-01-08"
  }
];

const clearanceData = [
  {
    FileNo: "00007/UVC/25",
    BillOfLading: "SEL1793950",
    ContainerNo: "ECMU1704969",
    PortDueDate: "2025-01-12",
    Status: "Completed",
    DwellDays: 5,
    StorageDays: 6,
    VesselName: "CMA-CGM",
    POD: "MZBEW"
  },
  {
    FileNo: "00007/UVC/25",
    BillOfLading: "SEL1793950",
    ContainerNo: "TGCU2056939",
    PortDueDate: "2025-01-12",
    Status: "Completed",
    DwellDays: 5,
    StorageDays: 6,
    VesselName: "CMA-CGM",
    POD: "MZBEW"
  },
  {
    FileNo: null,
    BillOfLading: "MAEU245321299",
    ContainerNo: "FCIU4518976",
    PortDueDate: "2025-04-17",
    Status: "Processing",
    DwellDays: null,
    StorageDays: null,
    VesselName: "CMA CGM",
    POD: "BEIRA/MZ"
  },
  {
    FileNo: "00008/UVC/25",
    BillOfLading: "MAEU245321299",
    ContainerNo: "IPXU2156420",
    PortDueDate: "2025-04-17",
    Status: "Delayed",
    DwellDays: 10,
    StorageDays: 12,
    VesselName: "MSC",
    POD: "BEIRA/MZ"
  },
  {
    FileNo: "00009/UVC/25",
    BillOfLading: "MAEU245321299",
    ContainerNo: "TEMU5425050",
    PortDueDate: "2025-04-17",
    Status: "Delivered",
    DwellDays: 3,
    StorageDays: 4,
    VesselName: "MAERSK",
    POD: "BEIRA/MZ"
  }
];

const trucksData = [
  {
    TruckNo: "ALG 855 MC",
    TrailerNo: "AI 398 MC",
    ContainerNo: "TEMU6308594",
    BillOfLading: "NGP1728334",
    Destination: "Lilongwe",
    Status: "Completed",
    Costing: "USD 2700",
    DriverName: "Saide Joaquim",
    DeliveryDate: "2025-01-04"
  },
  {
    TruckNo: "ALG 858 MC",
    TrailerNo: "AI 400 MC",
    ContainerNo: "ECMU1704969",
    BillOfLading: "SEL1793950",
    Destination: "GMS-WH",
    Status: "Completed",
    Costing: "USD 250",
    DriverName: "Malicane Benjamane",
    DeliveryDate: "2025-01-05"
  },
  {
    TruckNo: "ALG 860 MC",
    TrailerNo: "AI 402 MC",
    ContainerNo: "TEMU5425050",
    BillOfLading: "MAEU245321299",
    Destination: "GMS-WH",
    Status: "Delivered",
    Costing: "USD 300",
    DriverName: "John Doe",
    DeliveryDate: "2025-01-10"
  },
  {
    TruckNo: "ALG 862 MC",
    TrailerNo: "AI 404 MC",
    ContainerNo: "IPXU2156420",
    BillOfLading: "MAEU245321299",
    Destination: "Beira",
    Status: "In Transit",
    Costing: "USD 500",
    DriverName: "Jane Smith",
    DeliveryDate: null
  },
  {
    TruckNo: "ALG 864 MC",
    TrailerNo: "AI 406 MC",
    ContainerNo: "TCLU1234567",
    BillOfLading: "MAEU245321299",
    Destination: "Zimbabwe",
    Status: "Processing",
    Costing: "USD 400",
    DriverName: "Mike Johnson",
    DeliveryDate: null
  }
];

const MultiLogisticsReport = ({theme}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [reportType, setReportType] = useState('stock');
  const [filteredData, setFilteredData] = useState(stockData);

  // Handle report type change
  const handleReportChange = (e) => {
    const selectedReport = e.target.value;
    setReportType(selectedReport);
    setSearchQuery('');

    // Reset to full dataset for the selected report
    if (selectedReport === 'stock') {
      setFilteredData(stockData);
    } else if (selectedReport === 'clearance') {
      setFilteredData(clearanceData);
    } else if (selectedReport === 'trucks') {
      setFilteredData(trucksData);
    }
  };

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    let dataToFilter;
    if (reportType === 'stock') {
      dataToFilter = stockData;
    } else if (reportType === 'clearance') {
      dataToFilter = clearanceData;
    } else {
      dataToFilter = trucksData;
    }

    if (query.trim() === '') {
      setFilteredData(dataToFilter);
      return;
    }

    const filtered = dataToFilter.filter(
      (item) =>
        (item.FileNo && item.FileNo.toLowerCase().includes(query)) ||
        (item.BillOfLading && item.BillOfLading.toLowerCase().includes(query)) ||
        (item.ContainerNo && item.ContainerNo.toLowerCase().includes(query))
    );
    setFilteredData(filtered);
  };

  // Define table headers for each report type
  const headers = {
    stock: [
      'File No.',
      'Container No.',
      'BL No.',
      'Cargo Status',
      'Cargo Description',
      'Total Cargo Qty',
      'Balance Left',
      'Consignee',
      'Arrival Date'
    ],
    clearance: [
      'File No.',
      'BL No.',
      'Container No.',
      'Port Due Date',
      'Status',
      'Dwell Days',
      'Storage Days',
      'Vessel Name',
      'POD'
    ],
    trucks: [
      'Truck No.',
      'Trailer No.',
      'Container No.',
      'BL No.',
      'Destination',
      'Status',
      'Costing',
      'Driver Name',
      'Delivery Date'
    ]
  };

  return (
    <div className=" p-6">
      <div className={`w-full ${theme ? 'bg-zinc-800/80' : 'bg-gray-100'} p-6 rounded-lg`}>
        {/* Header */}
        <div className="flex justify-between items-center mb-6 bg-gradient-to-r from-teal-700 to-teal-600 text-white py-3 px-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
          <i class="ri-align-item-bottom-fill"></i>
            Multi Logistics Report
          </h2>
          <span className=" font-bold">DATE - {new Date().toLocaleDateString()}</span>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {/* Report Type Dropdown */}
          <div className="relative max-w-xs">
            <select
              value={reportType}
              onChange={handleReportChange}
              className={`w-full p-3 ${theme ? 'bg-zinc-700/80 text-white' : 'bg-gray-300 text-gray-900'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all appearance-none`}
            >
              <option value="stock">Search Stock Report</option>
              <option value="clearance">Clearance & Customs Report</option>
              <option value="trucks">Trucks Operational Report</option>
            </select>
            <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400"></i>
          </div>

          {/* Search Input */}
          <div className="relative max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search..."
              className={`w-full p-3 ${theme ? 'bg-zinc-700/80 text-white' : 'bg-gray-300 text-gray-900'} rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all`}
            />
            <i className="ri-search-line absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400"></i>
          </div>
        </div>

        {/* Report Table */}
        <div className={`rounded-lg shadow-xl overflow-x-auto ${theme ? 'bg-zinc-800/80' : 'bg-gray-200'}`}>
          {filteredData.length === 0 ? (
            <div className="p-6 text-center text-zinc-400">
              No results found for "{searchQuery}"
            </div>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className={` ${theme ? 'bg-zinc-800/50' : 'bg-gray-300/50'}`}>
                  {headers[reportType].map((header, index) => (
                    <th key={index} className="p-4 text-teal-400">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-t border-zinc-700 hover:bg-zinc-700/30 transition-all ${theme ? 'bg-zinc-500/30 text-white' : 'bg-gray-200 text-gray-900'}`}
                  >
                    {reportType === 'stock' && (
                      <>
                        <td className="p-4">{item.FileNo || '-'}</td>
                        <td className="p-4">{item.ContainerNo || '-'}</td>
                        <td className="p-4">{item.BillOfLading || '-'}</td>
                        <td className="p-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              item.CargoStatus === 'Delivered' || item.CargoStatus === 'Completed'
                                ? 'bg-green-500/20 text-green-400'
                                : item.CargoStatus === 'In Storage'
                                ? 'bg-yellow-500/20 text-yellow-400'
                                : 'bg-red-500/20 text-red-400'
                            }`}
                          >
                            {item.CargoStatus || '-'}
                          </span>
                        </td>
                        <td className="p-4">{item.CargoDescription || '-'}</td>
                        <td className="p-4">{item.TotalCargoQty || '-'}</td>
                        <td className="p-4">{item.TotalCargoBalanceLeft || '-'}</td>
                        <td className="p-4">{item.Consignee || '-'}</td>
                        <td className="p-4">{item.WHCargoArrivalDate || '-'}</td>
                      </>
                    )}
                    {reportType === 'clearance' && (
                      <>
                        <td className="p-4">{item.FileNo || '-'}</td>
                        <td className="p-4">{item.BillOfLading || '-'}</td>
                        <td className="p-4">{item.ContainerNo || '-'}</td>
                        <td className="p-4">{item.PortDueDate || '-'}</td>
                        <td className="p-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              item.Status === 'Delivered' || item.Status === 'Completed'
                                ? 'bg-green-500/20 text-green-400'
                                : item.Status === 'Processing' || item.Status === 'Delayed'
                                ? 'bg-red-500/20 text-red-400'
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}
                          >
                            {item.Status || '-'}
                          </span>
                        </td>
                        <td className="p-4">{item.DwellDays || '-'}</td>
                        <td className="p-4">{item.StorageDays || '-'}</td>
                        <td className="p-4">{item.VesselName || '-'}</td>
                        <td className="p-4">{item.POD || '-'}</td>
                      </>
                    )}
                    {reportType === 'trucks' && (
                      <>
                        <td className="p-4">{item.TruckNo || '-'}</td>
                        <td className="p-4">{item.TrailerNo || '-'}</td>
                        <td className="p-4">{item.ContainerNo || '-'}</td>
                        <td className="p-4">{item.BillOfLading || '-'}</td>
                        <td className="p-4">{item.Destination || '-'}</td>
                        <td className="p-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs ${
                              item.Status === 'Delivered' || item.Status === 'Completed'
                                ? 'bg-green-500/20 text-green-400'
                                : item.Status === 'In Transit' || item.Status === 'Processing'
                                ? 'bg-red-500/20 text-red-400'
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}
                          >
                            {item.Status || '-'}
                          </span>
                        </td>
                        <td className="p-4">{item.Costing || '-'}</td>
                        <td className="p-4">{item.DriverName || '-'}</td>
                        <td className="p-4">{item.DeliveryDate || '-'}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiLogisticsReport;