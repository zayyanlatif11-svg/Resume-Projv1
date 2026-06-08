import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";

const links = [
  { label: "Work", id: "projects" },
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
    <header className="sticky top-0 z-50 border-b border-surface-line/70 bg-surface-subtle/80 backdrop-blur-md">
      <nav className="container-content flex h-16 items-center justify-between">
        <Link
          to="/"
          className="text-sm font-medium tracking-tight text-ink"
          onClick={() => window.scrollTo({ top: 0 })}
        >
          {site.name}
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => goToSection(l.id)}
              className="text-sm font-light text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </button>
          ))}
          <a
            href={site.resumePath}
            download
            className="text-sm font-light text-ink-soft transition-colors hover:text-ink"
          >
            Résumé
          </a>
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
        <div className="border-t border-surface-line bg-surface-subtle md:hidden">
          <div className="container-content flex flex-col py-2">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => goToSection(l.id)}
                className="px-1 py-3 text-left text-sm font-light text-ink-soft hover:text-ink"
              >
                {l.label}
              </button>
            ))}
            <a
              href={site.resumePath}
              download
              className="px-1 py-3 text-left text-sm font-light text-ink-soft hover:text-ink"
            >
              Résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
