import React from 'react';
import data from './data';

const Subcription = () => {
  return (
    <div className="overflow-x-auto sm:overflow-visible m-4">
      <div className="min-w-full bg-white shadow-md rounded-lg">
        {/* Table for larger screens */}
        <table className="hidden sm:table min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
           <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                
            </th>
            {data.map((item)=>(
            <th key={data.id}
            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
                {item.package}
            </th>
            ))}
           </tr>
        </thead>

          <tbody className="bg-white divide-y divide-gray-200">
           <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">users</td>
            {data.map((item)=>(
            <td key={data.id}
            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
            >
                {item.userNo}
            </td>
            ))}
           </tr>
           
          </tbody>
        </table>

        {/* Card view for smaller screens */}
        <div className="block sm:hidden">
          {data.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg mb-4 p-4">
              <div className="flex flex-col">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">{item.package}</h2>
                <p className="text-gray-700"><span className="font-medium">ID:</span> {item.id}</p>
                <p className="text-gray-700"><span className="font-medium">Users:</span> {item.userNo}</p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Subcription