"use client";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function MusicasPage() {
    const [player, setPlayer] = useState<"spotify" | "youtube">("spotify");

    return (
        <PageTransition>
            <main className="min-h-screen bg-[#fffafa] p-6 relative overflow-hidden flex flex-col items-center">

                {/* BOTÃO VOLTAR (Top Left) - Otimizado para Resposta Imediata */}
                {/* BOTÃO VOLTAR - Versão para iPhone/Mobile */}
                <div className="w-full max-w-4xl self-center mb-4 md:mb-8">
                    <a
                        href="/"
                        className="flex items-center gap-2 text-stone-400 hover:text-rose-500 transition-colors text-xs tracking-[0.3em] uppercase font-medium cursor-pointer"
                        style={{ display: 'flex', alignItems: 'center' }}
                    >
                        ← Início
                    </a>
                </div>

                {/* Decoração de fundo */}
                <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-rose-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-pink-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

                <div className="max-w-2xl w-full z-10 text-center flex-grow flex flex-col justify-center">
                    <header className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-[family-name:var(--font-handwritten)] text-rose-700 mb-2">
                            Nossa Playlist
                        </h1>
                        <p className="text-stone-500 italic text-sm md:text-base">
                            Onde queres ouvir as músicas que me fazem pensar em ti?
                        </p>
                    </header>

                    {/* SELETOR DE PLAYER */}
                    <div className="flex justify-center mb-10">
                        <div className="bg-stone-100 p-1 rounded-full flex relative border border-stone-200 shadow-inner">
                            <button
                                onClick={() => setPlayer("spotify")}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all z-10 ${player === "spotify" ? "text-white" : "text-stone-500"}`}
                            >
                                Spotify
                            </button>
                            <button
                                onClick={() => setPlayer("youtube")}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all z-10 ${player === "youtube" ? "text-white" : "text-stone-500"}`}
                            >
                                YouTube
                            </button>
                            <motion.div
                                className="absolute top-1 bottom-1 bg-rose-500 rounded-full shadow-md"
                                animate={{
                                    left: player === "spotify" ? "4px" : "50%",
                                    width: "calc(50% - 4px)"
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        </div>
                    </div>

                    {/* ÁREA DOS PLAYERS */}
                    <div className="relative min-h-[400px]">
                        <AnimatePresence mode="wait">
                            {player === "spotify" ? (
                                <motion.div
                                    key="spotify"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(225,29,72,0.1)] border border-rose-100 bg-white p-2"
                                >
                                    <iframe
                                        // ATENÇÃO: Substitui o ID abaixo pelo ID da tua playlist real
                                        src="https://open.spotify.com/embed/playlist/2dtsJbUQx9h2JXCMjgn8Gb?si=4ce12790767d4b67"
                                        width="100%"
                                        height="380"
                                        frameBorder="0"
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                        loading="lazy"
                                        className="rounded-2xl"
                                    ></iframe>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="youtube"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(225,29,72,0.15)] border border-rose-100 bg-white p-2"
                                >
                                    <iframe
                                        width="100%"
                                        height="380"
                                        // LINK CORRIGIDO PARA PLAYLIST DO YOUTUBE
                                        src="https://www.youtube.com/embed/videoseries?list=PLHz_AreHm4dkTxs0shNSPvEkubHc8Ffq4"
                                        title="YouTube playlist player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                        className="rounded-2xl"
                                    ></iframe>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Espaçador final para dar equilíbrio ao botão do topo */}
                    <div className="h-12 md:h-20" />
                </div>
            </main>
        </PageTransition>
    );
}