'use client';

import React, { useState } from 'react';
import SewingTable from '@/components/SewingTable';
import ProcessingGroup from '@/components/ProcessingGroup';
import PressTable from '@/components/PressTable';

export default function Home() {
  const [processingGroups, setProcessingGroups] = useState([1]);

  const addProcessingGroup = () => {
    setProcessingGroups([...processingGroups, processingGroups.length + 1]);
  };

  const deleteProcessingGroup = (number: number) => {
    setProcessingGroups(processingGroups.filter(group => group !== number));
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 px-4">
        {/* ヘッダー情報 */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-6 space-y-4">
            {/* 1行目 */}
            <div className="grid grid-cols-4 gap-8 items-center">
              <div>
                <label className="block text-sm text-gray-600">生地数</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">10種</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600">依頼者</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">大西</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600">作成者</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">猶原</div>
              </div>
              <div className="flex justify-end">
                <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
                  編集
                </button>
              </div>
            </div>

            {/* 2行目 */}
            <div className="grid grid-cols-4 gap-8">
              <div>
                <label className="block text-sm text-gray-600">納期</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">2025/04/14</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600">目的</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">OAT/OAC/TXP</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600">部数</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">計20本</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600">ハンガー履歴</label>
                <button className="mt-1 bg-white border border-purple-600 text-purple-600 px-6 py-2 rounded-lg hover:bg-purple-50">
                  参照
                </button>
              </div>
            </div>

            {/* 3行目 */}
            <div className="grid grid-cols-4 gap-8">
              <div>
                <label className="block text-sm text-gray-600">相手先品番</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">1234567</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600">相手先色番</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">BK</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600">収納者</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">大西</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600">作成者</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">猪原</div>
              </div>
            </div>

            {/* 4行目 */}
            <div className="grid grid-cols-4 gap-8">
              <div>
                <label className="block text-sm text-gray-600">期間</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">2024-01-01</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600">種別</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">簡</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600">本数</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">24本</div>
              </div>
              <div>
                <label className="block text-sm text-gray-600">加工点数</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">4</div>
              </div>
            </div>

            {/* 5行目 */}
            <div className="grid grid-cols-4 gap-8">
              <div className="col-span-2">
                <label className="block text-sm text-gray-600">備考</label>
                <div className="mt-1 text-lg font-semibold text-[#333333]">あああああああああああ</div>
              </div>
            </div>
          </div>
        </div>

        {/* メインコンテンツ */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">縫製グループ</h2>
            <SewingTable />
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">加工グループ</h2>
            {processingGroups.map((number) => (
              <ProcessingGroup key={number} number={number} onDelete={deleteProcessingGroup} />
            ))}
            <div className="flex justify-center mt-4">
              <button 
                onClick={addProcessingGroup}
                className="flex items-center px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50"
              >
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                加工グループを追加
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">プレスグループ</h2>
            <PressTable />
          </div>
        </div>

        {/* 登録ボタン */}
        <div className="mt-8 flex justify-end">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 text-lg font-medium">
            登録
          </button>
        </div>
      </div>
    </main>
  );
}
