"use client";

import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/section-badge";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const stats = [
  {
    label: "Chatbots Deployed",
    value: "500K+",
    description:
      "Automating conversations for businesses across industries.",
    highlight: false,
    height: "h-[278px]",
    stagger: "lg:translate-y-0"
  },
  {
    label: "Customer Queries Resolved",
    value: "2M+",
    description: "Instant responses delivered with accuracy and speed.",
    highlight: false,
    height: "h-[296px]",
    stagger: "lg:translate-y-10"
  },
  {
    label: "Automation Accuracy",
    value: "95%",
    description:
      "AI-powered responses trained to understand real user intent.",
    highlight: true,
    height: "h-[278px]",
    stagger: "lg:translate-y-0"
  },
  {
    label: "Integrations Available",
    value: "120+",
    description:
      "Connect seamlessly with your favorite tools and platforms.",
    highlight: false,
    height: "h-[296px]",
    stagger: "lg:translate-y-10"
  }
];

function StatCard({
  label,
  value,
  description,
  highlight,
  height
}: (typeof stats)[number]) {
  return (
    <article
      className={cn(
        "relative z-10 flex w-[282px] shrink-0 flex-col justify-between rounded-2xl p-4 shadow-card",
        height,
        highlight ? "bg-[#126DFB]" : "bg-white"
      )}
    >
      <div className="flex items-center gap-2">
        <span
          className={cn(
            "h-2 w-2 shrink-0 rounded-full",
            highlight ? "bg-white" : "bg-[#126DFB]"
          )}
        />
        <span
          className={cn(
            "text-base font-medium leading-[21px]",
            highlight ? "text-white" : "text-[#B2B2B2]"
          )}
        >
          {label}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div
          className={cn(
            "border-b px-2 py-2",
            highlight ? "border-white/25" : "border-[#EEEEEE]"
          )}
        >
          <span
            className={cn(
              "text-[32px] font-semibold leading-[1.2]",
              highlight ? "text-white" : "text-[#303030]"
            )}
          >
            {value}
          </span>
        </div>

        <div className="flex items-start justify-between gap-[30px] px-0">
          <p
            className={cn(
              "max-w-[193px] text-sm font-normal leading-[18px]",
              highlight ? "text-white" : "text-[#B2B2B2]"
            )}
          >
            {description}
          </p>
          <Lightbulb
            className={cn(
              "h-6 w-6 shrink-0 stroke-[2px]",
              highlight ? "text-white" : "text-[#CBCBCB]"
            )}
          />
        </div>
      </div>
    </article>
  );
}

export function Stats() {
  return (
    <section className="relative min-h-[640px] overflow-hidden bg-page py-28 md:min-h-[720px] md:py-36 lg:min-h-[780px] lg:py-40">
      {/* Animated grid background */}
      <div className="pointer-events-none absolute inset-0">
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <SectionBadge>Our Impact</SectionBadge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl"
          >
            Revolutionizing Customer Support With Intelligent Chatbots
          </motion.h2>
        </motion.div>

        <motion.div
          className="mt-16 md:mt-20 lg:mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          <div className="mx-auto flex w-fit max-w-full flex-wrap items-end justify-center gap-6 xl:flex-nowrap xl:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                custom={index}
                className={cn("shrink-0", stat.stagger)}
              >
                <StatCard {...stat} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
