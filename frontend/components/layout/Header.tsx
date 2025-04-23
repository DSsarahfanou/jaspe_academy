// components/layout/Header.tsx
 interface HeaderProps { title: string }
 export function Header({ title }: HeaderProps) {
   return (
     <header className="bg-white p-4 shadow flex justify-between items-center bg-red-500">
       <h1 className="text-xl font-bold">{title}</h1>
     </header>
   );
 }