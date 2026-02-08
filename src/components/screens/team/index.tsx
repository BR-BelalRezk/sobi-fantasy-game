"use client";

import { AnimatePresence, motion } from "motion/react";
import { useGamePhases } from "@/components/contexts/game-phases";
import TeamWelcome from "./welcome";

type Props = {
    teamId: "a" | "b";
};

export default function Team({ teamId }: Props) {
    const { phase } = useGamePhases();

    return (
        <div className="w-full h-screen bg-black">
            <AnimatePresence mode="wait">
                {phase === "welcome" && <TeamWelcome key="team-welcome" teamId={teamId} />}
                {phase === "beforeSpeedQuestion" && (
                    <motion.div
                        key="beforeSpeedQuestion"
                        className="w-full h-screen bg-black flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <p className="text-white text-2xl">Waiting for speed question...</p>
                    </motion.div>
                )}
                {phase === "startSpeedQuestion" && (
                    <motion.div
                        key="startSpeedQuestion"
                        className="w-full h-screen bg-black flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        <p className="text-white text-2xl">Speed Question Round</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
