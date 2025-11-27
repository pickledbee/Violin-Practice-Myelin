import React, { useState, useEffect, useRef } from 'react';
import { SECTIONS } from './constants';
import { Menu, X, CheckCircle, Circle, ArrowRight, BookOpen, ChevronRight } from 'lucide-react';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>(SECTIONS[0].id);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [readSections, setReadSections] = useState<Set<string>>(new Set());
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll to top of content when section changes
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [activeSectionId]);

  const activeSection = SECTIONS.find(s => s.id === activeSectionId) || SECTIONS[0];
  const activeIndex = SECTIONS.findIndex(s => s.id === activeSectionId);
  const nextSection = SECTIONS[activeIndex + 1];

  const handleSectionChange = (id: string) => {
    setActiveSectionId(id);
    setIsMobileMenuOpen(false);
  };

  const markAsRead = (id: string) => {
    setReadSections(prev => {
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });
  };

  const progress = Math.round((readSections.size / SECTIONS.length) * 100);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 z-50 flex items-center justify-between px-4 md:hidden">
        <span className="font-serif font-bold text-lg text-slate-900">NeuroViolin</span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600">
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed md:relative top-16 md:top-0 left-0 h-[calc(100vh-64px)] md:h-screen w-72 bg-white border-r border-slate-200 z-40 transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 h-full flex flex-col">
          <div className="mb-8 hidden md:block">
            <h1 className="font-serif font-bold text-xl text-slate-900 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-indigo-600" />
              NeuroViolin
            </h1>
            <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Mastery Guide</p>
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-xs font-semibold text-slate-500 mb-2">
              <span>PROGRESS</span>
              <span>{progress}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-indigo-500 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto space-y-1 pr-2 custom-scrollbar">
            {SECTIONS.map((section, idx) => {
              const isActive = section.id === activeSectionId;
              const isRead = readSections.has(section.id);
              
              return (
                <button
                  key={section.id}
                  onClick={() => handleSectionChange(section.id)}
                  className={`
                    w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors flex items-center justify-between group
                    ${isActive ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-slate-600 hover:bg-slate-50'}
                  `}
                >
                  <div className="flex items-center gap-3">
                    <span className={`
                      flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold border
                      ${isActive ? 'border-indigo-200 bg-white text-indigo-600' : 'border-slate-200 text-slate-400 bg-slate-50'}
                      ${isRead && !isActive ? 'bg-emerald-100 border-emerald-200 text-emerald-600' : ''}
                    `}>
                      {isRead ? <CheckCircle className="w-3.5 h-3.5" /> : idx + 1}
                    </span>
                    <span className="truncate w-40">{section.title}</span>
                  </div>
                  {isActive && <ChevronRight className="w-4 h-4 text-indigo-400" />}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-hidden relative pt-16 md:pt-0">
        <div ref={contentRef} className="h-full overflow-y-auto scroll-smooth">
          <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
            
            <header className="mb-8 border-b border-slate-100 pb-8">
              <div className="text-xs font-bold tracking-widest text-indigo-500 uppercase mb-3">
                Part {activeIndex + 1} of {SECTIONS.length} • {activeSection.readTime} min read
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 leading-tight">
                {activeSection.title}
              </h2>
              {activeSection.subtitle && (
                <p className="text-xl text-slate-500 font-light">{activeSection.subtitle}</p>
              )}
            </header>

            <div className="min-h-[400px]">
              {activeSection.content}
            </div>

            <footer className="mt-16 pt-8 border-t border-slate-100 flex flex-col items-center gap-6">
              {!readSections.has(activeSection.id) ? (
                 <button
                  onClick={() => markAsRead(activeSection.id)}
                  className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium shadow-lg shadow-slate-200 hover:bg-slate-800 transition-all active:scale-95 flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Mark Section as Complete
                </button>
              ) : (
                <div className="text-emerald-600 font-medium flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Section Completed
                </div>
              )}

              {nextSection && (
                <button 
                  onClick={() => handleSectionChange(nextSection.id)}
                  className="text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-2 text-sm font-medium"
                >
                  Next: {nextSection.title}
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </footer>

            <div className="h-20" /> {/* Spacer */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
