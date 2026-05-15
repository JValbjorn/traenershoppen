"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  {
    title: "Fodbold",
    slug: "fodbold",
    sections: [
      {
        title: "Fodboldtøj",
        slug: "fodboldtoej",
        categories: [
          { title: "Trøjer", slug: "troejer" },
          { title: "Shorts", slug: "shorts" },
          { title: "Bukser", slug: "bukser" },
          { title: "Jakker", slug: "jakker" },
        ],
      },
      {
        title: "Fodboldudstyr",
        slug: "fodboldudstyr",
        categories: [
          { title: "Bolde", slug: "bolde" },
          { title: "Boldsække", slug: "boldsaekke" },
          { title: "Kegler", slug: "kegler" },
          { title: "Overtræksveste", slug: "overtraeksveste" },
          { title: "Strømpetape", slug: "stroempetape" },
        ],
      },
      {
        title: "Sportspleje",
        slug: "sportspleje",
        categories: [
          { title: "Isposer", slug: "isposer" },
          { title: "Sportstape", slug: "sportstape" },
          { title: "Varmesalve", slug: "varmesalve" },
        ],
      },
    ],
  },
  {
    title: "Håndbold",
    slug: "haandbold",
    sections: [
      {
        title: "Håndboldtøj",
        slug: "haandboldtoej",
        categories: [
          { title: "Trøjer", slug: "troejer" },
          { title: "Shorts", slug: "shorts" },
          { title: "Bukser", slug: "bukser" },
        ],
      },
      {
        title: "Håndboldudstyr",
        slug: "haandboludstyr",
        categories: [
          { title: "Bolde", slug: "bolde" },
          { title: "Kegler", slug: "kegler" },
          { title: "Overtræksveste", slug: "overtraeksveste" },
          { title: "Harpiks", slug: "harpiks" },
          { title: "Harpiksfjernere", slug: "harpiksfjernere" },
        ],
      },
      {
        title: "Sportspleje",
        slug: "sportspleje",
        categories: [
          { title: "Isposer", slug: "isposer" },
          { title: "Sportstape", slug: "sportstape" },
          { title: "Varmesalve", slug: "varmesalve" },
        ],
      },
    ],
  },
  {
    title: "Tøj",
    slug: "toej",
    sections: [
      {
        title: "Overdele",
        slug: "overdele",
        categories: [
          { title: "Trøjer", slug: "troejer" },
          { title: "Jakker", slug: "jakker" },
          { title: "Overtræksveste", slug: "overtraeksveste" },
        ],
      },
      {
        title: "underdele",
        slug: "underdele",
        categories: [
          { title: "Shorts", slug: "shorts" },
          { title: "Bukser", slug: "bukser" },
        ],
      },
      {
        title: "Sportstasker",
        slug: "sportstasker",
        categories: [
          { title: "Boldtnet", slug: "boldnet" },
          { title: "Holdtasker", slug: "holdtasker" },
        ],
      },
    ],
  },
  {
    title: "Øvelses inspiration",
    slug: "oevelser",
    sections: [
      {
        title: "Sportsgren",
        slug: "sportsgren",
        categories: [
          { title: "Fodbold", slug: "fodbold" },
          { title: "Håndbold", slug: "haandbold" },
        ],
      },
    ],
  },
];

export default function MenuItems() {
  const [activeItem, setActiveItem] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSections, setOpenSections] = useState({});
  const [headerHeight, setHeaderHeight] = useState(0);
  const [mounted, setMounted] = useState(false);
  const closeTimer = useRef(null);

  const toggleSection = (itemTitle, sectionTitle) => {
    const key = `${itemTitle}-${sectionTitle}`;
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  useEffect(() => {
    setMounted(true);
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
              mobileOpen ? "translate-y-0.4 rotate-45" : "-translate-y-1"
            }`}
          />
          <span
            className={`block h-0.5 w-6 transform bg-white transition duration-200 ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 transform bg-white transition duration-200 ${
              mobileOpen ? "-translate-y-0.4 -rotate-45" : "translate-y-1"
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
                <Link href={`/browsing/${item.slug}`}className="relative z-10">{item.title}</Link>
              </button>

              <div
                className={`fixed left-0 right-0 z-10 bg-dark-green border-none shadow-2xl shadow-slate-950/20 transition-all duration-200 ${
                  isOpen
                    ? "opacity-100 pointer-events-auto translate-y-0"
                    : "opacity-0 pointer-events-none -translate-y-2"
                }}`}
                style={mounted ? { top: `${headerHeight}px` } : {}}
              >
                <div className="mx-auto max-w-7xl px-6 py-8 flex align-middle justify-center">
                  {item.sections ? (
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                      {item.sections.map((section) => (
                        <div key={section.title}>
                          <Link 
                          href={`/browsing/${item.slug}/${section.slug}`}
                          className="text-sm font-semibold uppercase tracking-[0.2em] text-white bg-dark-green mb-4">
                            {section.title}
                          </Link>
                          <div className="space-y-2">
                            {section.categories.map((category) => (
                              <Link
                                key={category.title}
                                href={`/browsing/${item.slug}/${section.slug}/${category.slug}`}
                                className="block px-3 py-2 transition hover:bg-light-green"
                              >
                                <p className="font-semibold text-white">
                                  {category.title}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {item.categories?.map((category) => (
                        <Link
                          key={category.title}
                          href={`/browsing/${item.slug}/${category.slug}`}
                          className="block px-3 py-3 transition hover:bg-light-green"
                        >
                          <p className="font-semibold">{category.title}</p>
                        </Link>
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
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
        style={
          mounted
            ? {
                top: `${headerHeight}px`,
                height: `calc(100vh - ${headerHeight}px)`,
              }
            : {}
        }
      >
        <div className="mt-6 space-y-8">
          {navItems.map((item) => (
            <div
              key={item.title}
              className="space-y-4 border-b border-white/10 pb-6"
            >
              <p className="text-lg font-semibold text-white">{item.title}</p>
              {item.sections ? (
                <div className="space-y-4">
                  {item.sections.map((section) => {
                    const sectionKey = `${item.title}-${section.title}`;
                    const isOpenSection = openSections[sectionKey];

                    return (
                      <div key={section.title} className="space-y-2">
                        <button
                          type="button"
                          onClick={() =>
                            toggleSection(item.title, section.title)
                          }
                          className="flex w-full items-center justify-between text-left text-sm uppercase tracking-[0.2em] text-white/70 transition hover:text-white"
                        >
                          <span>{section.title}</span>
                          <span className="text-xl">
                            {isOpenSection ? "−" : "+"}
                          </span>
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-200 ${
                            isOpenSection
                              ? "max-h-1000px opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="space-y-2 pl-2 pt-2">
                            {section.categories.map((category) => (
                              <a
                                key={category.title}
                                href={category.href}
                                onClick={closeMobileMenu}
                                className="block rounded-lg px-3 py-2 text-white transition hover:bg-light-green"
                              >
                                {category.title}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
