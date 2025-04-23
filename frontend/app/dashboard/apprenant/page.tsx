// Dashboard principal: app/dashboard/apprenant/page.tsx
import React from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar importé depuis components/layout/Sidebar.tsx */}
      <Sidebar />

      {/* Contenu principal */}
      <div className="flex-1 flex flex-col">
        <Header title="Tableau de bord de l'apprenant" />

        <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto">
          {/* Carte: Progression */}
          <Card>
            <Card.Header>
              <Card.Title>Progression des cours</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-lg font-semibold">45% complété</p>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }} />
              </div>
            </Card.Content>
          </Card>

          {/* Carte: Module à venir */}
          <Card>
            <Card.Header>
              <Card.Title>Module à venir</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="font-medium">JavaScript Avancé</p>
              <p className="text-sm text-gray-500 mt-1">Disponible le 28 Avr 2025</p>
            </Card.Content>
          </Card>

          {/* Carte: Activité récente */}
          <Card>
            <Card.Header>
              <Card.Title>Activité récente</Card.Title>
            </Card.Header>
            <Card.Content>
              <ul className="list-disc ml-5 space-y-2">
                <li>Quiz HTML terminé</li>
                <li>Vidéo CSS visionnée</li>
                <li>Forum: Question sur Flexbox</li>
              </ul>
            </Card.Content>
          </Card>
        </main>
      </div>
    </div>
  );
}