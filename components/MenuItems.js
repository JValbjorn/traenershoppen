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
  },
];

export default function MenuItems() {
  const [activeItem, setActiveItem] = useState(null);
  const [headerHeight, setHeaderHeight] = useState(80);
  const closeTimer = useRef(null);

  useEffect(() => {
    const header = document.querySelector("header");
    if (header) {
      setHeaderHeight(header.offsetHeight);
    }
  }, []);

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

  return (
    <nav className="relative flex w-full items-center justify-center gap-4">
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
              className="relative text-white py-2 px-4 transition before:absolute before:inset-0 before:sm before:border-2 before:border-light-green before:opacity-0 before:transition-all before:duration-200 before:transform before:skew-x-[-10deg] hover:before:opacity-100 focus:before:opacity-100 focus:outline-none"
            >
              <span className="relative z-10">{item.title}</span>
            </button>

            <div
              className={`fixed left-0 right-0 z-20 bg-dark-green border-none shadow-2xl shadow-slate-950/20 transition-all duration-200 ${
                isOpen
                  ? "opacity-100 pointer-events-auto translate-y-0"
                  : "opacity-0 pointer-events-none -translate-y-2"
              }`}
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
                        className="block rounded-2xl px-3 py-3 transition hover:bg-light-green"
                      >
                        <p className="font-semibold">
                          {category.title}
                        </p>
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
  );
}
