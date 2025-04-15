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
  const [groupQuantity, setGroupQuantity] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState({
    groupNumber: '',
    groupName: '',
    quantity: ''
  });

  const handleEditClick = () => {
    setEditData({
      groupNumber: number.toString(),
      groupName: `加工グループ ${number}`,
      quantity: groupQuantity
    });
    setIsEditModalOpen(true);
  };

  const handleEditSave = () => {
    setGroupQuantity(editData.quantity);
    setIsEditModalOpen(false);
  };

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
        <div className="flex items-center space-x-4">
          <h4 className="text-base font-medium text-gray-900">加工グループ {number}</h4>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">本数：</span>
            <input
              type="number"
              value={groupQuantity}
              onChange={(e) => setGroupQuantity(e.target.value)}
              className="w-20 border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>
        <button 
          onClick={handleEditClick}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </button>
      </div>

      {/* 編集モーダル */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 pt-20">
          <div className="bg-white rounded-lg p-6 w-[500px]">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-[#333333]">グループ編集</h3>
              <button 
                onClick={() => setIsEditModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">グループNo</label>
                <input
                  type="text"
                  value={editData.groupNumber}
                  onChange={(e) => setEditData({ ...editData, groupNumber: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">グループ名</label>
                <input
                  type="text"
                  value={editData.groupName}
                  onChange={(e) => setEditData({ ...editData, groupName: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">本数</label>
                <input
                  type="number"
                  value={editData.quantity}
                  onChange={(e) => setEditData({ ...editData, quantity: e.target.value })}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={handleEditSave}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}

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