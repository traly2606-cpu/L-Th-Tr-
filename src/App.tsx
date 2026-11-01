import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { ConversationAnalyzer } from './components/ConversationAnalyzer';
import { BehaviorLibrary } from './components/BehaviorLibrary';
import { ResponseAssistant } from './components/ResponseAssistant';
import { KnowledgeQuiz } from './components/KnowledgeQuiz';
import { EmergencyModal } from './components/EmergencyModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState<'analyzer' | 'library' | 'assistant' | 'quiz'>('analyzer');
  const [emergencyModalOpen, setEmergencyModalOpen] = useState(false);
  const [selectedLibraryCategory, setSelectedLibraryCategory] = useState<string | null>(null);

  const handleExploreCategory = (categoryId: string) => {
    setSelectedLibraryCategory(categoryId);
    setActiveTab('library');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tab: 'analyzer' | 'library' | 'assistant' | 'quiz') => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-teal-100 selection:text-teal-900">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onOpenEmergency={() => setEmergencyModalOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'analyzer' && (
          <ConversationAnalyzer
            onOpenEmergency={() => setEmergencyModalOpen(true)}
            onExploreCategory={handleExploreCategory}
          />
        )}

        {activeTab === 'library' && (
          <BehaviorLibrary initialCategoryId={selectedLibraryCategory} />
        )}

        {activeTab === 'assistant' && (
          <ResponseAssistant onOpenEmergency={() => setEmergencyModalOpen(true)} />
        )}

        {activeTab === 'quiz' && <KnowledgeQuiz />}
      </main>

      {/* Emergency Modal */}
      <EmergencyModal
        isOpen={emergencyModalOpen}
        onClose={() => setEmergencyModalOpen(false)}
      />

      {/* Footer */}
      <Footer
        onOpenEmergency={() => setEmergencyModalOpen(true)}
        onNavigateTab={handleTabChange}
      />
    </div>
  );
}
