import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink py-10 text-white/40">
      <div className="container-content flex flex-col items-center justify-between gap-3 text-xs font-light sm:flex-row">
        <p className="text-white/70">{site.name}</p>
        <p>{site.positioning} · Built with React, TypeScript &amp; Tailwind.</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
