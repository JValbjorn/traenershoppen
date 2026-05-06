"use client";

import { useRef, useState, useEffect } from "react";

const navItems = [
  {
    title: "Fodbold",
    sections: [
      {
        title: "Fodboldtøj",
        categories: [
          { title: "Trøjer", href: "#troejer" },
          { title: "Shorts", href: "#shorts" },
          { title: "Bukser", href: "#bukser" },
          { title: "Jakker", href: "#jakker" },
        ],
      },
      {
        title: "Fodboldudstyr",
        categories: [
          { title: "Kegler", href: "#kegler" },
          { title: "Overtræksveste", href: "#overtraeksveste" },
          { title: "Strømpetape", href: "#stroempe-tape" },
          { title: "Boldsække", href: "#boldsaekke" },
        ],
      },
      {
        title: "Sportspleje",
        categories: [
          { title: "Isposer", href: "#isposer" },
          { title: "Sportstape", href: "#sportstape" },
          { title: "Varmesalve", href: "#varmesalve" },
        ],
      },
    ],
  },
  {
    title: "Håndbold",
    sections: [
      {
        title: "Håndboldtøj",
        categories: [
          { title: "Trøjer", href: "#troejer" },
          { title: "Shorts", href: "#shorts" },
          { title: "Bukser", href: "#bukser" },
        ],
      },
      {
        title: "Håndboldudstyr",
        categories: [
          { title: "Kegler", href: "#kegler" },
          { title: "Overtræksveste", href: "#overtraeksveste" },
          { title: "Harpiks", href: "#harpiks" },
          { title: "Harpiksfjernere", href: "#harpiksfjernere" },
        ],
      },
      {
        title: "Sportspleje",
        categories: [
          { title: "Isposer", href: "#isposer" },
          { title: "Sportstape", href: "#sportstape" },
          { title: "Varmesalve", href: "#varmesalve" },
        ],
      },
    ],
  },
  {
    title: "Tøj",
    sections: [
      {
        title: "Overdele",
        categories: [
          { title: "Trøjer", href: "#troejer" },
          { title: "Jakker", href: "#jakker" },
          { title: "Overtræksveste", href: "#overtraeksveste" },
        ],
      },
      {
        title: "underdele",
        categories: [
          { title: "Shorts", href: "#shorts" },
          { title: "Bukser", href: "#bukser" },
        ],
      },
      {
        title: "Sportstasker",
        categories: [
          { title: "Boldtnet", href: "#boldtnet" },
          { title: "Holdtasker", href: "#holdtasker" },
        ],
      },
    ],
  },
  {
    title: "Øvelses inspiration",
    sections: [
      {
        title: "Sportsgren",
        categories: [
          { title: "Fodbold", href: "#fodbold-oevelser" },
          { title: "Håndbold", href: "#haandbold-oevelser" },
        ],
      },
      
    ],
  },
];

export default function MenuItems() {
  const [activeItem, setActiveItem] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(80);
  const closeTimer = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const openItem = (title) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    setActiveItem(title);
  };

  const closeItem = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    closeTimer.current = setTimeout(() => setActiveItem(null), 200);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <div className="flex w-full items-center justify-end gap-4 md:justify-center">
      <div className="flex items-center gap-4 md:hidden">
        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Luk menu" : "Åbn menu"}
          className="flex h-10 w-10 flex-col items-center justify-center  bg-dark-green/90 p-2 text-white transition"
        >
          <span
            className={`block h-0.5 w-6 transform bg-white transition duration-200 ${
              mobileOpen ? "translate-y-1.5 rotate-45" : "-translate-y-1"
            }`}
          />
          <span
            className={`block h-0.5 w-6 transform bg-white transition duration-200 ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 transform bg-white transition duration-200 ${
              mobileOpen ? "-translate-y-1.5 -rotate-45" : "translate-y-1"
            }`}
          />
        </button>
      </div>

      <nav className="hidden w-full items-center justify-center gap-4 md:flex">
        {navItems.map((item) => {
          const isOpen = activeItem === item.title;

          return (
            <div
              key={item.title}
              onMouseEnter={() => openItem(item.title)}
              onMouseLeave={closeItem}
            >
              <button
                type="button"
                className="relative text-white py-2 px-4 transition before:absolute before:inset-0 before:border-2 before:border-light-green before:opacity-0 before:transition-all before:duration-200 before:transform before:skew-x-[-10deg] hover:before:opacity-100 focus:before:opacity-100 focus:outline-none"
              >
                <span className="relative z-10">{item.title}</span>
              </button>

              <div
                className={`fixed left-0 right-0 z-10 bg-dark-green border-none shadow-2xl shadow-slate-950/20 transition-all duration-200 ${
                  isOpen
                    ? "opacity-100 pointer-events-auto translate-y-0"
                    : "opacity-0 pointer-events-none -translate-y-2"
                }}`}
                style={{ top: `${headerHeight}px` }}
              >
                <div className="mx-auto max-w-7xl px-6 py-8 flex align-middle justify-center">
                  {item.sections ? (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {item.sections.map((section) => (
                        <div key={section.title}>
                          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white bg-dark-green mb-4">
                            {section.title}
                          </p>
                          <div className="space-y-2">
                            {section.categories.map((category) => (
                              <a
                                key={category.title}
                                href={category.href}
                                className="block px-3 py-2 transition hover:bg-light-green"
                              >
                                <p className="font-semibold text-white">
                                  {category.title}
                                </p>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {item.categories?.map((category) => (
                        <a
                          key={category.title}
                          href={category.href}
                          className="block px-3 py-3 transition hover:bg-light-green"
                        >
                          <p className="font-semibold">{category.title}</p>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </nav>

      <div
        className={`fixed inset-x-0 z-40 overflow-y-auto bg-dark-green px-6 py-6 transition-transform duration-200 md:hidden ${
          mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={{ top: `${headerHeight}px`, height: `calc(100vh - ${headerHeight}px)` }}
      >
       

        <div className="mt-6 space-y-8">
          {navItems.map((item) => (
            <div key={item.title} className="space-y-4 border-b border-white/10 pb-6">
              <p className="text-lg font-semibold text-white">{item.title}</p>
              {item.sections ? (
                <div className="space-y-4">
                  {item.sections.map((section) => (
                    <div key={section.title} className="space-y-2">
                      <p className="text-sm uppercase tracking-[0.2em] text-white/70">{section.title}</p>
                      <div className="space-y-2 pl-2">
                        {section.categories.map((category) => (
                          <a
                            key={category.title}
                            href={category.href}
                            onClick={closeMobileMenu}
                            className="block px-3 py-2 text-white transition hover:bg-light-green"
                          >
                            {category.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-2 pl-2">
                  {item.categories?.map((category) => (
                    <a
                      key={category.title}
                      href={category.href}
                      onClick={closeMobileMenu}
                      className="block px-3 py-2 text-white transition hover:bg-light-green"
                    >
                      {category.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
