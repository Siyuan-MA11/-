import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { TOC } from './components/TOC';
import { CostAnalysis } from './components/CostAnalysis';
import { BusinessModel } from './components/BusinessModel';
import { TechStack } from './components/TechStack';
import { Investment } from './components/Investment';
import { Footer } from './components/Footer';
import { DetailedOverlay } from './components/DetailedOverlay';
import { reportContent } from './utils/content';
import { ChapterDetail } from './types';
import { Share2, Check } from 'lucide-react';

const App: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<ChapterDetail | null>(null);
  const [showCopied, setShowCopied] = useState(false);

  const handleReadMore = (id: string) => {
    const content = reportContent[id];
    if (content) {
      setActiveChapter(content);
    }
  };

  const handleClose = () => {
    setActiveChapter(null);
  };

  const handleShare = async () => {
    const url = window.location.href;
    const title = "商业航天深度报告：Starlink与投资机遇";
    
    // Try native share first (mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: '快来看看这篇关于Starlink的深度行业报告！',
          url: url,
        });
        return;
      } catch (error) {
        // User cancelled or error, fall through to copy logic
        console.log("Native share cancelled or failed, falling back to clipboard");
      }
    }

    // Fallback to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
      alert('抱歉，复制失败，请手动复制浏览器地址栏。');
    }
  };

  return (
    <div className="min-h-screen bg-fuchsia-50 selection:bg-black selection:text-white pattern-dots">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b-4 border-black z-50 px-4 py-3 flex justify-between items-center">
        <span className="font-black text-xl tracking-tighter hidden md:block">SINOLINK | SPACE</span>
        <span className="font-black text-lg tracking-tighter md:hidden">SINOLINK</span>
        
        <div className="flex items-center gap-2">
            <button 
                onClick={handleShare}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm border-2 border-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] ${showCopied ? 'bg-green-400 text-black' : 'bg-yellow-400 hover:bg-yellow-300 text-black'}`}
            >
                {showCopied ? <Check size={16}/> : <Share2 size={16} />}
                {showCopied ? '已复制链接' : '分享'}
            </button>

            <a 
            href="https://www.spacex.com/starlink" 
            target="_blank" 
            rel="noreferrer"
            className="bg-black text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-800 transition-colors hidden sm:block"
            >
            查看原文
            </a>
        </div>
      </nav>
      
      <main className="pt-16">
        <Hero />
        <TOC />
        <CostAnalysis onReadMore={handleReadMore} />
        <BusinessModel onReadMore={handleReadMore} />
        <TechStack onReadMore={handleReadMore} />
        <Investment onReadMore={handleReadMore} />
      </main>
      
      <Footer />
      
      <DetailedOverlay 
        isOpen={!!activeChapter} 
        onClose={handleClose} 
        data={activeChapter} 
      />
    </div>
  );
};

export default App;