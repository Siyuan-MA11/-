import React from 'react';
import { TrendingUp, AlertTriangle, ArrowRight } from 'lucide-react';
import { Card } from './Card';
import { motion } from 'framer-motion';

interface Props {
  onReadMore: (id: string) => void;
}

export const Investment: React.FC<Props> = ({ onReadMore }) => {
  return (
    <section id="investment" className="py-20 px-4 md:px-10 bg-gray-100 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6 text-center md:text-left">
          <div>
            <div className="inline-block bg-red-600 text-white px-4 py-1 rounded border-2 border-black font-bold mb-4">
                A股投资逻辑
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6">第四章：中国商业航天怎么投？</h2>
            <p className="text-xl font-bold text-gray-600 max-w-3xl mx-auto md:mx-0">
                中国正处于类似 SpaceX 2018-2020 年的组网前夜。
            </p>
          </div>
          <button 
            onClick={() => onReadMore('investment')}
            className="mx-auto md:mx-0 flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            深入阅读 <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
            <motion.div whileHover={{y:-10}}>
                <Card color="bg-white" title="逻辑一：时间窗口">
                    <p className="font-bold text-gray-800">
                        随着 G60 千帆与 GW 国网进入密集发射期，卫星制造正从【实验室定制】向【汽车流水线式生产】转型。
                    </p>
                </Card>
            </motion.div>
            <motion.div whileHover={{y:-10}}>
                 <Card color="bg-white" title="逻辑二：核心Alpha">
                    <p className="font-bold text-gray-800">
                        在液体可回收火箭技术完全成熟前，产业链中最确定的收益来自高价值量、高准入壁垒的<span className="text-red-600">卫星核心单机与载荷</span>。
                    </p>
                </Card>
            </motion.div>
            <motion.div whileHover={{y:-10}}>
                 <Card color="bg-white" title="逻辑三：率先兑现">
                    <p className="font-bold text-gray-800">
                        能提供通用化电源、通信、姿控系统的配套商将率先兑现业绩。
                    </p>
                </Card>
            </motion.div>
        </div>

        <div className="bg-white border-4 border-black rounded-xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                <AlertTriangle className="text-red-500" />
                <span>风险提示</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-4 font-bold text-gray-700">
                <div className="flex items-center gap-2 bg-gray-100 p-4 rounded border-2 border-black">
                    <span className="text-2xl">👤</span> 关键人风险 (马斯克)
                </div>
                <div className="flex items-center gap-2 bg-gray-100 p-4 rounded border-2 border-black">
                    <span className="text-2xl">🚀</span> Starship 研发受阻
                </div>
                <div className="flex items-center gap-2 bg-gray-100 p-4 rounded border-2 border-black">
                    <span className="text-2xl">🌍</span> 地缘政治因素
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};