"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-4 mx-auto bg-green-100/40 border border-green-400 text-white p-3 px-6 rounded-full w-[70vw] lg:w-[40vw] z-20"
        role="banner"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}
      >
        <div className="flex justify-between items-center relative">
          <h1 className="font-bold text-xl">
            <Link
              href="/"
              className="text-green-600"
              title="Clicketpaf Homepage"
            >
              Clicketpaf
            </Link>
          </h1>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:block"
            aria-label="Desktop navigation"
            role="navigation"
            itemScope={true}
            itemType="https://schema.org/SiteNavigationElement"
          >
            <ul className="flex gap-6 text-green-600">
              <li itemProp="name">
                <Link
                  href="/blog"
                  itemProp="url"
                  className="group relative font-semibold"
                >
                  Blog
                  <div className="absolute top-[20px] w-0 h-[3px] bg-green-500/50 rounded-full transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
              <li itemProp="name">
                <Link
                  href="/about"
                  itemProp="url"
                  className="group relative font-semibold"
                >
                  A propos
                  <div className="absolute top-[20px] w-0 h-[3px] bg-green-500/50 rounded-full transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden focus:outline-none z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Open main menu"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6 stroke-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation - Sliding from top */}
      <nav
        id="mobile-menu"
        className={`fixed top-0 left-0 w-full h-screen bg-white backdrop-blur-sm transform transition-transform duration-300 ease-in-out lg:hidden z-10 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        aria-label="Mobile navigation"
        role="navigation"
        itemScope={true}
        itemType="https://schema.org/SiteNavigationElement"
      >
        <ul className="flex flex-col gap-6 p-8 pt-28 text-green-600 font-semibold">
          <li itemProp="name">
            <Link
              href="/blog"
              itemProp="url"
              className="block text-xl hover:text-green-700"
              aria-current="page"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li itemProp="name">
            <Link
              href="/about"
              itemProp="url"
              className="block text-xl hover:text-green-700"
            >
              About
            </Link>
          </li>
          <li itemProp="name">
            <Link
              href="/services"
              itemProp="url"
              className="block text-xl hover:text-green-700"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>
          <li itemProp="name">
            <Link
              href="/contact"
              itemProp="url"
              className="block text-xl hover:text-green-700"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-0"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
