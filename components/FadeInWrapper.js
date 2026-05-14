import { motion } from "motion/react";

export default function FadeInWrapper({ children, className, amount, delay, duration }) {
    return (
        <motion.div
        className={className}
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ delay: delay, duration: duration, ease: "easeInOut" }}
        viewport={{ once: true, amount: amount }}
        >
        {children}
        </motion.div>
    );
}
