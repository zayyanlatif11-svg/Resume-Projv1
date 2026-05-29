import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-surface-line bg-white py-8">
      <div className="container-content flex flex-col items-center justify-between gap-3 text-sm text-ink-muted sm:flex-row">
        <p className="font-medium text-ink">{site.name}</p>
        <p className="text-xs">
          {site.positioning} · Built with React, TypeScript & Tailwind.
        </p>
        <p className="text-xs">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
