'use client';

import React, { useState, useEffect } from 'react';

interface ProcessingGroupProps {
  number: number;
  onDelete: (number: number) => void;
}

interface FabricOption {
  name: string;
  process: string;
  color: string;
  selected: boolean;
}

export default function ProcessingGroup({ number, onDelete }: ProcessingGroupProps) {
  const [processes, setProcesses] = useState([{ id: 1 }]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [groupName, setGroupName] = useState(`${number}.`);
  const [quantity, setQuantity] = useState(3);
  const [fabricOptions, setFabricOptions] = useState<FabricOption[]>([
    { name: 'O!2168', process: 'CW', color: '1', selected: true },
    { name: 'DA007', process: 'AA', color: 'IND', selected: true },
    { name: 'OA2234', process: 'なし', color: 'BKBK', selected: true },
  ]);

  useEffect(() => {
    if (isEditModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isEditModalOpen]);

  const addProcess = () => {
    const newProcess = { id: processes.length + 1 };
    setProcesses([...processes, newProcess]);
  };

  const deleteProcess = (id: number) => {
    setProcesses(processes.filter(process => process.id !== id));
  };

  const toggleFabricSelection = (index: number) => {
    const newOptions = [...fabricOptions];
    newOptions[index].selected = !newOptions[index].selected;
    setFabricOptions(newOptions);
  };

  return (
    <>
      <div className="bg-gray-50 rounded-lg">
        <div className="flex justify-between items-center p-3 bg-gray-100 rounded-t-lg">
          <div className="flex items-center space-x-4">
            <h3 className="text-base font-medium text-[#333333]">{groupName}</h3>
            <div className="flex items-center">
              <label className="text-sm text-[#333333] mr-2">本数：</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-20 border border-gray-300 rounded-md px-2 py-1 text-[#333333] focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <button onClick={() => setIsEditModalOpen(true)} className="p-1 hover:bg-gray-200 rounded">
            <span className="sr-only">編集</span>
            <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left text-sm text-[#333333] pb-3">加工内容</th>
                <th className="text-left text-sm text-[#333333] pb-3">記号</th>
                <th className="text-left text-sm text-[#333333] pb-3">依頼先</th>
                <th className="text-left text-sm text-[#333333] pb-3">投入予定日</th>
                <th className="text-left text-sm text-[#333333] pb-3">完了予定日</th>
                <th className="text-left text-sm text-[#333333] pb-3">出荷先</th>
                <th className="text-left text-sm text-[#333333] pb-3 w-24">操作</th>
              </tr>
            </thead>
            <tbody>
              {processes.map((process) => (
                <tr key={process.id} className="border-b border-gray-100">
                  <td className="py-2">
                    <select className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-[#333333]">
                      <option>ワンウォッシュ</option>
                    </select>
                  </td>
                  <td className="py-2">
                    <input type="text" defaultValue="OW" className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent bg-gray-50 text-[#333333]" readOnly />
                  </td>
                  <td className="py-2">
                    <select className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-[#333333]">
                      <option>BNS</option>
                    </select>
                  </td>
                  <td className="py-2">
                    <div className="relative">
                      <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-[#333333]" />
                    </div>
                  </td>
                  <td className="py-2">
                    <div className="relative">
                      <input type="date" className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-[#333333]" />
                    </div>
                  </td>
                  <td className="py-2">
                    <select className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-[#333333]">
                      <option>MRQ</option>
                    </select>
                  </td>
                  <td className="py-2">
                    <div className="flex space-x-1">
                      <button onClick={addProcess} className="p-1 hover:bg-gray-100 rounded">
                        <span className="sr-only">追加</span>
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                      <button onClick={() => deleteProcess(process.id)} className="p-1 hover:bg-gray-100 rounded">
                        <span className="sr-only">削除</span>
                        <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 編集モーダル */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[600px] max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold text-[#333333] mb-4">加工グループ設定</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-[#333333] mb-1">グループ名</label>
                <input
                  type="text"
                  value={groupName}
                  onChange={(e) => setGroupName(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-[#333333]"
                />
              </div>
              <div>
                <label className="block text-sm text-[#333333] mb-1">本数</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-[#333333]"
                />
              </div>
              <div>
                <label className="block text-sm text-[#333333] mb-2">生地選択</label>
                <div className="space-y-3">
                  {fabricOptions.map((fabric, index) => (
                    <div key={fabric.name} className="space-y-1">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={fabric.selected}
                          onChange={() => toggleFabricSelection(index)}
                          className="w-4 h-4 text-purple-600 rounded border-gray-300 focus:ring-purple-500"
                        />
                        <span className="ml-2 font-medium text-[#333333]">{fabric.name}</span>
                      </div>
                      <div className="ml-6 text-sm text-[#333333]">
                        <div>・生地加工　{fabric.process}</div>
                        <div>・生地色番　{fabric.color}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => onDelete(number)}
                  className="text-red-600 hover:text-red-800 font-medium flex items-center"
                >
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  加工グループを削除
                </button>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-[#333333] hover:bg-gray-50"
              >
                キャンセル
              </button>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                保存
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 