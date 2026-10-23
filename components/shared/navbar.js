"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// Importation des icônes Lucide adéquates
import { Download, LogIn, UserPlus, Menu, X } from "lucide-react";

export default function Navbar({
  brandName = "EventsBullsEyes",
  logoSrc = "/logo.png",
  logoAlt = "Logo",
  navItems = [],
  loginHref = "/login",
  signupHref = "/register",
  installHref = "#",
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full",
        "border-b border-[var(--color-gray-medium)]/20",
        "bg-[var(--color-black)] text-[var(--color-white)]",
        className,
      ].join(" ")}
    >
      <nav className="mx-auto flex max-w-7xl items-center gap-2 px-1.5 py-3 sm:px-2 lg:px-4">
        
        {/* Zone Brand : Non cliquable avec animation zoom sur le logo */}
        <div className="flex items-center gap-3 shrink-0 cursor-default">
          <div className="relative h-10 w-10 overflow-hidden transition-transform duration-300 hover:scale-110">
            <Image
              src={logoSrc}
              alt={logoAlt}
              fill
              className="object-fill object-cover"
              priority
            />
          </div>
          <span className="text-lg font-extrabold tracking-tight text-[var(--color-white)] sm:text-xl">
            {brandName}
          </span>
        </div>

        {/* Navigation Desktop : Animation de soulignement au survol */}
        <div className="hidden flex-1 items-center justify-center md:flex">
          <ul className="flex flex-wrap items-center justify-center gap-2 lg:gap-4">
            {navItems.map((item) => (
              <li key={`${item.label}-${item.href}`}>
                <Link
                  href={item.href}
                  className="group relative px-2 py-1 text-[12px] font-extrabold uppercase tracking-wide text-[var(--color-white)]/90 transition-colors hover:text-[var(--color-white)]"
                >
                  {item.label}
                  {/* Barre de soulignement animée */}
                  <span className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[var(--color-blue-light)] transition-transform duration-300 group-hover:scale-x-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Zone Droite */}
        <div className="ml-auto flex items-center gap-3">
          
          {/* Bouton de téléchargement */}
          <Link
            href={installHref}
            aria-label="Installer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-white)]/70 bg-[var(--color-black)] text-[var(--color-white)] transition-all duration-200 hover:bg-[var(--color-white)] hover:text-[var(--color-black)]"
          >
            <Download size={20} strokeWidth={2.5} />
          </Link>

          {/* Distinction visuelle (Séparateur) - visible uniquement sur desktop */}
          <div className="hidden h-6 w-px bg-[var(--color-white)]/20 md:block mx-1" />

          {/* Boutons Auth : Desktop */}
          <div className="hidden items-center gap-2 md:flex">
            <Link
              href={loginHref}
              className="inline-flex h-10 items-center gap-2 rounded-md border border-[var(--color-blue-light)] px-4 text-[12px] font-extrabold uppercase text-[var(--color-white)] transition-all duration-200 hover:bg-[var(--color-blue-dark)]"
            >
              <LogIn size={16} />
              Se connecter
            </Link>

            <Link
              href={signupHref}
              className="inline-flex h-10 items-center gap-2 rounded-md bg-[var(--color-blue-light)] px-4 text-[12px] font-extrabold uppercase text-[var(--color-black)] transition-all duration-200 hover:bg-[var(--color-blue-medium)] hover:text-[var(--color-white)]"
            >
              <UserPlus size={16} />
              S'inscrire
            </Link>
          </div>

          {/* Burger Menu : Mobile */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--color-white)]/20 bg-[var(--color-black)] text-[var(--color-white)] md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Menu Déroulant Mobile */}
      <div
        id="mobile-menu"
        className={[
          "md:hidden overflow-hidden border-t border-[var(--color-gray-medium)]/20 bg-[var(--color-black)] transition-all duration-300 ease-out",
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div className="mx-auto flex flex-col gap-4 px-4 py-5">
          {/* Options de navigation : Hauteur réduite (py-2) */}
          <ul className="grid gap-2">
            {navItems.map((item) => (
              <li key={`${item.label}-${item.href}`}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-md border border-[var(--color-white)]/10 bg-[var(--color-white)]/5 px-3 py-2 text-[12px] font-extrabold uppercase tracking-wide text-[var(--color-white)] transition-all hover:bg-[var(--color-blue-dark)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Boutons Auth Mobile : Hauteur réduite (h-9) */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Link
              href={loginHref}
              onClick={closeMenu}
              className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-[var(--color-blue-light)] text-[12px] font-extrabold uppercase text-[var(--color-white)] hover:bg-[var(--color-blue-dark)]"
            >
              <LogIn size={14} />
              Se connecter
            </Link>
            <Link
              href={signupHref}
              onClick={closeMenu}
              className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-[var(--color-blue-light)] text-[12px] font-extrabold uppercase text-[var(--color-black)] hover:bg-[var(--color-blue-medium)] hover:text-[var(--color-white)]"
            >
              <UserPlus size={14} />
              S'inscrire
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}