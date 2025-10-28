"use client";

import "./globals.css";
import { ReactNode } from "react";
import '../styles/tooltip.css';
import '../styles/drinks.css';
import '../styles/styles.css'
import '../styles/globals.scss'



//import 'bootstrap/dist/css/bootstrap.min.css'


interface IProps {
  children: ReactNode;
}
export default function RootLayout({ children }: IProps) {
  return (
    <html lang="en">
      <body>
        
          
        <body>{children}</body>
        
      </body>
    </html>
  );
}

function hydrateRoot(arg0: HTMLElement, arg1: JSX.Element) {
  throw new Error("Function not implemented.");
}
