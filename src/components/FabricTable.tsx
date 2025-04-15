'use client';

import React, { useState } from 'react';

interface FabricRow {
  id: number;
  oaNumber: string;
  processing: string;
  oaColorCode: string;
  supplierCode: string;
  supplierColorCode: string;
  vendor: string;
  type: string;
  hasOrder: boolean;
  orderMeters: number;
}

export default function FabricTable() {
  // 実際の実装ではAPIからデータを取得します
  const [rows, setRows] = useState<FabricRow[]>([{
    id: 1,
    oaNumber: '',
    processing: '',
    oaColorCode: '',
    supplierCode: '',
    supplierColorCode: '',
    vendor: '',
    type: '',
    hasOrder: false,
    orderMeters: 0
  }]);

  const updateRow = (index: number, field: keyof FabricRow, value: string | boolean | number) => {
    const updatedRows = [...rows];
    updatedRows[index] = { ...updatedRows[index], [field]: value };
    setRows(updatedRows);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">OA品番</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">加工</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">OA色番</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">仕入れ先品番</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">仕入れ先色番</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">依頼先</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">定番/別注</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">発注有無</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">発注M数</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.map((row, index) => (
            <tr key={index}>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{row.oaNumber}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{row.processing}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{row.oaColorCode}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{row.supplierCode}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{row.supplierColorCode}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{row.vendor}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{row.type}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm">
                <input
                  type="checkbox"
                  checked={row.hasOrder}
                  onChange={(e) => updateRow(index, 'hasOrder', e.target.checked)}
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
              </td>
              <td className="px-4 py-3 whitespace-nowrap text-sm">
                <input
                  type="number"
                  value={row.orderMeters}
                  onChange={(e) => updateRow(index, 'orderMeters', parseInt(e.target.value) || 0)}
                  className="w-24 border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  min="0"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 