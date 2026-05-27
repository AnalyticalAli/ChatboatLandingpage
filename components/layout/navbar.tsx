"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "Solutions" },
  { href: "#pricing", label: "Pricing" },
  { href: "#resources", label: "Resources" }
];

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path
            d="M9 2L15 6V12L9 16L3 12V6L9 2Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="9" r="2" fill="white" />
        </svg>
      </div>
      <span className="text-lg font-semibold text-ink">Logichat</span>
    </a>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between md:h-[72px]">
        <Logo />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-secondary transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="md">Get Started</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink-secondary md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-line bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-secondary hover:bg-page hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="mt-3 w-full" size="md">
                Get Started
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
