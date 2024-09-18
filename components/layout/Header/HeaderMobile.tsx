"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { dataHeader } from "./Header.data";

// Define the types for the menu items and subelements
interface SubElement {
  idLink: string;
  name: string;
}

interface HeaderItem {
  id: number;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  subElements?: SubElement[];
}

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubMenu = (menu: number | null) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white dark:bg-black shadow-md lg:hidden">
      <nav className="flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img
              src="/assets/logo2.png"
              alt="Logo MasyDase"
              className="w-24 h-auto"
            />
          </Link>
        </div>

        {/* Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="text-gray-900 dark:text-white focus:outline-none z-50 relative"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 80 }}
            className="fixed inset-0 bg-white dark:bg-black z-40 p-6"
          >
            <div className="space-y-6">
              {dataHeader.map((item: HeaderItem) => (
                <div key={item.id}>
                  {/* Main link */}
                  <div>
                    <button
                      onClick={() => {
                        if (item.subElements) {
                          toggleSubMenu(item.id);
                        } else {
                          setIsMenuOpen(false); // Cierra el menú si no tiene subelementos
                        }
                      }}
                      className="text-xl font-bold text-gray-900 dark:text-white flex items-center justify-between w-full"
                    >
                      <span className="flex items-center">
                        <item.icon className="mr-3" />
                        {item.name}
                      </span>
                      {item.subElements && (
                        <FaChevronDown
                          className={
                            openSubMenu === item.id ? "rotate-180" : ""
                          }
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {openSubMenu === item.id && item.subElements && (
                        <motion.div
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={menuVariants}
                          className="mt-2 space-y-2 pl-8"
                        >
                          {item.subElements.map((subItem) => (
                            <Link
                              key={subItem.idLink}
                              href={subItem.idLink}
                              className="block text-lg text-gray-700 dark:text-white"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
