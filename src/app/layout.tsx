"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SideMenu from "../components/ui/sideMenu";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="border-b ">
          <div className="flex container mx-auto h-16 items-center px-4">
            <Image
              src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_photo_logo_icon_159338.png"
              width={40}
              height={40}
              alt={""}
            />
            {/* Fotos */}
            <div className="ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://avatars.githubusercontent.com/u/49418565?v=4" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="flex">
          <SideMenu />
          <div className="w-full px-4 py-2 pt-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
