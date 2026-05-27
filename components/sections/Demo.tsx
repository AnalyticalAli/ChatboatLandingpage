"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/container";
import { fadeUp } from "@/lib/motion";

export function Demo() {
  return (
    <section className="section-padding bg-page">
      <Container>
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-bold tracking-tight text-ink md:text-4xl">
            See Our Chatbot Builder In Action
          </h2>
        </motion.div>

        <motion.div
          className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-card border border-line bg-white shadow-card-lg lg:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <div className="aspect-video w-full bg-gradient-to-br from-gray-50 to-gray-100 p-6 md:p-8">
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white shadow-sm">
              <div className="flex items-center gap-2 border-b border-line px-4 py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-ink-muted">
                  Logichat Builder
                </span>
              </div>

              <div className="flex flex-1">
                <div className="hidden w-36 shrink-0 border-r border-line bg-gray-50 p-3 sm:block">
                  <div className="space-y-2">
                    <div className="h-6 rounded-md bg-primary/10" />
                    <div className="h-4 rounded-md bg-gray-200" />
                    <div className="h-4 rounded-md bg-gray-200" />
                    <div className="h-4 w-3/4 rounded-md bg-gray-200" />
                  </div>
                </div>

                <div className="relative flex flex-1 flex-col items-center justify-center p-6">
                  <div className="absolute inset-4 rounded-lg border border-dashed border-line" />
                  <div className="relative z-10 grid w-full max-w-md grid-cols-2 gap-3 opacity-60">
                    <div className="h-16 rounded-lg bg-primary-soft" />
                    <div className="h-16 rounded-lg bg-gray-100" />
                    <div className="col-span-2 h-20 rounded-lg bg-gray-50" />
                  </div>

                  <button
                    type="button"
                    className="absolute left-1/2 top-1/2 z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-hero transition-transform hover:scale-105"
                    aria-label="Play demo video"
                  >
                    <Play className="ml-1 h-7 w-7 fill-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
