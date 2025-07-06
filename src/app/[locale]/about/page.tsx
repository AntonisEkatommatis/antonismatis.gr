"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  const t = useTranslations('about');

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('title')}
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/profile.png"
                alt="Antonis Matis"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </motion.div>

          <motion.div 
            className="md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="whitespace-pre-line">
                {t('description')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}