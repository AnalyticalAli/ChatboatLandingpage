import { Container } from "@/components/ui/container";

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "API Docs", "Changelog"]
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Press Kit", "Contact"]
  },
  {
    title: "Resources",
    links: ["Documentation", "Help Center", "Community", "Templates", "Status"]
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Security"]
  }
];

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
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
    </div>
  );
}

export function Footer() {
  return (
    <footer id="resources" className="border-t border-line bg-page pt-14 pb-8">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-secondary">
              Turn your documents into intelligent AI chatbots. Build, customize,
              and deploy in minutes.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ink-secondary transition-colors hover:text-ink"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-8 text-center">
          <p className="text-sm text-ink-muted">
            © {new Date().getFullYear()} Logichat. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
