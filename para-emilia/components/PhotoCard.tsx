"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PhotoProps {
    url: string;
    caption: string;
    audioUrl?: string;
    index: number;
}

export default function PhotoCard({ url, caption, audioUrl, index }: PhotoProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const rotation = index % 2 === 0 ? -3 : 3;

    const toggleAudio = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20, rotate: rotation }}
                whileInView={{ opacity: 1, y: 0, rotate: rotation }}
                whileHover={{ y: -15, rotate: 0, zIndex: 50, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="bg-white p-4 pb-6 shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-sm border border-stone-100 flex flex-col h-full"
            >
                {/* FOTO MINIATURA */}
                <div
                    onClick={() => setIsOpen(true)}
                    className="cursor-pointer overflow-hidden aspect-square relative shadow-inner bg-stone-50"
                >
                    <img src={url} alt={caption} className="object-cover w-full h-full" />
                </div>

                {/* LEGENDA E ÁUDIO */}
                <div className="mt-6 flex-grow flex flex-col items-center justify-between">
                    <p className="font-[family-name:var(--font-handwritten)] text-2xl text-stone-700 text-center leading-tight">
                        {caption}
                    </p>

                    {audioUrl && (
                        <div className="mt-4 w-full flex justify-center">
                            <audio ref={audioRef} src={audioUrl} onEnded={() => setIsPlaying(false)} className="hidden" />
                            <button
                                onClick={toggleAudio}
                                className="flex items-center gap-3 px-5 py-2 rounded-full bg-rose-50 text-rose-600 hover:bg-rose-100 transition-all active:scale-95"
                            >
                                <span className="text-xs font-bold uppercase tracking-tighter">
                                    {isPlaying ? "Pausar" : "Ouvir Memória"}
                                </span>
                                <div className="flex gap-1 h-3 items-end">
                                    <motion.div animate={{ height: isPlaying ? [4, 12, 4] : 4 }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-1 bg-rose-400 rounded-full" />
                                    <motion.div animate={{ height: isPlaying ? [12, 4, 12] : 6 }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1 bg-rose-500 rounded-full" />
                                    <motion.div animate={{ height: isPlaying ? [6, 10, 6] : 4 }} transition={{ repeat: Infinity, duration: 0.4 }} className="w-1 bg-rose-400 rounded-full" />
                                </div>
                            </button>
                        </div>
                    )}
                </div>
            </motion.div>

            {/* LIGHTBOX (IMAGEM AMPLIADA) */}
            {/* LIGHTBOX (IMAGEM AMPLIADA COM SCROLL) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl overflow-y-auto overflow-x-hidden"
                        // O clique para fechar agora fica num container interno ou no próprio fundo
                    >
                        {/* BOTÃO FECHAR - Fica fixo no ecrã enquanto a foto desliza atrás */}
                        <button
                            className="fixed top-6 right-6 text-white bg-white/10 hover:bg-rose-500 p-4 rounded-full transition-all z-[10001] shadow-2xl backdrop-blur-md border border-white/10 active:scale-90"
                            onClick={() => setIsOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>

                        {/* CONTAINER ROLÁVEL */}
                        <div
                            className="min-h-screen w-full flex flex-col items-center py-12 px-4 md:py-20"
                            onClick={() => setIsOpen(false)} // Fecha se clicar no espaço vazio
                        >
                            <motion.div
                                initial={{ scale: 0.9, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.9, y: 20 }}
                                className="relative flex flex-col items-center max-w-4xl w-full"
                                onClick={(e) => e.stopPropagation()} // Impede fechar ao clicar na foto/legenda
                            >
                                <img
                                    src={url}
                                    className="
        /* Mobile: Ocupa a largura disponível */
        w-full h-auto

        /* Desktop (md): Não ultrapassa a altura do ecrã e ajusta a largura automaticamente */
        md:w-auto md:max-h-[85vh]

        /* Estética */
        rounded-sm shadow-2xl border-[6px] md:border-[12px] border-white
    "
                                    alt={caption}
                                />

                                <div className="mt-8 mb-10 text-center">
                                    <p className="text-white font-[family-name:var(--font-handwritten)] text-4xl md:text-6xl leading-tight drop-shadow-lg">
                                        {caption}
                                    </p>

                                    {/* Dica visual para ela saber que pode voltar */}
                                    <p className="text-white/30 text-[10px] uppercase tracking-[0.4em] mt-12">
                                        Fim da memória • Toca acima da imagem para sair
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}