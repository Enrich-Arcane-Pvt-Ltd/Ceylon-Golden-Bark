"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, ReactNode } from "react";

type VariantType = "fadeLeft" | "fadeRight" | "fadeUp" | "fade";

interface MotionWrapperProps {
    children: ReactNode;
    variant?: VariantType;
}

export default function MotionWrapper({ children, variant = "fadeLeft" }: MotionWrapperProps) {
    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const variants: Record<VariantType, Variants> = {
        fadeLeft: {
            hidden: { opacity: 0, x: -50 },
            show: { opacity: 1, x: 0 }
        },
        fadeRight: {
            hidden: { opacity: 0, x: 50 },
            show: { opacity: 1, x: 0 }
        },
        fadeUp: {
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0 }
        },
        fade: {
            hidden: { opacity: 0 },
            show: { opacity: 1 }
        }
    };

    useEffect(() => {
        if (inView) controls.start("show");
    }, [inView]);

    return (
        <motion.div
            ref={ref}
            variants={variants[variant]}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
