"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PresentModal from "@/components/PresentModal";
import Link from "next/link";

const FallingRoses = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg style={{ width: 0, height: 0, position: 'absolute' }}>
                <defs>
                    <linearGradient id="rose-petal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff4d6d" />
                        <stop offset="40%" stopColor="#c9184a" />
                        <stop offset="100%" stopColor="#800f2f" />
                    </linearGradient>
                </defs>
            </svg>

            {[...Array(40)].map((_, i) => {
                const size = Math.random() * 20 + 15;
                const duration = Math.random() * 3 + 4;
                const delay = Math.random() * 5;

                return (
                    <motion.div
                        key={i}
                        initial={{ top: "-10%", left: `${Math.random() * 100}%`, opacity: 0, rotate: Math.random() * 360, scale: Math.random() * 0.5 + 0.5 }}
                        animate={{ top: "110%", opacity: [0, 1, 1, 0], rotate: [0, 180, 360, 720], rotateY: [0, 360], x: [0, Math.random() * 150 - 75, 0] }}
                        transition={{ duration: duration, repeat: Infinity, ease: "linear", delay: delay }}
                        style={{ width: size, height: size, filter: i % 5 === 0 ? "blur(1.2px)" : "drop-shadow(1px 2px 3px rgba(0,0,0,0.15))" }}
                        className="absolute"
                    >
                        <svg viewBox="0 0 100 100">
                            <path d="M50,10 C70,10 90,30 90,60 C90,90 60,100 50,100 C40,100 10,90 10,60 C10,30 30,10 50,10" fill="url(#rose-petal-grad)" style={{ transform: 'rotate(-15deg)', transformOrigin: 'center' }} />
                            <path d="M50,15 Q60,50 50,90" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
                        </svg>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isExploding, setIsExploding] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = setTimeout(() => setIsLoaded(true), 400);
        return () => clearTimeout(timer);
    }, []);

    const handleOpenPresent = () => {
        setIsExploding(true);
        // Delay de 800ms para o brilho acontecer antes do modal
        setTimeout(() => {
            setIsModalOpen(true);
            setIsExploding(false);
        }, 800);
    };

    return (
        <main className={`${isLoaded ? "snap-y snap-mandatory" : ""} h-screen overflow-y-scroll scroll-smooth bg-slate-50 no-scrollbar`}>

            {/* BACKGROUND DECORATION */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-rose-200/20 blur-[60px] md:blur-[120px]" />
                <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-pink-200/20 blur-[60px] md:blur-[120px]" />
            </div>

            {/* SECCÃO 1: Hero */}
            <section className="snap-start h-screen flex flex-col items-center justify-center relative px-6 shrink-0">
                <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="uppercase tracking-[0.4em] text-xs text-rose-400 font-semibold mb-6">Will you be my Valentine?</motion.span>
                <h1 className="text-6xl md:text-[8rem] font-serif font-light text-slate-800 text-center leading-none">
                    Para a minha <br />
                    <motion.span initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-rose-500 font-[family-name:var(--font-handwritten)] block mt-2 drop-shadow-[0_2px_10px_rgba(244,63,94,0.1)]">Jezybell</motion.span>
                </h1>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 flex flex-col items-center gap-2">
                    <span className="text-[10px] text-slate-400 uppercase tracking-[0.3em]">Desliza com amor</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-rose-400 to-transparent" />
                </motion.div>
            </section>

            {/* SECÇÃO 2: A Citação + CHUVA DE ROSAS */}
            <section className="snap-start h-screen flex flex-col items-center justify-center bg-white/40 backdrop-blur-sm px-10 relative shrink-0 overflow-hidden">
                <FallingRoses />
                <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.8 }} viewport={{ margin: "-100px", once: true }} className="max-w-3xl text-center z-10">
                    <h2 className="text-3xl md:text-5xl font-serif leading-relaxed text-slate-700 italic">
                        "A vida deu-me muitas razões para sorrir, mas tu és a minha <span className="underline decoration-rose-300 underline-offset-8 not-italic font-bold">favorita</span>."
                    </h2>
                </motion.div>
                <div className="absolute bottom-12 flex flex-col items-center gap-3 z-10">
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 2 }} className="text-[10px] text-rose-400 uppercase tracking-[0.4em] font-medium">Quase lá</motion.span>
                    <div className="relative flex flex-col items-center">
                        <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute -top-1 w-8 h-8 bg-rose-200 rounded-full blur-md" />
                        <motion.div animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} className="text-rose-500 text-2xl font-light">↓</motion.div>
                    </div>
                </div>
            </section>

            {/* SECÇÃO 3: O PRESENTE MÁGICO */}
            <section className="snap-start h-screen flex flex-col items-center justify-center relative shrink-0 overflow-hidden">

                {/* EFEITO DE EXPLOSÃO DE BRILHO AO CLICAR */}
                {isExploding && (
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 5, 15], opacity: [0, 1, 0] }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute z-50 w-40 h-40 bg-white rounded-full blur-[60px]"
                    />
                )}

                {/* Brilho de Fundo (Aura) */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute w-72 h-72 bg-rose-300 rounded-full blur-[80px]"
                />

                <motion.div
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                        if (!isExploding) {
                            setIsExploding(true);
                            setTimeout(() => {
                                setIsModalOpen(true);
                                setIsExploding(false); // Reset para a caixa reaparecer ao fechar
                            }, 800);
                        }
                    }}
                    className="group cursor-pointer relative z-10"
                >
                    {/* O Círculo Branco Original */}
                    <motion.div
                        animate={isExploding ? { scale: [1, 1.2, 0], opacity: [1, 1, 0] } : { scale: 1, opacity: 1 }}
                        className="bg-white p-12 md:p-24 rounded-full shadow-xl border border-rose-100 relative overflow-hidden"
                    >
                        <div className="relative flex flex-col items-center">
                            <motion.span
                                animate={isExploding ? { y: -50, opacity: 0 } : { y: 0, opacity: 1 }}
                                className="text-6xl md:text-8xl relative z-10 select-none"
                            >
                                🎁
                            </motion.span>

                            {/* Estrelas flutuantes */}
                            {!isExploding && (
                                <motion.div
                                    animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
                                    transition={{ repeat: Infinity, duration: 2 }}
                                    className="absolute -top-4 text-rose-400 text-xl"
                                >
                                    ✨
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>

                <motion.p
                    animate={isExploding ? { opacity: 0 } : { opacity: 1 }}
                    className="mt-12 text-rose-400 font-medium tracking-widest uppercase text-xs"
                >
                    Toca para abrir o meu coração
                </motion.p>

                {/* Footer Navigation */}
                <div className={`mt-20 flex gap-12 z-20 transition-opacity duration-500 ${isExploding ? 'opacity-0' : 'opacity-100'}`}>
                    <Link href="/fotos" className="group flex flex-col items-center gap-2">
                        <span className="text-2xl group-hover:scale-110 transition-transform">📸</span>
                        <span className="text-sm font-bold text-slate-600 uppercase tracking-widest border-b-2 border-rose-200 pb-1">
                Memórias
            </span>
                    </Link>

                    <Link href="/musicas" className="group flex flex-col items-center gap-2">
                        <span className="text-2xl group-hover:scale-110 transition-transform">🎵</span>
                        <span className="text-sm font-bold text-slate-600 uppercase tracking-widest border-b-2 border-rose-200 pb-1">
                Playlist
            </span>
                    </Link>
                </div>
            </section>

            <PresentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </main>
    );
}
