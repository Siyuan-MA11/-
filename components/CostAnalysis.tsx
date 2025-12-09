import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Card } from './Card';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const data = [
  { name: '竞对 (OneWeb等)', cost: 7000, label: '市场价格', fill: '#ef4444' }, // Red-500
  { name: 'Starlink', cost: 1500, label: '内部成本', fill: '#22c55e' }, // Green-500
];

interface Props {
  onReadMore: (id: string) => void;
}

export const CostAnalysis: React.FC<Props> = ({ onReadMore }) => {
  return (
    <section id="cost" className="py-20 px-4 md:px-10 bg-blue-50 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">第一章：降维打击的发射霸权</h2>
            <p className="text-xl font-bold text-gray-600">为什么对手追不上？因为起跑线就不一样。</p>
          </div>
          <button 
            onClick={() => onReadMore('cost')}
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            深入阅读 <ArrowRight size={20} />
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Card title="单次发射成本 (万美元)" className="h-96" color="bg-white">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} layout="vertical" margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
                <XAxis type="number" hide />
                <YAxis type="category" dataKey="name" width={120} tick={{fontSize: 14, fontWeight: 'bold'}} />
                <Tooltip 
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ border: '3px solid black', borderRadius: '8px', boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)' }}
                />
                <Bar dataKey="cost" radius={[0, 10, 10, 0]} barSize={60}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} stroke="black" strokeWidth={3} />
                    ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="absolute bottom-4 right-6 text-sm font-bold bg-yellow-200 border-2 border-black px-2 rounded">
              *Starlink 仅需支付 SpaceX 内部边际成本
            </div>
          </Card>

          <div className="space-y-6">
            <Card color="bg-red-300" title="对手的困境">
              <p className="font-bold">
                亚马逊 Project Kuiper 或 OneWeb 需要支付昂贵的市场价格（约 7000 万美金）来发射卫星。这包含了火箭公司的利润。
              </p>
            </Card>
            <div className="flex justify-center text-4xl font-black">VS</div>
            <Card color="bg-green-300" title="Starlink 的特权">
              <p className="font-bold">
                依托 SpaceX 母公司，Starlink 仅需支付内部成本（约 1500 万美金）。这种成本结构的根本差异，支持了无法企及的组网速度。
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};