import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Projects", id: "projects" },
  { label: "Case Studies", id: "case-studies" },
  { label: "Process", id: "process" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const goToSection = (id: string) => {
    setOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-surface-line/80 bg-white/80 backdrop-blur-md">
      <nav className="container-content flex h-16 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-semibold tracking-tight text-ink"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-sm font-bold text-white">
            ZL
          </span>
          <span className="hidden sm:inline">Zayyan Latif</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => goToSection(l.id)}
              className="rounded-md px-3 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-surface-subtle hover:text-ink"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => goToSection("contact")}
            className="ml-2 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            Get in touch
          </button>
        </div>

        <button
          className="rounded-md p-2 text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-surface-line bg-white md:hidden">
          <div className="container-content flex flex-col py-2">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => goToSection(l.id)}
                className="rounded-md px-3 py-3 text-left text-sm font-medium text-ink-muted hover:bg-surface-subtle hover:text-ink"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
