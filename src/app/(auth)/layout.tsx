import { Metadata } from "next";
import React from "react";
import { Mada as FontSans } from "next/font/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import StoreProvider from "@/app/StoreProvider";
import { Toaster } from "sonner";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Leadlly | Auth",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={cn("h-main-height")}>{children}</div>;
}
