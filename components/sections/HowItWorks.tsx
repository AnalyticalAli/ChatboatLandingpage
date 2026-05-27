"use client";

import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/section-badge";
import { fadeUp, staggerContainer } from "@/lib/motion";

const steps = [
  {
    label: "Step One",
    title: "Upload Document",
    description:
      "Upload PDFs, Word files, URLs, or paste raw text. Supports 50+ file formats.",
    image: "/resources/step-1.webp"
  },
  {
    label: "Step Two",
    title: "Auto-Training",
    description:
      "Our AI reads and indexes your content, building a knowledge base in seconds.",
    image: "/resources/step-2.webp"
  },
  {
    label: "Step Three",
    title: "Customize",
    description:
      "Set your bot's name, avatar, colors, and personality to match your brand.",
    image: "/resources/step-3.webp"
  },
  {
    label: "Step Four",
    title: "Embed & Go Live",
    description:
      "Copy one line of code to embed on your website. Or share a direct chat link.",
    image: "/resources/step-4.webp"
  }
];

function StepArrow() {
  return (
    <div
      className="hidden h-[38px] w-[43px] shrink-0 items-center justify-center rounded-lg bg-[#E7F0FF] xl:flex"
      aria-hidden
    >
      <ChevronRight className="h-4 w-5 text-[#126DFB]" strokeWidth={2} />
    </div>
  );
}

function StepCard({
  label,
  title,
  description,
  image
}: (typeof steps)[number]) {
  return (
    <article className="relative flex h-[348px] w-[282px] shrink-0 flex-col overflow-hidden rounded-[20px] bg-white shadow-card">
      <div className="z-10 flex flex-col gap-[3px] px-4 pt-4">
        <span className="text-base font-medium leading-[21px] text-[#126DFB]">
          {label}
        </span>
        <h3 className="text-xl font-semibold leading-[1.2] text-black">
          {title}
        </h3>
      </div>

      <div className="relative z-0 flex min-h-0 flex-1 items-center justify-center overflow-hidden px-2">
        <Image
          src={image}
          alt=""
          width={260}
          height={200}
          className="max-h-[200px] w-full max-w-[250px] object-contain object-center"
          aria-hidden
        />
      </div>

      <p className="z-10 flex min-h-[57px] items-center justify-center px-4 pb-4 text-center text-xs font-semibold leading-[15px] text-[#4F4F4F]">
        {description}
      </p>
    </article>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-page">
      <Container>
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <SectionBadge>How It Works</SectionBadge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl"
          >
            From Document to Chatbot in 4 Steps
          </motion.h2>
        </motion.div>

        <motion.div
          className="mt-12 lg:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {/* Figma Group 7: 1197 × 348 — centered as one row */}
          <div className="mx-auto flex w-fit max-w-full flex-wrap items-center justify-center gap-6 sm:gap-8 xl:flex-nowrap xl:gap-[23px]">
            {steps.map((step, index) => (
              <Fragment key={step.label}>
                <motion.div variants={fadeUp} custom={index} className="shrink-0">
                  <StepCard {...step} />
                </motion.div>
                {index < steps.length - 1 && <StepArrow />}
              </Fragment>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
