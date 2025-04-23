'use client';

import React, { useState } from 'react';
import { 
  GraduationCap, 
  BarChart2, 
  BookOpen, 
  Calendar, 
  MessageSquare, 
  Award, 
  LogOut, 
  Bell, 
  Settings 
} from 'lucide-react';

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
    { icon: <GraduationCap className="mr-3" size={20} />, text: 'Mes Cours', page: 'courses' },
    { icon: <BarChart2 className="mr-3" size={20} />, text: 'Ma Progression', page: 'progress' },
    { icon: <BookOpen className="mr-3" size={20} />, text: 'Quiz', page: 'quiz' },
    { icon: <Calendar className="mr-3" size={20} />, text: 'Planning' },
    { icon: <MessageSquare className="mr-3" size={20} />, text: 'Messages' },
    { icon: <Award className="mr-3" size={20} />, text: 'Certifications' },
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
            <LogOut className="mr-3" size={20} />
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
              <Bell size={20} />
              <span className="absolute top-1 right-1 h-2 w-2 bg-green-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Settings size={20} />
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