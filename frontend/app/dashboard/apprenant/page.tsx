'use client';

import React, { useState } from 'react';

// Composants d'icônes SVG
const IconGraduation = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
  </svg>
);

const IconChart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
    <path d="M3 3v18h18"/>
    <path d="m19 9-5 5-4-4-3 3"/>
  </svg>
);

const IconBook = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
);

const IconCalendar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
    <line x1="16" x2="16" y1="2" y2="6"/>
    <line x1="8" x2="8" y1="2" y2="6"/>
    <line x1="3" x2="21" y1="10" y2="10"/>
  </svg>
);

const IconMessage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const IconAward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
    <circle cx="12" cy="8" r="7"/>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
  </svg>
);

const IconLogout = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
);

const IconBell = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
  </svg>
);

const IconSettings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

// Interfaces pour le typage
interface LayoutProps {
  children: React.ReactNode;
  currentPage?: 'courses' | 'progress' | 'quiz';
}

interface MenuItem {
  icon: React.ReactNode;
  text: string;
  page?: LayoutProps['currentPage'] | string;
}

// Composant principal du Layout
export default function Layout({ children, currentPage = 'courses' }: LayoutProps) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Items du menu de navigation
  const menuItems: MenuItem[] = [
    { icon: <IconGraduation />, text: 'Mes Cours', page: 'courses' },
    { icon: <IconChart />, text: 'Ma Progression', page: 'progress' },
    { icon: <IconBook />, text: 'Quiz', page: 'quiz' },
    { icon: <IconCalendar />, text: 'Planning' },
    { icon: <IconMessage />, text: 'Messages' },
    { icon: <IconAward />, text: 'Certifications' },
  ];

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar vert */}
      <aside className="w-72 bg-green-700 text-white">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-white">Espace Apprenant</h2>
          <p className="text-sm text-green-100 mt-1">Formation Web Dev</p>
        </div>

        {/* Section profil */}
        <div className="px-6 py-4 border-y border-green-600">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full border-2 border-green-300 bg-white flex items-center justify-center">
              <span className="text-green-700 font-bold">TD</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Thomas Durant</h3>
              <p className="text-xs text-green-200">Niveau 2 • 450 XP</p>
            </div>
          </div>
          <div className="mt-4 text-sm">
            <p className="text-green-200">Progression</p>
            <div className="w-full bg-green-800 rounded-full h-2 mt-1">
              <div
                className="bg-white h-2 rounded-full"
                style={{ width: '45%' }}
              ></div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-3">
          {menuItems.map((item, index) => {
            const isActive = item.page && item.page === currentPage;

            return (
              <a
                key={index}
                href="#"
                className={`flex items-center px-4 py-3 rounded-lg mb-1 transition-colors ${
                  isActive
                    ? 'bg-green-600 text-white'
                    : 'text-green-100 hover:bg-green-600'
                }`}
              >
                {item.icon}
                {item.text}
              </a>
            );
          })}
        </nav>

        <div className="absolute bottom-0 w-72 p-6">
          <button className="flex items-center px-4 py-3 text-green-100 hover:bg-green-600 rounded-lg w-full">
            <IconLogout />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Contenu principal avec fond blanc */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navigation supérieure */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6 border-b border-gray-100">
          <h1 className="text-xl font-semibold text-green-700">
            {menuItems.find((item) => item.page === currentPage)?.text ||
              'Tableau de bord'}
          </h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <IconBell />
              <span className="absolute top-1 right-1 h-2 w-2 bg-green-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <IconSettings />
            </button>
          </div>
        </header>

        {/* Zone de contenu principal */}
        <main className="flex-1 overflow-y-auto p-6 bg-white">
          <div className="max-w-7xl mx-auto">
            {children}
            
            {/* Exemple de contenu pour visualisation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-medium text-green-700 mb-2">Prochaine session</h3>
                <p className="text-gray-600">HTML/CSS Avancé - 14:00</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-medium text-green-700 mb-2">Devoirs en attente</h3>
                <p className="text-gray-600">Projet JavaScript - J-2</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-medium text-green-700 mb-2">Progression globale</h3>
                <p className="text-gray-600">45% du cursus complété</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}