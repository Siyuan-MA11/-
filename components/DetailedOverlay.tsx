import React from 'react';
import { X, FileText, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChapterDetail } from '../types';

interface DetailedOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  data: ChapterDetail | null;
}

export const DetailedOverlay: React.FC<DetailedOverlayProps> = ({ isOpen, onClose, data }) => {
  if (!data) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container - "Top Secret Folder" Style */}
          <motion.div 
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 100, opacity: 0, scale: 0.9 }}
            className={`relative w-full max-w-4xl max-h-full overflow-y-auto ${data.color} border-4 border-black rounded-xl shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] flex flex-col`}
          >
            {/* Folder Tab Visual */}
            <div className="absolute -top-10 left-8 bg-black text-white px-6 py-2 rounded-t-xl border-t-4 border-x-4 border-black font-black uppercase tracking-wider flex items-center gap-2">
              <FileText size={20} />
              机密档案: {data.id.toUpperCase()}
            </div>

            {/* Header */}
            <div className="sticky top-0 bg-white border-b-4 border-black p-6 flex justify-between items-center z-10">
              <h2 className="text-2xl md:text-3xl font-black truncate pr-4">{data.title}</h2>
              <button 
                onClick={onClose}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg border-2 border-black transition-colors"
              >
                <X size={24} strokeWidth={3} />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-8 space-y-10">
              {data.sections.map((section, idx) => (
                <div key={idx} className="relative bg-white p-6 border-2 border-black rounded-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
                  <div className="absolute -left-3 -top-3 bg-black text-white w-8 h-8 flex items-center justify-center font-bold border-2 border-white rounded-full">
                    {idx + 1}
                  </div>
                  <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                    {section.heading}
                  </h3>
                  <p className="text-gray-800 leading-relaxed font-medium mb-4 text-lg">
                    {section.text}
                  </p>
                  
                  {section.bullets && (
                    <div className="bg-gray-50 p-4 rounded border-l-4 border-black">
                      <ul className="space-y-2">
                        {section.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 font-bold text-gray-700">
                            <Target className="flex-shrink-0 mt-1 text-blue-600" size={16} />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}

              <div className="text-center pt-8 border-t-2 border-dashed border-gray-400">
                <button 
                  onClick={onClose}
                  className="bg-black text-white px-8 py-3 rounded-full font-black text-lg hover:scale-105 transition-transform"
                >
                  已阅，关闭档案
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};