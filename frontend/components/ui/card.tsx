// components/ui/card.tsx
 import React from 'react';
 export const Card = ({ children }: { children: React.ReactNode }) => (
   <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow duration-200">
     {children}
   </div>
 );
 Card.Header = ({ children }: any) => <div className="mb-2 font-semibold">{children}</div>;
 Card.Title = ({ children }: any) => <h2 className="text-lg">{children}</h2>;
 Card.Content = ({ children }: any) => <div className="text-sm text-gray-700">{children}</div>;
