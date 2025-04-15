import React, { useState } from 'react';

interface CuttingGroup {
  id: number;
  selectedItems: string[];
  client: string;
  quantity: string;
  pieces: string;
}

interface CuttingRow {
  id: number;
  process: string;
  quantity: number;
}

interface Props {
  groupNumber: number;
}

export default function CuttingTable({ groupNumber }: Props) {
  const [groups, setGroups] = useState<CuttingGroup[]>([
    {
      id: 1,
      selectedItems: [],
      client: '',
      quantity: '',
      pieces: ''
    }
  ]);

  const [rows, setRows] = useState<CuttingRow[]>([{
    id: 1,
    process: '',
    quantity: 0
  }]);

  const addGroup = () => {
    const newId = Math.max(...groups.map(g => g.id)) + 1;
    setGroups([...groups, {
      id: newId,
      selectedItems: [],
      client: '',
      quantity: '',
      pieces: ''
    }]);
  };

  const deleteGroup = (id: number) => {
    if (groups.length > 1) {
      setGroups(groups.filter(group => group.id !== id));
    }
  };

  const updateGroup = (id: number, field: keyof CuttingGroup, value: any) => {
    setGroups(groups.map(group =>
      group.id === id ? { ...group, [field]: value } : group
    ));
  };

  const updateRow = (index: number, field: keyof CuttingRow, value: string | number) => {
    const updatedRows = [...rows];
    updatedRows[index] = { ...updatedRows[index], [field]: value };
    setRows(updatedRows);
  };

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-[#333333]">裁断 {groupNumber}</h2>
        <button
          onClick={addGroup}
          className="text-purple-600 hover:text-purple-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>

      {groups.map((group) => (
        <div key={group.id} className="mb-4 last:mb-0">
          <div className="flex items-start space-x-4">
            <div className="flex-1 grid grid-cols-4 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">リストから選択</label>
                <select
                  value={group.selectedItems[0] || ''}
                  onChange={(e) => updateGroup(group.id, 'selectedItems', [e.target.value])}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">選択してください</option>
                  <option value="item1">アイテム1</option>
                  <option value="item2">アイテム2</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">依頼先</label>
                <select
                  value={group.client}
                  onChange={(e) => updateGroup(group.id, 'client', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">選択してください</option>
                  <option value="client1">依頼先1</option>
                  <option value="client2">依頼先2</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">部数</label>
                <input
                  type="number"
                  value={group.quantity}
                  onChange={(e) => updateGroup(group.id, 'quantity', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="部数を入力"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">本数</label>
                <input
                  type="number"
                  value={group.pieces}
                  onChange={(e) => updateGroup(group.id, 'pieces', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="本数を入力"
                />
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => deleteGroup(group.id)}
                className="text-red-600 hover:text-red-700"
                disabled={groups.length === 1}
              >
                <svg className={`w-6 h-6 ${groups.length === 1 ? 'text-gray-300' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 