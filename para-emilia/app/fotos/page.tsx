"use client";
import PageTransition from "@/components/PageTransition";
import PhotoCard from "@/components/PhotoCard";
import Link from "next/link";
import { motion } from "framer-motion";

const minhasFotos = [
    {
        url: "https://res.cloudinary.com/dwp3wuum6/image/upload/v1770225053/2265eb62-889a-492a-9de4-c62576894889_gohfmu.jpg",
        legenda: "Essa aqui é meu papel de parede e muito hot.🌴🥵",
        audioUrl: "https://res.cloudinary.com/teu-user/video/upload/v123/audio1.mp3"
    },
    {
        url: "https://res.cloudinary.com/dwp3wuum6/image/upload/v1770225466/3fc2fea5-c6b7-4a5f-a771-323ce74cbf9d_yw4myp.jpg",
        legenda: "Todos os dias me apaixono.🌼",
        audioUrl: "https://res.cloudinary.com/teu-user/video/upload/v123/audio1.mp3"
    },
    {
        url: "https://res.cloudinary.com/dwp3wuum6/image/upload/v1770225841/44460c34-5055-4279-91f0-dab2ae7e4052_2_npe1qo.jpg",
        legenda: "Se criares uma religião, vou ser o primeio crente.🤎",
        audioUrl: "https://res.cloudinary.com/teu-user/video/upload/v123/audio1.mp3"
    },
    {
        url: "https://res.cloudinary.com/dwp3wuum6/image/upload/v1770225595/f0b2d06b-4824-4c00-b6af-f3d19011b090_yvzyku.jpg",
        legenda: "No dia que voltares a paritlhar vou cobrar direitos autorais,hahaha.💕",
        audioUrl: "https://res.cloudinary.com/teu-user/video/upload/v123/audio1.mp3"
    },
    {
        url: "https://res.cloudinary.com/dwp3wuum6/image/upload/v1770225727/WhatsApp_Image_2025-04-09_at_18.38.10_2_d0gmko.jpg",
        legenda: "Tens na tua alma um lindo ser.💗"
    },
];

export default function FotosPage() {
    return (
        <PageTransition>
            <main className="min-h-screen bg-[#f8f5f0] p-6 md:p-12 relative">

                {/* BOTÃO VOLTAR (Top Left) */}
                <div className="max-w-6xl mx-auto mb-8">
                    <Link href="/">
                        <motion.button
                            whileHover={{ x: -5 }}
                            className="flex items-center gap-2 text-stone-400 hover:text-rose-600 transition-colors text-sm tracking-widest uppercase font-sans font-medium"
                        >
                            ← Início
                        </motion.button>
                    </Link>
                </div>

                <div className="max-w-6xl mx-auto">
                    <header className="mb-16 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-[family-name:var(--font-handwritten)] text-rose-700 mb-4"
                        >
                            Top 5 das tuas fotos💕
                        </motion.h1>
                        <div className="w-24 h-1 bg-rose-200 mx-auto rounded-full" />
                    </header>

                    {/* GRID DE FOTOS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 max-w-6xl mx-auto">
                        {minhasFotos.map((foto, index) => (
                            <PhotoCard
                                key={index}
                                index={index}
                                url={foto.url}
                                caption={foto.legenda}
                                audioUrl={foto.audioUrl}
                            />
                        ))}
                    </div>

                    {/* FOOTER NAVEGAÇÃO */}
                    <footer className="mt-24 text-center flex flex-col items-center gap-8">
                        <div className="w-full h-px bg-stone-200 max-w-xs mx-auto" />

                        <Link href="/musicas" className="group text-rose-600 font-medium">
                            <motion.span
                                whileHover={{ scale: 1.05 }}
                                className="inline-block border-b border-rose-200 group-hover:border-rose-600 transition-all px-4 py-2 italic text-lg"
                            >
                                Agora, ouve o que eu sinto... →
                            </motion.span>
                        </Link>
                    </footer>
                </div>
            </main>
        </PageTransition>
    );
}