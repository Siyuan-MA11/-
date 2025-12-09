import React from 'react';
import { Rocket, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-8 bg-yellow-300 border-b-4 border-black overflow-hidden relative">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center z-10 max-w-4xl"
      >
        <div className="inline-block bg-white border-4 border-black px-6 py-2 rounded-full font-bold text-lg mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          🚀 商业航天行业深度研究 | 系列 1
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight text-black drop-shadow-sm">
          STARLINK <br/>
          <span className="text-blue-600">低轨织网之路</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-bold text-gray-800 mb-10 max-w-2xl mx-auto leading-relaxed">
          这不仅是卫星，更是SpaceX的<span className="bg-green-400 px-2 border-2 border-black mx-1 rounded">超级印钞机</span>。
          <br/>
          从连接万物到万亿级TAM，带你读懂4000亿美元估值的秘密。
        </p>

        <div className="flex justify-center gap-4">
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="bg-white p-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <Rocket size={48} className="text-red-500" />
          </motion.div>
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
             className="bg-white p-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
           >
            <Globe size={48} className="text-blue-500" />
          </motion.div>
        </div>
      </motion.div>
      
      <div className="absolute bottom-10 animate-bounce">
        <p className="font-bold text-lg">向下滚动探索 👇</p>
      </div>
    </section>
  );
};