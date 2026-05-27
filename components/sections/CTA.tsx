"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { fadeUp } from "@/lib/motion";

export function CTA() {
  return (
    <section className="section-padding bg-page">
      <Container>
        <motion.div
          className="relative overflow-hidden rounded-card border border-line bg-white shadow-card-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-gradient-to-bl from-primary-muted/30 to-transparent"
            aria-hidden
          />

          <div className="relative flex flex-col gap-8 p-8 md:p-12 lg:flex-row lg:items-center lg:gap-12 lg:p-14">
            <div className="flex-1 space-y-5 lg:max-w-md">
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-ink md:text-3xl lg:text-[32px]">
                Build powerful AI chatbots for your website in minutes.
              </h2>
              <p className="text-base text-ink-secondary">
                Join thousands of businesses using Logichat to automate
                customer support and boost engagement.
              </p>
              <Button size="lg">Get Started</Button>
            </div>

            <div className="relative flex-1 lg:-mr-6">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/resources/cta-banner-new.png"
                  alt="Logichat dashboard"
                  width={600}
                  height={400}
                  className="h-auto w-full object-cover object-left-top"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
