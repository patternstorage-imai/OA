'use client';

import React, { useState } from 'react';

interface Process {
  id: number;
  process: string;
  symbol: string;
  vendor: string;
  startDate: string;
  endDate: string;
  shipTo: string;
  quantity: string;
}

interface ProcessingGroupProps {
  number: number;
}

export default function ProcessingGroup({ number }: ProcessingGroupProps) {
  const [processes, setProcesses] = useState<Process[]>([{
    id: 1,
    process: '',
    symbol: '',
    vendor: '',
    startDate: '',
    endDate: '',
    shipTo: '',
    quantity: ''
  }]);

  const addProcess = () => {
    setProcesses([...processes, {
      id: processes.length + 1,
      process: '',
      symbol: '',
      vendor: '',
      startDate: '',
      endDate: '',
      shipTo: '',
      quantity: ''
    }]);
  };

  const deleteProcess = (id: number) => {
    if (processes.length > 1) {
      setProcesses(processes.filter(p => p.id !== id));
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 mb-4 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-base font-medium text-gray-900">加工グループ {number}</h4>
      </div>
      <div className="p-3">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left text-sm text-gray-900 pb-3">加工内容</th>
              <th className="text-left text-sm text-gray-900 pb-3">記号</th>
              <th className="text-left text-sm text-gray-900 pb-3">依頼先</th>
              <th className="text-left text-sm text-gray-900 pb-3">投入予定日</th>
              <th className="text-left text-sm text-gray-900 pb-3">完了予定日</th>
              <th className="text-left text-sm text-gray-900 pb-3">出荷先</th>
              <th className="text-left text-sm text-gray-900 pb-3">本数</th>
              <th className="text-left text-sm text-gray-900 pb-3">操作</th>
            </tr>
          </thead>
          <tbody>
            {processes.map((process) => (
              <tr key={process.id} className="border-b border-gray-100">
                <td className="py-2 pr-4">
                  <select 
                    value={process.process}
                    onChange={(e) => {
                      const updatedProcesses = [...processes];
                      const index = processes.findIndex(p => p.id === process.id);
                      updatedProcesses[index] = { ...process, process: e.target.value };
                      setProcesses(updatedProcesses);
                    }}
                    className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="ワンウォッシュ">ワンウォッシュ</option>
                    <option value="すり">すり</option>
                    <option value="ストーンバイオブ">ストーンバイオブ</option>
                  </select>
                </td>
                <td className="py-2 pr-4">
                  <input 
                    type="text"
                    value={process.symbol}
                    onChange={(e) => {
                      const updatedProcesses = [...processes];
                      const index = processes.findIndex(p => p.id === process.id);
                      updatedProcesses[index] = { ...process, symbol: e.target.value };
                      setProcesses(updatedProcesses);
                    }}
                    className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </td>
                <td className="py-2 pr-4">
                  <select
                    value={process.vendor}
                    onChange={(e) => {
                      const updatedProcesses = [...processes];
                      const index = processes.findIndex(p => p.id === process.id);
                      updatedProcesses[index] = { ...process, vendor: e.target.value };
                      setProcesses(updatedProcesses);
                    }}
                    className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="BNS">BNS</option>
                    <option value="SKS">SKS</option>
                    <option value="NB">NB</option>
                  </select>
                </td>
                <td className="py-2 pr-4">
                  <input 
                    type="date"
                    value={process.startDate}
                    onChange={(e) => {
                      const updatedProcesses = [...processes];
                      const index = processes.findIndex(p => p.id === process.id);
                      updatedProcesses[index] = { ...process, startDate: e.target.value };
                      setProcesses(updatedProcesses);
                    }}
                    className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </td>
                <td className="py-2 pr-4">
                  <input 
                    type="date"
                    value={process.endDate}
                    onChange={(e) => {
                      const updatedProcesses = [...processes];
                      const index = processes.findIndex(p => p.id === process.id);
                      updatedProcesses[index] = { ...process, endDate: e.target.value };
                      setProcesses(updatedProcesses);
                    }}
                    className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </td>
                <td className="py-2 pr-4">
                  <select
                    value={process.shipTo}
                    onChange={(e) => {
                      const updatedProcesses = [...processes];
                      const index = processes.findIndex(p => p.id === process.id);
                      updatedProcesses[index] = { ...process, shipTo: e.target.value };
                      setProcesses(updatedProcesses);
                    }}
                    className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">選択してください</option>
                    <option value="MRQ">MRQ</option>
                    <option value="NB">NB</option>
                  </select>
                </td>
                <td className="py-2 pr-4">
                  <input 
                    type="number"
                    value={process.quantity}
                    onChange={(e) => {
                      const updatedProcesses = [...processes];
                      const index = processes.findIndex(p => p.id === process.id);
                      updatedProcesses[index] = { ...process, quantity: e.target.value };
                      setProcesses(updatedProcesses);
                    }}
                    className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </td>
                <td className="py-2 flex items-center space-x-1">
                  {process.id === processes.length && (
                    <button
                      onClick={addProcess}
                      className="p-2 hover:bg-gray-100 rounded-full"
                    >
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  )}
                  {processes.length > 1 && (
                    <button
                      onClick={() => deleteProcess(process.id)}
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