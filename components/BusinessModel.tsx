import React from 'react';
import { Wifi, Briefcase, Smartphone, ArrowRight } from 'lucide-react';
import { Card } from './Card';
import { motion } from 'framer-motion';

const stages = [
  {
    id: 1,
    title: "阶段一：B2C 个人版",
    sub: "农村与偏远地区的宽带替代",
    desc: "这是 Starlink 目前的基本盘。受限于人口密度，主要服务地面基站覆盖不到的地方。",
    icon: <Wifi size={40} />,
    color: "bg-orange-300"
  },
  {
    id: 2,
    title: "阶段二：B2B 企业版",
    sub: "高价值移动场景的垄断",
    desc: "航空、海事、陆地机动。高 ARPU 值市场，利润率提升的关键。几乎没有替代品。",
    icon: <Briefcase size={40} />,
    color: "bg-purple-300"
  },
  {
    id: 3,
    title: "阶段三：B2B2C 直连手机",
    sub: "终极网络，打破物理边界",
    desc: "与 T-Mobile 等运营商合作，卫星直接连手机。用户基数从百万跃升至亿级。",
    icon: <Smartphone size={40} />,
    color: "bg-pink-300"
  }
];

interface Props {
  onReadMore: (id: string) => void;
}

export const BusinessModel: React.FC<Props> = ({ onReadMore }) => {
  return (
    <section id="business" className="py-20 px-4 md:px-10 bg-white border-y-4 border-black scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 text-center md:text-left">
          <div>
             <h2 className="text-4xl md:text-5xl font-black mb-4">第二章：三级火箭式商业扩张</h2>
             <p className="text-xl font-bold text-gray-600">从简单的卖锅上网，到全球电信运营商的太空基站。</p>
          </div>
          <button 
            onClick={() => onReadMore('business')}
            className="mx-auto md:mx-0 flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            深入阅读 <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card color={stage.color} className="h-full">
                <div className="bg-white border-4 border-black rounded-full w-20 h-20 flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {stage.icon}
                </div>
                <h3 className="text-2xl font-black mb-2">{stage.title}</h3>
                <div className="inline-block bg-black text-white px-2 py-1 rounded text-sm font-bold mb-4 transform -skew-x-12">
                  {stage.sub}
                </div>
                <p className="font-bold text-gray-800 leading-relaxed">
                  {stage.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};