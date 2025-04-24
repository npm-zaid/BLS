import React, { useState } from 'react';

// Sample data (replace with your actual JSON data)
const logisticsData =[
    {
      "FileNo": "00007/UVC/25",
      "WHCargoArrivalDate": "2025-01-01",
      "VesselName": "CMA-CGM",
      "BillOfLading": "SEL1793950",
      "ContainerNo": "ECMU1704969",
      "SealNo": "L6008074",
      "Qty": 1,
      "ContainerType": "20 DV/GP/ST",
      "CountryOfOrigin": "BUSAN/KOREA",
      "Consignee": "ETG Zimbabwe",
      "CargoExpiryDate": "2025-10-30",
      "CargoStatus": "Delivered",
      "CargoDescription": "HYDROGEN PEROXIDE",
      "ProductClass": "Class-5",
      "ContainerCargoQty": 18,
      "PackageType": "Tanks",
      "NetWeightPerUnitKgs": 1150,
      "TotalNetWeightKgs": 20700,
      "GrossWeightKgs": 21708,
      "TotalCargoQty": 54,
      "DamagedCargo": 0,
      "ShortCargo": 0,
      "DeliveredTotalCargo": 24,
      "TotalCargoBalanceLeft": 30,
      "BalanceCargoOccupiedAreaMTS": 34.5,
      "CargoTrucksDeliveryDate": "2025-03-03",
      "TruckTrailerDetails": "AEU5518/AFJ8326",
      "Remarks": ""
    },
    {
      "FileNo": "00007/UVC/25",
      "WHCargoArrivalDate": "2025-01-01",
      "VesselName": "CMA-CGM",
      "BillOfLading": "SEL1793950",
      "ContainerNo": "TGCU2056939",
      "SealNo": "L6003660",
      "Qty": 1,
      "ContainerType": "20 DV/GP/ST",
      "CountryOfOrigin": "BUSAN/KOREA",
      "Consignee": "ETG Zimbabwe",
      "CargoExpiryDate": "2025-10-30",
      "CargoStatus": "In Storage",
      "CargoDescription": "HYDROGEN PEROXIDE",
      "ProductClass": "Class-5",
      "ContainerCargoQty": 18,
      "PackageType": "Tanks",
      "NetWeightPerUnitKgs": 1150,
      "TotalNetWeightKgs": 20700,
      "GrossWeightKgs": 21708,
      "TotalCargoQty": null,
      "DamagedCargo": null,
      "ShortCargo": null,
      "DeliveredTotalCargo": null,
      "TotalCargoBalanceLeft": null,
      "BalanceCargoOccupiedAreaMTS": null,
      "CargoTrucksDeliveryDate": null,
      "TruckTrailerDetails": null,
      "Remarks": ""
    },
    {
      "FileNo": null,
      "WHCargoArrivalDate": null,
      "VesselName": "CMA CGM",
      "BillOfLading": "MAEU245321299",
      "ContainerNo": "FCIU4518976",
      "SealNo": "BOLT51213684",
      "Qty": 1,
      "ContainerType": "20 DV/GP/ST",
      "CountryOfOrigin": "NEW YORK/NY",
      "Consignee": "CCIS EX SERMOZ",
      "CargoExpiryDate": "2025-04-17",
      "CargoStatus": "Processing",
      "CargoDescription": "CHEMICALS",
      "ProductClass": "Class-3",
      "ContainerCargoQty": 20,
      "PackageType": "Barrels",
      "NetWeightPerUnitKgs": 200,
      "TotalNetWeightKgs": 4000,
      "GrossWeightKgs": 4200,
      "TotalCargoQty": 20,
      "DamagedCargo": 0,
      "ShortCargo": 0,
      "DeliveredTotalCargo": 0,
      "TotalCargoBalanceLeft": 20,
      "BalanceCargoOccupiedAreaMTS": 15,
      "CargoTrucksDeliveryDate": null,
      "TruckTrailerDetails": null,
      "Remarks": "Delivery by BLS Operations"
    },
    {
      "FileNo": "00008/UVC/25",
      "WHCargoArrivalDate": "2025-01-02",
      "VesselName": "MSC",
      "BillOfLading": "MAEU245321299",
      "ContainerNo": "IPXU2156420",
      "SealNo": "L6008074",
      "Qty": 1,
      "ContainerType": "20 DV/GP/ST",
      "CountryOfOrigin": "SURAT/IN",
      "Consignee": null,
      "CargoExpiryDate": "2025-04-17",
      "CargoStatus": "Delayed",
      "CargoDescription": "TEXTILES",
      "ProductClass": null,
      "ContainerCargoQty": 100,
      "PackageType": "Boxes",
      "NetWeightPerUnitKgs": 50,
      "TotalNetWeightKgs": 5000,
      "GrossWeightKgs": 5200,
      "TotalCargoQty": 100,
      "DamagedCargo": 2,
      "ShortCargo": 0,
      "DeliveredTotalCargo": 0,
      "TotalCargoBalanceLeft": 98,
      "BalanceCargoOccupiedAreaMTS": 25,
      "CargoTrucksDeliveryDate": null,
      "TruckTrailerDetails": null,
      "Remarks": "Awaiting customs clearance"
    },
    {
      "FileNo": "00009/UVC/25",
      "WHCargoArrivalDate": "2025-01-03",
      "VesselName": "MAERSK",
      "BillOfLading": "MAEU245321299",
      "ContainerNo": "TEMU5425050",
      "SealNo": "L6003660",
      "Qty": 2,
      "ContainerType": "20 DV/GP/ST",
      "CountryOfOrigin": null,
      "Consignee": null,
      "CargoExpiryDate": "2025-04-17",
      "CargoStatus": "Delivered",
      "CargoDescription": "MACHINERY PARTS",
      "ProductClass": "Class-8",
      "ContainerCargoQty": 50,
      "PackageType": "Crates",
      "NetWeightPerUnitKgs": 300,
      "TotalNetWeightKgs": 15000,
      "GrossWeightKgs": 15500,
      "TotalCargoQty": 100,
      "DamagedCargo": 0,
      "ShortCargo": 0,
      "DeliveredTotalCargo": 100,
      "TotalCargoBalanceLeft": 0,
      "BalanceCargoOccupiedAreaMTS": 0,
      "CargoTrucksDeliveryDate": "2025-01-10",
      "TruckTrailerDetails": "ALG858MC/AI400MC",
      "Remarks": "Delivered to GMS-WH"
    },
    {
      "FileNo": "00010/UVC/25",
      "WHCargoArrivalDate": "2025-01-04",
      "VesselName": "CMA-CGM",
      "BillOfLading": "NGP1728334",
      "ContainerNo": "TEMU6308594",
      "SealNo": null,
      "Qty": 1,
      "ContainerType": "40 DV/GP/ST",
      "CountryOfOrigin": null,
      "Consignee": "SAS Freight",
      "CargoExpiryDate": null,
      "CargoStatus": "Completed",
      "CargoDescription": "AGRICULTURAL GOODS",
      "ProductClass": null,
      "ContainerCargoQty": 200,
      "PackageType": "Bags",
      "NetWeightPerUnitKgs": 25,
      "TotalNetWeightKgs": 5000,
      "GrossWeightKgs": 5100,
      "TotalCargoQty": 200,
      "DamagedCargo": 0,
      "ShortCargo": 0,
      "DeliveredTotalCargo": 200,
      "TotalCargoBalanceLeft": 0,
      "BalanceCargoOccupiedAreaMTS": 0,
      "CargoTrucksDeliveryDate": "2025-01-04",
      "TruckTrailerDetails": "ALG855MC/AI398MC",
      "Remarks": "Delivered to Lilongwe"
    },
    {
      "FileNo": "00011/UVC/25",
      "WHCargoArrivalDate": "2025-01-05",
      "VesselName": "CMA-CGM",
      "BillOfLading": "SEL1793950",
      "ContainerNo": "ECMU1704969",
      "SealNo": "L6008074",
      "Qty": 1,
      "ContainerType": "20 DV/GP/ST",
      "CountryOfOrigin": "BUSAN/KOREA",
      "Consignee": "BLS Operations",
      "CargoExpiryDate": "2025-10-30",
      "CargoStatus": "Completed",
      "CargoDescription": "CHEMICALS",
      "ProductClass": "Class-5",
      "ContainerCargoQty": 20,
      "PackageType": "Tanks",
      "NetWeightPerUnitKgs": 1000,
      "TotalNetWeightKgs": 20000,
      "GrossWeightKgs": 21000,
      "TotalCargoQty": 20,
      "DamagedCargo": 0,
      "ShortCargo": 0,
      "DeliveredTotalCargo": 20,
      "TotalCargoBalanceLeft": 0,
      "BalanceCargoOccupiedAreaMTS": 0,
      "CargoTrucksDeliveryDate": "2025-01-05",
      "TruckTrailerDetails": "ALG858MC/AI400MC",
      "Remarks": "Cont. Vazio"
    },
    {
      "FileNo": "00012/UVC/25",
      "WHCargoArrivalDate": "2025-01-06",
      "VesselName": "MSC",
      "BillOfLading": "MAEU245321299",
      "ContainerNo": "IPXU2156420",
      "SealNo": "L6008074",
      "Qty": 1,
      "ContainerType": "20 DV/GP/ST",
      "CountryOfOrigin": "SURAT/IN",
      "Consignee": "ETG Zambia",
      "CargoExpiryDate": "2025-04-17",
      "CargoStatus": "In Storage",
      "CargoDescription": "FABRICS",
      "ProductClass": null,
      "ContainerCargoQty": 150,
      "PackageType": "Boxes",
      "NetWeightPerUnitKgs": 40,
      "TotalNetWeightKgs": 6000,
      "GrossWeightKgs": 6200,
      "TotalCargoQty": 150,
      "DamagedCargo": 0,
      "ShortCargo": 0,
      "DeliveredTotalCargo": 0,
      "TotalCargoBalanceLeft": 150,
      "BalanceCargoOccupiedAreaMTS": 30,
      "CargoTrucksDeliveryDate": null,
      "TruckTrailerDetails": null,
      "Remarks": ""
    },
    {
      "FileNo": "00013/UVC/25",
      "WHCargoArrivalDate": "2025-01-07",
      "VesselName": "CMA-CGM",
      "BillOfLading": "SEL1793950",
      "ContainerNo": "ECMU1704969",
      "SealNo": "L6008074",
      "Qty": 1,
      "ContainerType": "20 DV/GP/ST",
      "CountryOfOrigin": "BUSAN/KOREA",
      "Consignee": "ETG Zimbabwe",
      "CargoExpiryDate": "2025-10-30",
      "CargoStatus": "Processing",
      "CargoDescription": "HYDROGEN PEROXIDE",
      "ProductClass": "Class-5",
      "ContainerCargoQty": 18,
      "PackageType": "Tanks",
      "NetWeightPerUnitKgs": 1150,
      "TotalNetWeightKgs": 20700,
      "GrossWeightKgs": 21708,
      "TotalCargoQty": 54,
      "DamagedCargo": 0,
      "ShortCargo": 0,
      "DeliveredTotalCargo": 0,
      "TotalCargoBalanceLeft": 54,
      "BalanceCargoOccupiedAreaMTS": 34.5,
      "CargoTrucksDeliveryDate": null,
      "TruckTrailerDetails": null,
      "Remarks": "Pending delivery"
    }
  ]
  
 

const LogisticsReport = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(logisticsData);

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === '') {
      setFilteredData(logisticsData);
      return;
    }

    const filtered = logisticsData.filter(
      (item) =>
        (item.FileNo && item.FileNo.toLowerCase().includes(query)) ||
        (item.BillOfLading && item.BillOfLading.toLowerCase().includes(query)) ||
        (item.ContainerNo && item.ContainerNo.toLowerCase().includes(query))
    );
    setFilteredData(filtered);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold text-teal-400 mb-6">Logistics Report</h1>

        {/* Search Input */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search by BL No., Container No., or File No."
              className="w-full p-3 bg-zinc-800/80 text-white rounded-lg border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
            />
            <i className="ri-search-line absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400"></i>
          </div>
        </div>

        {/* Report Table */}
        <div className="bg-zinc-800/80 rounded-lg shadow-xl overflow-x-auto">
          {filteredData.length === 0 ? (
            <div className="p-6 text-center text-zinc-400">
              No results found for "{searchQuery}"
            </div>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="bg-zinc-700/50">
                  <th className="p-4 text-teal-400">File No.</th>
                  <th className="p-4 text-teal-400">BL No.</th>
                  <th className="p-4 text-teal-400">Container No.</th>
                  <th className="p-4 text-teal-400">Vessel Name</th>
                  <th className="p-4 text-teal-400">Container Type</th>
                  <th className="p-4 text-teal-400">Consignee</th>
                  <th className="p-4 text-teal-400">Cargo Status</th>
                  <th className="p-4 text-teal-400">Cargo Description</th>
                  <th className="p-4 text-teal-400">Delivery Date</th>
                  <th className="p-4 text-teal-400">Truck/Trailer</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-zinc-700 hover:bg-zinc-700/30 transition-all"
                  >
                    <td className="p-4">{item.FileNo || '-'}</td>
                    <td className="p-4">{item.BillOfLading || '-'}</td>
                    <td className="p-4">{item.ContainerNo || '-'}</td>
                    <td className="p-4">{item.VesselName || '-'}</td>
                    <td className="p-4">{item.ContainerType || '-'}</td>
                    <td className="p-4">{item.Consignee || '-'}</td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          item.CargoStatus === 'Delivered'
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
                    <td className="p-4">{item.CargoTrucksDeliveryDate || '-'}</td>
                    <td className="p-4">{item.TruckTrailerDetails || '-'}</td>
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

export default LogisticsReport;