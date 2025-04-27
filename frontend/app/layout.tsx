import "bootstrap/dist/css/bootstrap.min.css";
import './globals.css';  
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "@/context/AppProvider";


export const metadata: Metadata = {
  title: "JaspeAcademy",
  description: "e-learning based Next js App with Laravel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <Toaster/>
          <Navbar/>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
