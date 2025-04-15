'use client';

import React, { useState } from 'react';

interface FabricOption {
  name: string;
  process: string;
  color: string;
  selected: boolean;
}

export default function SewingTable() {
  const [rows, setRows] = useState([{ id: 1, group: 1 }]);
  const [currentGroup, setCurrentGroup] = useState(1);
  const [groupNames, setGroupNames] = useState<{ [key: number]: string }>({
    1: 'グループ1'
  });
  const [groupQuantities, setGroupQuantities] = useState<{ [key: number]: number }>({
    1: 24
  });
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingGroup, setEditingGroup] = useState<number | null>(null);
  const [fabricOptions, setFabricOptions] = useState<FabricOption[]>([
    { name: 'O!2168', process: 'CW', color: '1', selected: true },
    { name: 'DA007', process: 'AA', color: 'IND', selected: true },
    { name: 'OA2234', process: 'なし', color: 'BKBK', selected: true },
  ]);

  const addRow = (group: number) => {
    const newRow = { id: Math.max(...rows.map(r => r.id)) + 1, group };
    setRows([...rows, newRow]);
  };

  const openEditModal = (group: number) => {
    setEditingGroup(group);
    setIsEditModalOpen(true);
  };

  const deleteRow = (id: number) => {
    setRows(rows.filter(row => row.id !== id));
  };

  const deleteGroup = (group: number) => {
    const newGroupNames = { ...groupNames };
    const newGroupQuantities = { ...groupQuantities };
    delete newGroupNames[group];
    delete newGroupQuantities[group];
    setGroupNames(newGroupNames);
    setGroupQuantities(newGroupQuantities);
    setRows(rows.filter(row => row.group !== group));
  };

  const updateGroupName = (group: number, name: string) => {
    setGroupNames({ ...groupNames, [group]: name });
  };

  const updateGroupQuantity = (group: number, quantity: number) => {
    setGroupQuantities({ ...groupQuantities, [group]: quantity });
  };

  const toggleFabricSelection = (index: number) => {
    const newOptions = [...fabricOptions];
    newOptions[index].selected = !newOptions[index].selected;
    setFabricOptions(newOptions);
  };

  return (
    <div className="space-y-4">
      {[...new Set(rows.map(row => row.group))].map(group => (
        <div key={group} className="bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center p-3 bg-gray-100 rounded-t-lg">
            <div className="flex items-center space-x-2">
              <span className="text-base font-medium text-[#333333]">{group}.</span>
              <span className="text-base font-medium text-[#333333]">{groupNames[group]}</span>
              <span className="text-sm text-gray-500">({groupQuantities[group]}本)</span>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => openEditModal(group)} className="p-1 hover:bg-gray-200 rounded">
                <span className="sr-only">編集</span>
                <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="p-3">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left text-sm text-gray-900 pb-3">種別</th>
                  <th className="text-left text-sm text-gray-900 pb-3">上下使用</th>
                  <th className="text-left text-sm text-gray-900 pb-3">糸使い・番手・色</th>
                  <th className="text-left text-sm text-gray-900 pb-3">依頼先</th>
                  <th className="text-left text-sm text-gray-900 pb-3">投入予定日</th>
                  <th className="text-left text-sm text-gray-900 pb-3">完了予定日</th>
                  <th className="text-left text-sm text-gray-900 pb-3">出荷先</th>
                  <th className="text-left text-sm text-gray-900 pb-3">本数</th>
                  <th className="text-left text-sm text-gray-900 pb-3">操作</th>
                </tr>
              </thead>
              <tbody>
                {rows.filter(row => row.group === group).map((row) => (
                  <tr key={row.id} className="border-b border-gray-100">
                    <td className="py-2 pr-4">
                      <select className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option>選択してください</option>
                        <option>筒縫い</option>
                      </select>
                    </td>
                    <td className="py-2 pr-4">
                      <select className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option>選択</option>
                      </select>
                    </td>
                    <td className="py-2 pr-4">
                      <select className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                        <option>選択</option>
                      </select>
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
                      <input type="number" className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" defaultValue="24" />
                    </td>
                    <td className="py-2 flex items-center space-x-2">
                      {row.id === Math.max(...rows.filter(r => r.group === group).map(r => r.id)) && (
                        <button
                          onClick={() => addRow(group)}
                          className="p-2 hover:bg-gray-100 rounded-full"
                        >
                          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                      )}
                      {rows.filter(r => r.group === group).length > 1 && (
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
      ))}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => {
            const newGroup = Math.max(...rows.map(r => r.group)) + 1;
            setRows([...rows, { id: Math.max(...rows.map(r => r.id)) + 1, group: newGroup }]);
            setGroupNames(prev => ({ ...prev, [newGroup]: `グループ${newGroup}` }));
            setGroupQuantities(prev => ({ ...prev, [newGroup]: 24 }));
          }}
          className="flex items-center px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          縫製グループを追加
        </button>
      </div>

      {/* 編集モーダル */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 pt-20 overflow-auto">
          <div className="bg-white rounded-lg p-6 w-[500px] mb-20">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-[#333333]">縫製グループ設定</h3>
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
                <label className="block text-sm text-[#333333] mb-1">グループ名</label>
                <input
                  type="text"
                  value={editingGroup ? groupNames[editingGroup] : ''}
                  onChange={(e) => editingGroup && updateGroupName(editingGroup, e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-[#333333]"
                />
              </div>
              <div>
                <label className="block text-sm text-[#333333] mb-1">本数</label>
                <input
                  type="number"
                  value={editingGroup ? groupQuantities[editingGroup] : 0}
                  onChange={(e) => editingGroup && updateGroupQuantity(editingGroup, Number(e.target.value))}
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
                  onClick={() => editingGroup && deleteGroup(editingGroup)}
                  className="text-red-600 hover:text-red-800 font-medium flex items-center"
                >
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  縫製グループを削除
                </button>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
              >
                次へ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 