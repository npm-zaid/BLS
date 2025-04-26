// components/ReportLayout.jsx
import React, { useState, useEffect } from 'react';

const ReportLayout = ({ data, headers, title, theme }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
    setSearchQuery('');
  }, [data]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.trim() === '') {
      setFilteredData(data);
      return;
    }

    const filtered = data.filter((item) =>
      ['FileNo', 'BillOfLading', 'ContainerNo'].some(
        (key) =>
          item[key] &&
          item[key].toString().toLowerCase().includes(query)
      )
    );

    setFilteredData(filtered);
  };

  return (
    <div className="sm:p-6">
      <div className={`w-[75vw] sm:w-[84vw] ${theme ? 'bg-zinc-800/80' : 'bg-gray-100'} p-6 rounded-lg`}>
        <div className=" flex justify-between items-center mb-6 bg-gradient-to-r from-teal-700 to-teal-600 text-white py-3 px-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <i className="ri-align-item-bottom-fill"></i>
            {title}
          </h2>
          <span className="font-bold hidden md:block">DATE - {new Date().toLocaleDateString()}</span>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mb-5">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="File No. / Bill of Lading / Container No."
            className={`report w-full p-3 ${theme ? 'bg-zinc-700/80 text-white' : 'bg-gray-300 text-gray-900'} rounded-lg focus:outline-none focus:ring-2  focus:ring-teal-400 transition-all`}
          />
          <i className="ri-search-line absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400"></i>
        </div>
       

        {/* Table */}
        <div className="rounded-lg shadow-xl overflow-x-auto scroller2">
          {filteredData.length === 0 ? (
            <div className="p-6 text-center text-zinc-400">No results found for "{searchQuery}"</div>
          ) : (
            <table className="w-full text-left">
              <thead >
                <tr className={`${theme ? 'bg-teal-400/20 text-white' : 'bg-teal-400/50 text-gray-900'}`}>
                  {headers.map((h, i) => (
                    <th key={i} className='p-4'>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, i) => (
                  <tr key={i} className={`border-t border-zinc-700 hover:bg-zinc-700/30 transition-all ${theme ? 'bg-zinc-500/30 text-white' : 'bg-gray-200 text-gray-900'}`}>
                    {Object.values(item).map((val, j) => (
                      <td key={j} className="p-4">{val || '-'}</td>
                    ))}
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

export default ReportLayout;
