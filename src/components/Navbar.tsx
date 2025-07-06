"use client";

import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { FaBars, FaTimes, FaGlobeAmericas, FaChevronDown, FaHome, FaUser, FaCode, FaCertificate, FaBriefcase, FaEnvelope, FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);

  const changeLanguage = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathnameWithoutLocale = pathname.replace(`/${locale}`, '');
    router.push(`/${newLocale}${pathnameWithoutLocale}`);
    setIsLangMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  // Close language menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [langMenuRef]);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const languages = [
    { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' },
    { code: 'en', name: 'English', flag: '🇬🇧' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const menuItems = [
    { path: `/${locale}`, label: 'home', icon: <FaHome /> },
    { path: `/${locale}/about`, label: 'about', icon: <FaUser /> },
    { path: `/${locale}/skills`, label: 'skills', icon: <FaCode /> },
    { path: `/${locale}/certifications`, label: 'certifications', icon: <FaCertificate /> },
    { path: `/${locale}/experience`, label: 'experience', icon: <FaBriefcase /> },
    { path: `/${locale}/education`, label: 'education', icon: <FaGraduationCap /> },
    { path: `/${locale}/contact`, label: 'contact', icon: <FaEnvelope /> },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-white dark:bg-gray-900 py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex justify-between items-center">
          <Link href={`/${locale}`} className="text-lg md:text-xl font-bold text-primary flex items-center shrink-0">
            <div className="bg-primary text-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center mr-2 relative group">
              <FaCode className="text-lg md:text-xl absolute transition-opacity duration-300 group-hover:opacity-0" />
              <FaLaptopCode className="text-lg md:text-xl absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <span className="hidden sm:inline truncate max-w-[120px] md:max-w-none">
              {locale === 'el' ? 'Αντώνης Εκατομμάτης' : 'Antonis Ekatommatis'}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center flex-nowrap justify-end space-x-0 lg:space-x-0.5 ml-2">
            {menuItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={`px-1 lg:px-2 py-2 rounded-md flex items-center transition-colors relative group whitespace-nowrap ${
                  isActive(item.path) 
                    ? 'text-primary font-medium' 
                    : 'hover:text-primary'
                }`}
              >
                <span className="mr-0.5 lg:mr-1">{item.icon}</span>
                <span className="text-[10px] lg:text-xs">{t(item.label)}</span>
                {isActive(item.path) && (
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    layoutId="navbar-indicator"
                  />
                )}
                <motion.div 
                  className="absolute inset-0 bg-primary/5 rounded-md -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative ml-0.5 lg:ml-1" ref={langMenuRef}>
              <motion.button 
                onClick={toggleLangMenu}
                className="flex items-center space-x-0.5 px-1 lg:px-1.5 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGlobeAmericas className="text-primary text-[10px] lg:text-xs" />
                <span className="mx-0.5">{currentLanguage.flag}</span>
                <span className="font-medium text-[10px]">{currentLanguage.code.toUpperCase()}</span>
                <motion.div
                  animate={{ rotate: isLangMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="hidden lg:block"
                >
                  <FaChevronDown className="text-[8px]" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div 
                    className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="py-1">
                      {languages.map((lang) => (
                        <motion.button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full text-left px-3 py-2 flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                            locale === lang.code ? 'bg-gray-100 dark:bg-gray-700 text-primary' : ''
                          }`}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-base">{lang.flag}</span>
                          <span className="text-sm">{lang.name}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-md ${
                        isActive(item.path) 
                          ? 'bg-primary text-white' 
                          : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{item.icon}</span>
                      <span className="text-base">{t(item.label)}</span>
                    </Link>
                  </motion.div>
                ))}

                {/* Language Switcher for Mobile */}
                <motion.div 
                  className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: menuItems.length * 0.1 }}
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 px-4">
                    {currentLanguage.flag} {currentLanguage.name}
                  </p>
                  <div className="flex flex-col space-y-2">
                    {languages
                      .filter(lang => lang.code !== locale)
                      .map((lang) => (
                        <motion.button
                          key={lang.code}
                          onClick={() => {
                            changeLanguage(lang.code);
                            setIsMenuOpen(false);
                          }}
                          className="flex items-center space-x-2 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="text-lg">{lang.flag}</span>
                          <span>Switch to {lang.name}</span>
                        </motion.button>
                      ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
} 