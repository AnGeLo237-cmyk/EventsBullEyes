"use client";

import Link from "next/link";
import { footerMeta, footerNavigationLinks, footerSupportLinks, footerSocialLinks, footerNewsletter } from "./footer-data";

// Définition des icônes SVG en interne pour plus de performance et de contrôle
const SVGIcons = {
  facebook: (className) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  ),
  twitter: (className) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  ),
  instagram: (className) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  ),
  youtube: (className) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
  ),
  send: (className) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
  ),
  mail: (className) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
  ),
  arrowUp: (className) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>
  )
};

export default function Footer({ className = "" }) {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Logique d'inscription ici
  };

  return (
    <footer className={`relative overflow-hidden bg-[var(--color-blue-dark)] py-12 text-white ${className}`}>
      {/* Motifs de fond stylisés */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Section Logo & Marque */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center">
                <img 
                  src="/images/logo.png" 
                  alt="Logo" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tighter uppercase italic text-white">
                  {footerMeta.brandName}
                </h2>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
                  {footerMeta.slogan}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
              Découvrez une nouvelle dimension de l'événementiel avec notre plateforme d'évènements cartographiés. Explorez, créez et vibrez.
            </p>
            
            {/* Réseaux Sociaux */}
            <div className="mt-8 flex gap-3">
              {footerSocialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-all hover:bg-white hover:text-[var(--color-blue-dark)] hover:-translate-y-1"
                >
                  {SVGIcons[item.icon] ? SVGIcons[item.icon]("w-5 h-5") : null}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Rapide */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-black uppercase tracking-widest text-white/40">Explorer</h3>
            <ul className="mt-6 space-y-3">
              {footerNavigationLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-medium text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-black uppercase tracking-widest text-white/40">Aide & Légal</h3>
            <ul className="mt-6 space-y-3">
              {footerSupportLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-medium text-white/70 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-white/40">{footerNewsletter.title}</h3>
            <p className="mt-6 text-sm text-white/70">{footerNewsletter.description}</p>
            
            <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col gap-3">
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors">
                  {SVGIcons.mail("w-5 h-5")}
                </div>
                <input
                  type="email"
                  placeholder={footerNewsletter.placeholder}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-4 text-sm outline-none transition-all focus:bg-white/10 focus:ring-2 focus:ring-white/20"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-xs font-black uppercase tracking-widest text-[var(--color-blue-dark)] transition-all hover:bg-blue-50 active:scale-95 shadow-lg shadow-black/20"
              >
                {SVGIcons.send("w-4 h-4")}
                {footerNewsletter.buttonLabel}
              </button>
            </form>
          </div>
        </div>

        {/* Section Bas de Footer (Copyright & Back-to-top) */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-[11px] font-bold uppercase tracking-widest text-white/40">
            {footerMeta.copyright}
          </p>
          
          <Link
            href="#hero"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 py-2 pl-4 pr-2 transition-all hover:bg-white hover:text-[var(--color-blue-dark)]"
          >
            <span className="text-[10px] font-black uppercase tracking-tighter">Haut de page</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-[var(--color-blue-dark)] group-hover:text-white transition-colors">
              {SVGIcons.arrowUp("w-4 h-4")}
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}