"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../assets/logo.jpg";
import { navLinks } from "../data/navLinks";
import SocialIcon from "./SocialIcon";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openNavbar = () => setOpen(true);
  const closeNavbar = () => setOpen(false);

  return (
    <header>
      <nav className="container mx-auto flex items-center justify-between border border-slate-900 px-4 py-3">
        {/* Logo */}
        <Link className="flex items-center gap-1" href="/">
          <Image
            className="rounded-full"
            src={logo}
            alt="logo"
            width={45}
            height={45}
          />{" "}
          <h2 className="text-lg font-bold">Rohan</h2>
        </Link>

        {/* Menu */}
        <ul
          className={`flex flex-col items-center gap-4 transition-all duration-300 max-md:absolute max-md:top-0 max-md:z-10 max-md:h-full max-md:w-full max-md:bg-black/50 max-md:backdrop-blur md:flex-row md:gap-10 ${open ? "max-md:left-0" : "max-md:-left-full"}`}
        >
          {navLinks.map((link) => {
            return (
              <li className="flex" key={link.id}>
                <Link className="font-medium" href={link.path}>
                  {link.title}
                </Link>
              </li>
            );
          })}
          <button
            onClick={closeNavbar}
            className="aspect-square rounded-md bg-gray-800 p-2 font-medium text-white transition hover:bg-black md:hidden"
          >
            ✕
          </button>
        </ul>

        {/* Hamburger Menu*/}
        <button onClick={openNavbar} className="md:hidden">
          <Menu />
        </button>

        {/* Social Icon */}
        <SocialIcon />
      </nav>
    </header>
  );
};

export default Navbar;
