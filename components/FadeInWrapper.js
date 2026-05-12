import { motion } from "motion/react";

export default function FadeInWrapper({ children, className, amount }) {
    return (
        <motion.div
        className={className}
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true, amount: amount }}
        >
        {children}
        </motion.div>
    );
}
