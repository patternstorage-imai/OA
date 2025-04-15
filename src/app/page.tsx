'use client';

import React, { useState } from 'react';
import SewingTable from '@/components/SewingTable';
import ProcessingGroup from '@/components/ProcessingGroup';
import PressTable from '@/components/PressTable';
import CuttingGroup from '@/components/CuttingGroup';
import FabricTable from '@/components/FabricTable';

interface PurposeGroup {
  id: number;
  purpose: string;
  brandCode: string;
  billingCode: string;
  quantity: string;
}

interface FabricDetail {
  id: string;
  oaNumber: string;
  processing: string;
  oaColorCode: string;
  supplierCode: string;
  supplierNumber: string;
  supplierColorCode: string;
  productName: string;
}

export default function Home() {
  const [processingGroups, setProcessingGroups] = useState<number[]>([1]);
  const [cuttingGroups, setCuttingGroups] = useState<number[]>([1]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isFabricModalOpen, setIsFabricModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    requester: '大西',
    creator: '猶原',
    dueDate: '2024-01-01',
    type: '簡',
    note: ''
  });
  const [purposeGroups, setPurposeGroups] = useState<PurposeGroup[]>([
    {
      id: 1,
      purpose: 'OAO',
      brandCode: 'OAO',
      billingCode: 'OAO',
      quantity: '1'
    }
  ]);
  
  // サンプルデータ
  const [selectedFabrics, setSelectedFabrics] = useState<FabricDetail[]>([
    {
      id: '1520',
      oaNumber: '',
      processing: '',
      oaColorCode: '213',
      supplierCode: 'YK',
      supplierNumber: '7070',
      supplierColorCode: '213',
      productName: '7×7 DENIM'
    },
    {
      id: '7822932',
      oaNumber: '',
      processing: '',
      oaColorCode: '213',
      supplierCode: 'YK',
      supplierNumber: '7070',
      supplierColorCode: '213',
      productName: '7×7 DENIM'
    }
  ]);

  const addProcessingGroup = () => {
    setProcessingGroups([...processingGroups, Math.max(...processingGroups) + 1]);
  };

  const deleteProcessingGroup = (number: number) => {
    setProcessingGroups(processingGroups.filter(n => n !== number));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePurposeGroupChange = (id: number, field: string, value: string) => {
    setPurposeGroups(prev => 
      prev.map(group => 
        group.id === id ? { ...group, [field]: value } : group
      )
    );
  };

  const addPurposeGroup = () => {
    const newId = Math.max(...purposeGroups.map(g => g.id)) + 1;
    setPurposeGroups([...purposeGroups, {
      id: newId,
      purpose: '',
      brandCode: '',
      billingCode: '',
      quantity: ''
    }]);
  };

  const deletePurposeGroup = (id: number) => {
    if (purposeGroups.length > 1) {
      setPurposeGroups(prev => prev.filter(group => group.id !== id));
    }
  };

  const addCuttingGroup = () => {
    setCuttingGroups([...cuttingGroups, Math.max(...cuttingGroups) + 1]);
  };

  const deleteCuttingGroup = (number: number) => {
    setCuttingGroups(cuttingGroups.filter(n => n !== number));
  };

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 px-4">
        {/* ヘッダー情報 */}
        <div className="bg-white rounded-lg shadow-lg mb-6">
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-4 gap-8 items-center">
              <div>
                <label className="block text-sm text-gray-600">生地数</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">{selectedFabrics.length}種</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600">依頼者</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">{formData.requester}</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600">作成者</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">{formData.creator}</div>
              </div>
              <div className="flex justify-end space-x-2">
                <button 
                  onClick={() => setIsEditModalOpen(true)}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
                >
                  編集
                </button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-8">
              <div>
                <label className="block text-sm text-gray-600">納期</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">{formData.dueDate}</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600">目的</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">{purposeGroups[0]?.purpose || '未設定'}</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600">部数</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">{purposeGroups[0]?.quantity || '0'}</div>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600">備考</label>
              <div className="mt-1 text-lg text-[#333333]">{formData.note || '特になし'}</div>
            </div>
          </div>
        </div>

        {/* メインコンテンツ */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">工程指図</h2>
            <button className="bg-white border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50">
              ハンガー履歴参照
            </button>
          </div>

          <div className="space-y-6">
            {/* ①生地 */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-medium text-gray-900 mb-4">①生地内容</h3>
                <button
                  onClick={() => setIsFabricModalOpen(true)}
                  className="bg-white border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50"
                >
                  生地詳細
                </button>
              </div>
              <FabricTable />
            </div>

            {/* ②裁断 */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-base font-medium text-gray-900 mb-4">②裁断グループ</h3>
              {cuttingGroups.map(number => (
                <CuttingGroup
                  key={number}
                  number={number}
                />
              ))}
            </div>

            {/* ③縫製 */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-base font-medium text-gray-900 mb-4">③縫製グループ</h3>
              <SewingTable />
            </div>

            {/* ④加工 */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-base font-medium text-gray-900 mb-4">④加工グループ</h3>
              <div className="space-y-4">
                {processingGroups.map((number) => (
                  <ProcessingGroup 
                    key={number} 
                    number={number}
                  />
                ))}
                <div className="flex justify-center">
                  <button
                    onClick={addProcessingGroup}
                    className="bg-white border border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 flex items-center space-x-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>加工グループの追加</span>
                  </button>
                </div>
              </div>
            </div>

            {/* ⑤プレス */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="text-base font-medium text-gray-900 mb-4">⑤プレスグループ</h3>
              <PressTable />
            </div>
          </div>
        </div>

        {/* 登録ボタン */}
        <div className="sticky bottom-0 bg-gray-100 py-4">
          <div className="flex justify-end">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 text-lg font-medium shadow-lg">
              登録
            </button>
          </div>
        </div>
      </div>

      {/* 編集モーダル */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 pt-20 overflow-auto">
          <div className="bg-white rounded-lg p-6 w-[500px] mb-20">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-[#333333]">概要編集</h3>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">依頼者</label>
                <select
                  value={formData.requester}
                  onChange={(e) => handleInputChange('requester', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">依頼者を選択</option>
                  <option value="大西">大西</option>
                  <option value="田中">田中</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">作成者</label>
                <select
                  value={formData.creator}
                  onChange={(e) => handleInputChange('creator', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="">作成者を選択</option>
                  <option value="猶原">猶原</option>
                  <option value="山田">山田</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">納期</label>
                <input
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) => handleInputChange('dueDate', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">種別</label>
                <select
                  value={formData.type}
                  onChange={(e) => handleInputChange('type', e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="簡">簡</option>
                  <option value="詳">詳</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">目的</label>
                <div className="space-y-2">
                  {purposeGroups.map((group) => (
                    <div key={group.id} className="flex items-center space-x-2">
                      <div className="grid grid-cols-4 gap-4 flex-1">
                        <select
                          value={group.purpose}
                          onChange={(e) => handlePurposeGroupChange(group.id, 'purpose', e.target.value)}
                          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="">目的</option>
                          <option value="OAO">OAO</option>
                          <option value="OAT">OAT</option>
                        </select>
                        <select
                          value={group.brandCode}
                          onChange={(e) => handlePurposeGroupChange(group.id, 'brandCode', e.target.value)}
                          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="">ブランドコード</option>
                          <option value="OAO">OAO</option>
                          <option value="OAT">OAT</option>
                        </select>
                        <select
                          value={group.billingCode}
                          onChange={(e) => handlePurposeGroupChange(group.id, 'billingCode', e.target.value)}
                          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                          <option value="">エージェント</option>
                          <option value="OAO">OAO</option>
                          <option value="OAT">OAT</option>
                        </select>
                        <input
                          type="number"
                          placeholder="部数"
                          value={group.quantity}
                          onChange={(e) => handlePurposeGroupChange(group.id, 'quantity', e.target.value)}
                          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                      </div>
                      <div className="flex items-center space-x-1">
                        <button 
                          onClick={() => addPurposeGroup()} 
                          className="p-2 hover:bg-gray-100 rounded-full"
                        >
                          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </button>
                        <button 
                          onClick={() => deletePurposeGroup(group.id)}
                          className="p-2 hover:bg-gray-100 rounded-full"
                          disabled={purposeGroups.length === 1}
                        >
                          <svg className={`w-5 h-5 ${purposeGroups.length === 1 ? 'text-gray-300' : 'text-red-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">備考</label>
                <textarea
                  value={formData.note}
                  onChange={(e) => handleInputChange('note', e.target.value)}
                  rows={4}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
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

      {/* 生地詳細モーダル */}
      {isFabricModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 pt-20 overflow-auto">
          <div className="bg-white rounded-lg p-6 w-[90vw] mb-20">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-[#333333]">生地詳細</h3>
              <button 
                onClick={() => setIsFabricModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">OA品番</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">加工</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">OA色番</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">仕入先コード</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">仕入先品番</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">仕入先色番</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">品名</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {selectedFabrics.map((fabric) => (
                    <tr key={fabric.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fabric.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fabric.oaNumber}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fabric.processing}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fabric.oaColorCode}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fabric.supplierCode}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fabric.supplierNumber}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fabric.supplierColorCode}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{fabric.productName}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex justify-end space-x-2">
              <button
                onClick={() => setIsFabricModalOpen(false)}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300"
              >
                閉じる
              </button>
              <button
                onClick={() => {
                  setIsFabricModalOpen(false);
                  // TODO: 生地選択画面への遷移処理
                }}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
              >
                生地を再選択
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
