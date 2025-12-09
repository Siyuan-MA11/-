import React from 'react';
import { Zap, Layers, Share2, ArrowRight } from 'lucide-react';
import { Card } from './Card';
import { motion } from 'framer-motion';

interface Props {
  onReadMore: (id: string) => void;
}

export const TechStack: React.FC<Props> = ({ onReadMore }) => {
  return (
    <section id="tech" className="py-20 px-4 md:px-10 bg-indigo-600 text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white drop-shadow-[4px_4px_0_#000]">
                第三章：硬核技术壁垒
            </h2>
            <p className="text-xl font-bold text-indigo-200">
                极致的工业化制造 + 垂直整合效率
            </p>
          </div>
          <button 
            onClick={() => onReadMore('tech')}
            className="mx-auto md:mx-0 flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold border-4 border-black hover:bg-black hover:text-white hover:border-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            深入阅读 <ArrowRight size={20} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Card color="bg-yellow-400" title="工业化平板堆叠" className="h-full">
              <div className="flex items-center gap-4 mb-4">
                <Layers size={32} className="text-black"/>
                <span className="text-2xl font-black text-black">像造车一样造卫星</span>
              </div>
              <ul className="list-disc pl-5 space-y-3 text-black font-bold">
                <li>摒弃实验室定制模式，采用流水线自动化量产。</li>
                <li>独特的平板设计，单发 Falcon 9 可堆叠 60 颗。</li>
                <li>极致的空间利用率 = 极致的发射降本。</li>
              </ul>
            </Card>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <Card color="bg-cyan-400" title="星间激光链路 (ISL)" className="h-full">
               <div className="flex items-center gap-4 mb-4">
                <Share2 size={32} className="text-black"/>
                <span className="text-2xl font-black text-black">太空光速网状网</span>
              </div>
              <ul className="list-disc pl-5 space-y-3 text-black font-bold">
                <li>Starlink 区别于 OneWeb 的杀手锏。</li>
                <li>摆脱地面信关站地理依赖（海洋、极地也能连）。</li>
                <li>毫秒级低延迟，构建高端客户无法拒绝的体验壁垒。</li>
              </ul>
            </Card>
          </motion.div>
        </div>
        
        <div className="mt-12 text-center">
            <motion.div 
                className="inline-block bg-white text-black p-6 border-4 border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                whileHover={{ scale: 1.05 }}
            >
                <div className="flex items-center justify-center gap-2 mb-2">
                    <Zap className="text-yellow-500 fill-current" size={32} />
                    <h3 className="text-2xl font-black">飞轮效应</h3>
                </div>
                <p className="font-bold text-lg">
                    更多用户 → 更多收入 → 发射更多卫星 → 更好体验 → 吸引更多用户
                </p>
            </motion.div>
        </div>
      </div>
    </section>
  );
};