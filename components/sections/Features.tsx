"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionBadge } from "@/components/ui/section-badge";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Multi-Format Training",
    description:
      "Train your chatbot on PDFs, Word documents, websites, and more. Support for multiple file formats.",
    icon: "/resources/Multiformat.svg"
  },
  {
    title: "Full Customization",
    description:
      "Customize colors, fonts, avatars, and conversation style to match your brand identity perfectly.",
    icon: "/resources/Customization.svg"
  },
  {
    title: "WhatsApp Integration",
    description:
      "Connect your chatbot to WhatsApp Business API and reach customers on their preferred platform.",
    icon: "/resources/Whatsapp.svg"
  },
  {
    title: "Deep Analytics",
    description:
      "Track conversations, user satisfaction, popular questions, and performance metrics in real-time.",
    icon: "/resources/Analytics.svg"
  },
  {
    title: "API & Integrations",
    description:
      "RESTful API and webhooks to integrate with your CRM, helpdesk, and other business tools seamlessly.",
    icon: "/resources/API.svg"
  },
  {
    title: "Enterprise Security",
    description:
      "Bank-level encryption, GDPR compliance, SOC 2 certified, and role-based access control.",
    icon: "/resources/Security.svg"
  },
  {
    title: "Multilingual Support",
    description:
      "Support 50+ languages with automatic translation and culturally-aware responses.",
    icon: "/resources/Mutlilingual.svg"
  },
  {
    title: "Live Chat Handoff",
    description:
      "Seamlessly transfer complex conversations to human agents when needed with full context.",
    icon: "/resources/live-handoff.svg"
  },
  {
    title: "Human-like Conversations",
    description:
      "Advanced NLP creates natural, context-aware responses that feel genuinely human.",
    icon: "/resources/human-like.svg"
  }
];

export function Features() {
  return (
    <section id="features" className="section-padding bg-page">
      <Container>
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <SectionBadge>Features</SectionBadge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl"
          >
            Everything You Need to Build Smarter Support
          </motion.h2>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              variants={fadeUp}
              custom={index}
              className={cn("card-surface card-hover p-6")}
            >
              <div className="mb-5 flex h-[52px] w-[52px] items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={feature.icon}
                  alt=""
                  width={52}
                  height={52}
                  className="h-[52px] w-[52px] object-contain"
                  aria-hidden
                />
              </div>
              <h3 className="text-base font-semibold text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
