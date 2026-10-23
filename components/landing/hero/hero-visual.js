import Image from "next/image";
import { Compass, ChevronLeft, ChevronRight } from "lucide-react";

function HeroCompactMobile({ slide }) {
  return (
    <div className="md:hidden">
      <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--color-gray-light)]/90 bg-[var(--color-white)]/92 p-3 shadow-[0_14px_35px_rgba(15,23,42,0.08)]">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.22em] text-white"
              style={{ backgroundColor: slide.accent }}
            >
              <Compass size={12} />
              {slide.roleLabel}
            </div>
            <p className="mt-2 text-sm font-black text-[var(--color-black)]">
              {slide.visualTitle}
            </p>
          </div>

          <div className="rounded-full border border-[var(--color-gray-light)] bg-[var(--color-whitesmoke)] px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wide text-[var(--color-gray-dark)]">
            Auto
          </div>
        </div>

        <div className="relative mt-3 h-40 overflow-hidden rounded-[1.25rem] border border-[var(--color-gray-light)]/90">
          <Image
            src={slide.imageSrc}
            alt={slide.imageAlt}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(15,23,42,0.22))]" />
          <div className="absolute bottom-2 left-2 rounded-full border border-white/20 bg-black/20 px-2.5 py-1 text-[9px] font-bold text-white backdrop-blur-sm">
            {slide.imageCaption}
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroDesktopSlider({ slides, activeIndex, activeSlide, onSelectSlide }) {
  const goPrev = () => onSelectSlide(activeIndex - 1);
  const goNext = () => onSelectSlide(activeIndex + 1);

  return (
    <div className="hidden md:block">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--color-gray-light)]/90 bg-[var(--color-white)]/88 p-3 shadow-[0_16px_42px_rgba(15,23,42,0.08)]">
        <div className="mb-2 flex items-center justify-between gap-3 px-1">
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-[0.24em] text-[var(--color-gray-dark)]">
              Visuel dynamique
            </p>
            <p className="mt-1 text-sm font-semibold text-[var(--color-black)]">
              Le cadre change automatiquement selon le type d’utilisateur
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Slide précédent"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-gray-light)] bg-[var(--color-white)] text-[var(--color-black)] transition-colors hover:border-[var(--color-blue-medium)] hover:text-[var(--color-blue-medium)]"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Slide suivant"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-gray-light)] bg-[var(--color-white)] text-[var(--color-black)] transition-colors hover:border-[var(--color-blue-medium)] hover:text-[var(--color-blue-medium)]"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[1.5rem]">
          <div
            className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
            style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
          >
            {slides.map((slide) => (
              <div key={slide.id} className="h-full w-full shrink-0 px-0.5">
                <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--color-gray-light)]/90 bg-[linear-gradient(180deg,#fefefe_0%,#f7fbff_100%)] p-3">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.85),transparent_30%)]" />

                  <div className="relative flex items-center justify-between gap-3">
                    <div>
                      <div
                        className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.22em] text-white"
                        style={{ backgroundColor: slide.accent }}
                      >
                        <Compass size={12} />
                        {slide.roleLabel}
                      </div>
                      <p className="mt-2 text-sm font-black text-[var(--color-black)]">
                        {slide.visualTitle}
                      </p>
                    </div>

                    <div className="rounded-full border border-[var(--color-gray-light)] bg-[var(--color-whitesmoke)] px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-wide text-[var(--color-gray-dark)]">
                      {activeSlide.id === slide.id ? "Actif" : "Auto"}
                    </div>
                  </div>

                  <div className="relative mt-3 h-[250px] overflow-hidden rounded-[1.25rem] border border-[var(--color-gray-light)]/90">
                    <Image
                      src={slide.imageSrc}
                      alt={slide.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(15,23,42,0.18))]" />
                    <div
                      className="absolute bottom-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-bold text-white"
                      style={{ backgroundColor: slide.accent }}
                    >
                      {slide.imageCaption}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between px-1">
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => onSelectSlide(index)}
                  aria-label={`Aller au slide ${slide.roleLabel}`}
                  className={[
                    "h-2.5 rounded-full transition-all duration-500",
                    isActive ? "w-8" : "w-2.5 bg-[var(--color-gray-light)]",
                  ].join(" ")}
                  style={{
                    backgroundColor: isActive ? slide.accent : undefined,
                  }}
                />
              );
            })}
          </div>

          <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--color-gray-dark)]">
            {activeIndex + 1}/{slides.length}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroVisual({
  slides,
  activeIndex,
  activeSlide,
  onSelectSlide,
  className = "",
}) {
  return (
    <div className={className}>
      <HeroCompactMobile slide={activeSlide} />
      <HeroDesktopSlider
        slides={slides}
        activeIndex={activeIndex}
        activeSlide={activeSlide}
        onSelectSlide={onSelectSlide}
      />
    </div>
  );
}