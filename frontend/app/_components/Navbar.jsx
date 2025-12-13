"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import { navLinks } from "../data/navLinks";
import SocialIcon from "./SocialIcon";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);



  const pathName = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full border-b border-gray-400/40 dark:border-gray-700 ${scrolled ? "bg-white/80 backdrop-blur-md dark:bg-gray-900/80" : "bg-transparent"} transition-colors`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link className="flex items-center gap-2" href="/">
          <Image
            className="rounded-full"
            src={logo}
            alt="logo"
            width={40}
            height={40}
          />
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            Rohan
          </h2>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.path}
                className={`px-3 py-1 font-medium transition-colors ${
                  pathName === link.path
                    ? "rounded bg-violet-500 font-bold text-white"
                    : "text-gray-800 hover:text-violet-500 dark:text-gray-200 hover:dark:text-violet-500"
                }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className="hidden lg:block">
          <SocialIcon theming={true} />
        </div>

        {/* Mobile Icons (Theme + Hamburger) */}
        <div className="flex items-center gap-3 lg:hidden">
          <SocialIcon theming={true} />
          <button onClick={() => setOpen(true)} className="cursor-pointer">
            <Menu className="text-gray-800 dark:text-gray-200" />
          </button>
        </div>

        {/* Mobile Overlay */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          />
        )}

        {/* Mobile Drawer (LEFT → RIGHT slide) */}
        <div
          className={`fixed top-0 left-0 z-50 h-full w-3/4 max-w-xs bg-white shadow-lg transition-transform duration-300 ease-in-out lg:hidden dark:bg-gray-900 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Drawer Header */}
          <div className="mb-6 flex items-center justify-between border-b p-6">
            <Link className="flex items-center gap-2" href="/">
              <Image
                className="rounded-full"
                src={logo}
                alt="logo"
                width={40}
                height={40}
              />
              <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">
                Rohan
              </h2>
            </Link>

            <button
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded p-2 text-gray-800 transition-colors hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="-mt-12 bg-white px-4 dark:bg-gray-900">
            <ul className="flex min-h-screen flex-col gap-6 pt-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.path}
                    onClick={() => setOpen(false)}
                    className={`block rounded px-3 py-2 font-medium ${
                      pathName === link.path
                        ? "bg-violet-500 text-white"
                        : "text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
