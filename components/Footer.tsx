import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 text-center border-t-4 border-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-black mb-4">国金证券 | 行业深度研究</h2>
        <p className="text-gray-400 font-bold mb-8">分析师: 陈安骄 (S1130525100001)</p>
        <div className="text-sm text-gray-500">
          <p>本页面基于2025年12月05日发布的《商业航天行业研究系列1：Starlink——低轨织网，独步苍穹》制作。</p>
          <p>内容仅供参考，不构成投资建议。</p>
        </div>
      </div>
    </footer>
  );
};