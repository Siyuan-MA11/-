import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownCircle } from 'lucide-react';

export const TOC: React.FC = () => {
  const chapters = [
    { id: 'cost', title: '01 发射霸权', desc: '成本为王' },
    { id: 'business', title: '02 商业扩张', desc: '万亿市场' },
    { id: 'tech', title: '03 技术壁垒', desc: '工业奇迹' },
    { id: 'investment', title: '04 投资机遇', desc: '中国映射' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-black text-white py-12 border-b-4 border-white">
        <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-xl font-bold mb-6 text-center uppercase tracking-widest text-yellow-400">报告导览 (点击跳转)</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {chapters.map((chapter, index) => (
                    <motion.button
                        key={chapter.id}
                        whileHover={{ y: -5, backgroundColor: '#333' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection(chapter.id)}
                        className="flex flex-col items-center p-4 border-2 border-white rounded-xl bg-gray-900 transition-colors"
                    >
                        <span className="text-yellow-400 font-black text-3xl mb-1">{chapter.title.split(' ')[0]}</span>
                        <span className="font-bold text-lg mb-2">{chapter.title.split(' ')[1]}</span>
                        <span className="text-gray-400 text-xs uppercase bg-gray-800 px-2 py-1 rounded">{chapter.desc}</span>
                        <ArrowDownCircle className="mt-4 opacity-50" size={20}/>
                    </motion.button>
                ))}
            </div>
        </div>
    </div>
  );
};