'use client';

import React, { useState } from 'react';

export default function PressTable() {
  const [rows, setRows] = useState([{ id: 1 }]);

  const addRow = () => {
    const newRow = { id: Math.max(...rows.map(r => r.id)) + 1 };
    setRows([...rows, newRow]);
  };

  const deleteRow = (id: number) => {
    setRows(rows.filter(row => row.id !== id));
  };

  return (
    <div className="bg-gray-50 rounded-lg">
      <div className="flex justify-between items-center p-3 bg-gray-100 rounded-t-lg">
        <div className="flex items-center space-x-2">
          <span className="text-lg font-medium text-[#333333]">3. プレス内容</span>
        </div>
      </div>
      <div className="p-3">
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
                <td className="py-2 pr-4">
                  <input type="text" placeholder="自由記述" className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                </td>
                <td className="py-2 pr-4">
                  <select className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>選択</option>
                  </select>
                </td>
                <td className="py-2 pr-4">
                  <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="年/月/日" />
                </td>
                <td className="py-2 pr-4">
                  <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="年/月/日" />
                </td>
                <td className="py-2 pr-4">
                  <select className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>選択</option>
                  </select>
                </td>
                <td className="py-2 pr-4">
                  <input type="number" defaultValue="24" className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                </td>
                <td className="py-2 flex items-center space-x-2">
                  {row.id === Math.max(...rows.map(r => r.id)) && (
                    <button
                      onClick={addRow}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  )}
                  {rows.length > 1 && (
                    <button
                      onClick={() => deleteRow(row.id)}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 