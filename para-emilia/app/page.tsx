"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PresentModal from "@/components/PresentModal";
import Link from "next/link";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        /* REATIVADO: snap-y e snap-mandatory agora funcionam em todos os dispositivos */
        <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth bg-slate-50 no-scrollbar">

            {/* BACKGROUND DECORATION - Otimizado para não travar o scroll */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* Reduzi ligeiramente a opacidade e o blur para o Snap não 'tremer' no iPhone */}
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-rose-200/30 blur-[80px] md:blur-[120px]" />
                <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-pink-200/30 blur-[80px] md:blur-[120px]" />
            </div>

            {/* SECCÃO 1: Hero */}
            <section className="snap-start h-screen flex flex-col items-center justify-center relative px-6 shrink-0">
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="uppercase tracking-[0.4em] text-xs text-rose-400 font-semibold mb-6"
                >
                    Will you be my Valentine?
                </motion.span>

                <h1 className="text-6xl md:text-[8rem] font-serif font-light text-slate-800 text-center leading-none">
                    Para a minha <br />
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-rose-500 font-[family-name:var(--font-handwritten)] block mt-2"
                    >
                        Jezybell
                    </motion.span>
                </h1>

                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] text-slate-400 uppercase tracking-[0.3em]">Desliza com amor</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-rose-400 to-transparent" />
                </motion.div>
            </section>

            {/* SECÇÃO 2: A Citação */}
            <section className="snap-start h-screen flex flex-col items-center justify-center bg-white/40 backdrop-blur-sm px-10 relative shrink-0">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ margin: "-100px" }} // Garante que a animação comece no momento certo do snap
                    className="max-w-3xl text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-serif leading-relaxed text-slate-700 italic">
                        "A vida deu-me muitas razões para sorrir, mas tu és a minha <span className="underline decoration-rose-300 underline-offset-8 not-italic font-bold">favorita</span>."
                    </h2>
                </motion.div>

                <div className="absolute bottom-10 flex flex-col items-center gap-2">
                    <span className="text-[9px] text-rose-300 uppercase tracking-[0.2em]">Quase lá...</span>
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="text-rose-300 text-xl"
                    >
                        ↓
                    </motion.div>
                </div>
            </section>

            {/* SECÇÃO 3: O PRESENTE MÁGICO */}
            <section className="snap-start h-screen flex flex-col items-center justify-center relative shrink-0">

                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute w-64 h-64 bg-rose-300 rounded-full blur-[70px]"
                />

                <motion.div
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsModalOpen(true)}
                    className="group cursor-pointer relative z-10"
                >
                    <div className="bg-white p-12 md:p-24 rounded-full shadow-xl border border-rose-100 relative overflow-hidden">
                        <span className="text-6xl md:text-8xl relative z-10">🎁</span>
                    </div>
                </motion.div>

                <p className="mt-12 text-rose-400 font-medium tracking-widest uppercase text-xs">
                    Toca para abrir o meu coração
                </p>

                <div className="mt-20 flex gap-12 z-20">
                    <Link href="/fotos" className="group flex flex-col items-center gap-2">
                        <span className="text-2xl">📸</span>
                        <span className="text-sm font-bold text-slate-600 uppercase tracking-widest border-b-2 border-rose-200 pb-1">
                            Memórias
                        </span>
                    </Link>

                    <Link href="/musicas" className="group flex flex-col items-center gap-2">
                        <span className="text-2xl">🎵</span>
                        <span className="text-sm font-bold text-slate-600 uppercase tracking-widest border-b-2 border-rose-200 pb-1">
                            Playlist
                        </span>
                    </Link>
                </div>
            </section>

            <PresentModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </main>
    );
}
