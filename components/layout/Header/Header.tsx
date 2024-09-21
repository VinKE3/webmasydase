"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { dataHeader } from "./Header.data";
import {
  FaChevronDown,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const toggleSubMenu = (menuId: number) => {
    setOpenMenu(openMenu === menuId ? null : menuId);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 shadow-2xl transition-colors duration-300 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <nav className="max-w-full mx-auto flex items-center justify-between p-6 px-32">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="/assets/logo2.png"
              alt="Logo MasyDase"
              className="w-32 h-auto"
            />
          </Link>
        </div>

        {/* Navbar */}
        <div className="flex space-x-8">
          {dataHeader.map((menuItem) => (
            <div key={menuItem.id} className="relative">
              {menuItem.subElements ? (
                <>
                  <button
                    onClick={() => toggleSubMenu(menuItem.id)}
                    className="text-lg font-semibold text-white hover:text-celeste flex items-center"
                  >
                    {/* Icono */}

                    {menuItem.name}
                    <FaChevronDown className="ml-1" />
                  </button>

                  <AnimatePresence>
                    {openMenu === menuItem.id && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={menuVariants}
                        className="absolute left-0 mt-2 w-40 bg-white shadow-lg "
                      >
                        {menuItem.subElements.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.idLink}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={menuItem.idLink}
                  className="text-lg font-bold text-white hover:text-celeste flex items-center"
                >
                  {/* Icono */}

                  {menuItem.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/*Redes Sociales*/}
        <div className="flex gap-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
