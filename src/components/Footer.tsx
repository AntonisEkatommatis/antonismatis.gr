"use client";

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Antonis Ekatommatis</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Software Engineer
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}`} className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  {t('home')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/skills`} className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  {t('skills')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/certifications`} className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  {t('certifications')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/experience`} className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  {t('experience')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/education`} className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  {t('education')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact')}</h3>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/AntonisEkatommatis" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/antonis-ekatommatis-b9b103333/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:antonismatis@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                <FaEnvelope size={24} />
              </a>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Email: antonismatis@gmail.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Antonis Ekatommatis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 