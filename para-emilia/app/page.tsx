"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import PresentModal from "@/components/PresentModal";
import Link from "next/link";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <main className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth bg-slate-50 no-scrollbar">

            {/* BACKGROUND DECORATION */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-rose-200/40 blur-[120px]" />
                <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-pink-200/40 blur-[120px]" />
            </div>

            {/* SECCÃO 1: Hero Impactante */}
            <section className="snap-start h-screen flex flex-col items-center justify-center relative px-6">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="uppercase tracking-[0.4em] text-xs text-rose-400 font-semibold mb-6"
                >
                    Will you be my Valentine?
                </motion.span>

                <h1 className="text-6xl md:text-[8rem] font-serif font-light text-slate-800 text-center leading-none">
                    Para a minha <br />
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-rose-500 font-[family-name:var(--font-handwritten)] block mt-2 drop-shadow-[0_2px_10px_rgba(244,63,94,0.15)]"
                    >
                        Jezybell
                    </motion.span>
                </h1>

                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] text-slate-400 uppercase tracking-[0.3em]">Desliza com amor</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-rose-400 to-transparent" />
                </motion.div>
            </section>

            {/* SECÇÃO 2: A Citação com Indicador de Continuação */}
            <section className="snap-start h-screen flex flex-col items-center justify-center bg-white/40 backdrop-blur-sm px-10 relative">
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-serif leading-relaxed text-slate-700 italic">
                        "A vida deu-me muitas razões para sorrir, mas tu és a minha <span className="underline decoration-rose-300 underline-offset-8 not-italic font-bold">favorita</span>."
                    </h2>
                </motion.div>

                {/* NOVO: Indicador para o próximo slide */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="absolute bottom-10 flex flex-col items-center gap-2"
                >
                    <span className="text-[9px] text-rose-300 uppercase tracking-[0.2em]">Quase lá...</span>
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="text-rose-300 text-xl"
                    >
                        ↓
                    </motion.div>
                </motion.div>
            </section>

            {/* SECÇÃO 3: O PRESENTE MÁGICO */}
            <section className="snap-start h-screen flex flex-col items-center justify-center relative">

                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute w-80 h-80 bg-rose-300 rounded-full blur-[100px]"
                />

                <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0] }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsModalOpen(true)}
                    className="group cursor-pointer relative z-10"
                >
                    <div className="bg-white p-16 md:p-24 rounded-full shadow-[0_20px_70px_rgba(225,29,72,0.15)] border border-rose-100 relative overflow-hidden">
                        <motion.div
                            animate={{ x: [-200, 300] }}
                            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                            className="absolute inset-0 w-16 h-full bg-rose-50/50 skew-x-12"
                        />
                        <span className="text-7xl md:text-8xl relative z-10">🎁</span>
                    </div>
                </motion.div>

                <motion.p
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="mt-12 text-rose-400 font-medium tracking-widest uppercase text-xs"
                >
                    Toca para abrir o meu coração
                </motion.p>

                {/* NAVEGAÇÃO FINAL */}
                <div className="mt-20 flex gap-16 z-20">
                    <Link href="/fotos" className="group flex flex-col items-center gap-2">
                        <motion.span
                            animate={{ y: [0, -3, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="text-2xl"
                        >📸</motion.span>
                        <span className="text-sm font-bold text-slate-600 group-hover:text-rose-500 transition-colors uppercase tracking-widest border-b-2 border-rose-200 group-hover:border-rose-500 pb-1">
                            Memórias
                        </span>
                    </Link>

                    <Link href="/musicas" className="group flex flex-col items-center gap-2">
                        <motion.span
                            animate={{ y: [0, -3, 0] }}
                            transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                            className="text-2xl"
                        >🎵</motion.span>
                        <span className="text-sm font-bold text-slate-600 group-hover:text-rose-500 transition-colors uppercase tracking-widest border-b-2 border-rose-200 group-hover:border-rose-500 pb-1">
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
