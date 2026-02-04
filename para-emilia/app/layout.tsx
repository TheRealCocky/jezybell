import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// A fonte para a tua carta de amor
const dancingScript = Dancing_Script({
    variable: "--font-handwritten",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Pra minha ride or die💕",
    description: "Um pequeno espaço pra expor o que sinto por ti pela minhas skills.",
    icons: {
        icon: [
            {
                url: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
                href: "https://cdn-icons-png.flaticon.com/512/833/833472.png",
            },
        ],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt">
        <body
            className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
