"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { fadeUp, staggerContainer, floatDashboard } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-hero-gradient pb-0 pt-12 md:pt-16"
    >
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#FFFFFF"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-black/15" />

      <Container className="relative z-10">
        <motion.div
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1
            variants={fadeUp}
            className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-[56px]"
          >
            Turn Your Documents Into Intelligent Chatbots
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-5 max-w-2xl text-base text-white/85 md:text-lg"
          >
            Create, customize, and deploy AI chatbots trained on your own data
            in minutes. No coding required.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button variant="secondary" size="lg">
              Start Free
            </Button>
            <Button variant="outline" size="lg">
              Book Demo
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-12 max-w-5xl md:mt-16"
          initial="hidden"
          animate="visible"
          variants={floatDashboard}
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="overflow-hidden rounded-card bg-white p-2 shadow-hero md:p-3"
          >
            <Image
              src="/resources/hero-dashboard.png"
              alt="Logichat dashboard preview"
              width={1200}
              height={700}
              className="h-auto w-full rounded-2xl"
              priority
            />
          </motion.div>
        </motion.div>
      </Container>

      <div className="h-16 bg-gradient-to-b from-transparent to-page md:h-24" />
    </section>
  );
}
