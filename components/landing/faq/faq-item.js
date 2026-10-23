"use client";

import { ChevronDown } from "lucide-react";

export default function FaqItem({ item, isOpen, onToggle }) {
  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/6 shadow-[0_12px_28px_rgba(0,0,0,0.16)] backdrop-blur-sm">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors duration-200 hover:bg-white/8 sm:px-5"
      >
        <span className="text-sm font-black tracking-tight text-white sm:text-[15px]">
          {item.question}
        </span>

        <span
          className={[
            "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white/80 transition-transform duration-300",
            isOpen ? "rotate-180" : "rotate-0",
          ].join(" ")}
        >
          <ChevronDown size={16} />
        </span>
      </button>

      <div
        className={[
          "grid transition-all duration-300 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 pt-0 sm:px-5">
            <p className="text-sm leading-6 text-white/76">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}