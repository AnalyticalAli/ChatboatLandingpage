"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/container";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Logichat transformed our customer support. We reduced response time by 80% and our team can focus on complex issues.",
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    initials: "SJ",
    color: "bg-blue-100 text-blue-700"
  },
  {
    quote:
      "The WhatsApp integration was a game-changer. Our customers love getting instant answers on their favorite platform.",
    name: "Michael Chen",
    role: "Operations Director, RetailCo",
    initials: "MC",
    color: "bg-emerald-100 text-emerald-700"
  },
  {
    quote:
      "Setup took less than an hour. The AI understood our product docs immediately and started helping customers right away.",
    name: "Emily Rodriguez",
    role: "Head of Support, SaaSify",
    initials: "ER",
    color: "bg-violet-100 text-violet-700"
  }
];

function TestimonialCard({
  quote,
  name,
  role,
  initials,
  color
}: (typeof testimonials)[number]) {
  return (
    <article className="card-surface card-hover flex min-w-[340px] max-w-[340px] flex-col justify-between p-6">
      <p className="text-sm leading-relaxed text-ink-secondary">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <div
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold",
            color
          )}
        >
          {initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-ink">{name}</div>
          <div className="text-xs text-ink-muted">{role}</div>
        </div>
      </div>
    </article>
  );
}

function AutoScrollTestimonialsLeft({
  items
}: {
  items: (typeof testimonials)[number][];
}) {
  const reducedMotion = useReducedMotion();
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const measure = () => setDistance(el.scrollWidth);
    measure();

    const ro = new ResizeObserver(() => measure());
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex gap-6 will-change-transform"
        initial={{ x: 0 }}
        animate={
          reducedMotion || distance <= 0 ? { x: 0 } : { x: -distance }
        }
        transition={
          reducedMotion || distance <= 0
            ? undefined
            : { duration: 28, ease: "linear", repeat: Infinity }
        }
      >
        <div ref={rowRef} className="flex gap-6">
          {items.map((t) => (
            <TestimonialCard key={`a-${t.name}`} {...t} />
          ))}
        </div>
        <div className="flex gap-6">
          {items.map((t) => (
            <TestimonialCard key={`b-${t.name}`} {...t} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="section-padding bg-page">
      <Container>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          <motion.div
            className="shrink-0 lg:max-w-[280px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
          >
            <Quote
              className="h-16 w-16 text-line md:h-20 md:w-20"
              strokeWidth={1}
              fill="currentColor"
            />
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
              What our client&apos;s say
            </h2>
          </motion.div>

          {/* Mobile/tablet: static grid */}
          <motion.div
            className="grid flex-1 gap-6 sm:grid-cols-2 lg:hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {testimonials.map((t, index) => (
              <motion.article
                key={t.name}
                variants={fadeUp}
                custom={index}
                className="col-span-1"
              >
                <TestimonialCard {...t} />
              </motion.article>
            ))}
          </motion.div>

          {/* Desktop: auto scroll left */}
          <div className="hidden flex-1 lg:block">
            <AutoScrollTestimonialsLeft items={testimonials} />
          </div>
        </div>
      </Container>
    </section>
  );
}
