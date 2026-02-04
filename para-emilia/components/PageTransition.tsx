"use client";
import { motion } from "framer-motion";

export default function PageTransition({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // Removemos o 'exit' e o 'y: 20' para evitar que o navegador
            // tenha de recalcular a posição de elementos pesados (Spotify) ao sair.
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}