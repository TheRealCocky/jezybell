"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function PresentModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
    return (
        <AnimatePresence>
            {isOpen && (
                /* O clique nesta div de fundo fecha o modal automaticamente */
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm cursor-pointer"
                >
                    {/* O clique no conteúdo (papel) NÃO fecha o modal, para ela poder ler e fazer scroll à vontade */}
                    <motion.div
                        initial={{ opacity: 0, y: 50, rotateX: 20 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-[480px] perspective-1000 cursor-default"
                    >

                        {/* ÍCONE DE FECHAR ADICIONAL (Para clareza total) */}
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }} // Aparece após 2 segundos para ela ler primeiro
                            onClick={onClose}
                            className="absolute -top-12 right-0 text-white/50 hover:text-white flex items-center gap-2 text-xs tracking-widest uppercase transition-colors"
                        >
                            Fechar ✕
                        </motion.button>

                        {/* O PAPEL (PERGAMINHO) */}
                        <div
                            className="relative shadow-2xl overflow-hidden"
                            style={{
                                backgroundColor: "#e8d1a7",
                                backgroundImage: `
                  radial-gradient(circle, transparent 20%, rgba(101, 67, 33, 0.5) 100%),
                  url('https://www.transparenttextures.com/patterns/paper-fibers.png')
                `,
                                clipPath: "polygon(2% 1%, 98% 0%, 100% 4%, 99% 28%, 100% 45%, 98% 72%, 100% 94%, 96% 100%, 50% 98%, 3% 100%, 0% 96%, 1% 75%, 0% 48%, 2% 24%, 0% 6%)",
                                boxShadow: "inset 0 0 100px rgba(0,0,0,0.3)"
                            }}
                        >
                            <div className="max-h-[80vh] overflow-y-auto no-scrollbar p-8 md:p-12">
                                <div className="font-[family-name:var(--font-handwritten)] text-[#3e2723] leading-tight antialiased">
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2d1b18]">Meu Amor,</h2>

                                    <div className="text-[1.3rem] md:text-[1.6rem] space-y-6">
                                        <p>Se você se sentir só, me chame para te dar um abraço bem apertado.</p>
                                        <p>Se você se sentir triste, me chame para lembrá-la dos momentos únicos que passamos juntos.</p>
                                        <p>Quando vejo as tuas fotos, olho nos teus olhos e da pra ver que tens na tua alma um lindo ser.</p>
                                        <p>Tenho tanto medo de te perder, miux, possas eu te amo minha mulher.</p>
                                        <p>Se você precisar de carinho, me chame para que possa ganhar colo e um cafuné.</p>
                                        <p>Se você precisar de ajuda, me chame. Não sei se posso trazer a solução, mas posso ajudá-la a encontrá-la.</p>
                                        <p>Se você precisar de amor, me chame para te dar beijos bem caprichados.</p>
                                        <p className="pt-2 font-semibold italic">E se você precisar de mim, para o que quer que seja, me chame.</p>

                                        <p className="font-bold text-[1.4rem] md:text-[1.7rem] py-4 border-y border-[#3e2723]/10 text-rose-900/80">
                                            Direi EU TE AMO quantas vezes você precisar ouvir.
                                        </p>

                                        <p>Estarei com você em todos os momentos, sejam eles felizes ou não.</p>
                                    </div>

                                    <div className="mt-12 flex flex-col items-end pr-4 italic">
                                        <p className="text-2xl font-bold">Com amor,</p>
                                        <p className="text-3xl font-bold mt-1 text-rose-900">Euclides</p>
                                    </div>

                                    {/* BOTÃO VOLTAR REFORÇADO (Estilo botão de convite) */}
                                    <div className="mt-16 flex justify-center pb-6">
                                        <button
                                            onClick={onClose}
                                            className="px-8 py-2 bg-[#3e2723]/5 hover:bg-[#3e2723]/10 rounded-full text-[#3e2723] text-sm tracking-widest uppercase transition-all duration-500 font-sans italic border border-[#3e2723]/20 shadow-sm"
                                        >
                                            Voltar para o nosso mundo
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}