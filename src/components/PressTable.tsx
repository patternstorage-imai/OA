import React, { useState } from 'react';

export default function PressTable() {
  const [rows, setRows] = useState([{ id: 1 }]);

  const addRow = () => {
    const newRow = { id: rows.length + 1 };
    setRows([...rows, newRow]);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left text-sm text-gray-900 pb-3">風合い</th>
            <th className="text-left text-sm text-gray-900 pb-3">依頼先</th>
            <th className="text-left text-sm text-gray-900 pb-3">投入予定日</th>
            <th className="text-left text-sm text-gray-900 pb-3">完了予定日</th>
            <th className="text-left text-sm text-gray-900 pb-3">出荷先</th>
            <th className="text-left text-sm text-gray-900 pb-3">本数</th>
            <th className="text-left text-sm text-gray-900 pb-3">操作</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b border-gray-100">
              <td className="py-2">
                <input type="text" placeholder="自由記述" className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
              </td>
              <td className="py-2">
                <select className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>選択</option>
                </select>
              </td>
              <td className="py-2">
                <div className="relative">
                  <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </td>
              <td className="py-2">
                <div className="relative">
                  <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </td>
              <td className="py-2">
                <select className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option>選択</option>
                </select>
              </td>
              <td className="py-2">
                <input type="number" defaultValue="24" className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
              </td>
              {row.id === rows.length && (
                <td className="py-2">
                  <button
                    onClick={addRow}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 