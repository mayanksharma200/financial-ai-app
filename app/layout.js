import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const inter = Inter({ subsets:["latin"]});

export const metadata = {
  title: "Financial",
  description: "Manage Your Expenses",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className}`}>
          {/* {header} */}
          <Header />
          <main className="min-h-screen">{children}</main>
          {/* {footer} */}
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600"></div>
            <p className="text-center">Made by Mayank Sharma</p>
            <p className="text-center">vashistmayankk@gmail.com</p>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
