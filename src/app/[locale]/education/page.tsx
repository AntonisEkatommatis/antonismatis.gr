"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaSchool, FaCalendarAlt, FaAward, FaCode } from 'react-icons/fa';
import Image from 'next/image';

export default function Education() {
  const t = useTranslations('education');

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen py-8 md:py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-8 md:mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">{t('title')}</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-2">{t('subtitle')}</p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 transform md:-translate-x-1/2 h-full w-1 bg-primary/30 z-0"></div>

            {/* University */}
            <motion.div 
              className="relative mb-16 md:mb-24"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right pl-12 md:pl-0">
                  {/* Timeline dot for mobile */}
                  <div className="absolute left-4 top-6 md:hidden w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-900 z-10"></div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg border-l-4 border-primary">
                    <div className="flex items-center justify-start md:justify-end mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-primary mr-3">{t('university.name')}</h3>
                      <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                        <FaUniversity className="text-primary text-xl md:text-2xl" />
                      </div>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex items-center justify-start md:justify-end">
                        <p className="text-lg md:text-xl font-semibold">{t('university.degree')}</p>
                        <FaGraduationCap className="ml-2 text-gray-500" />
                      </div>
                      <div className="flex items-center justify-start md:justify-end">
                        <p className="text-base md:text-lg font-medium text-primary">{t('university.grade')}</p>
                        <FaAward className="ml-2 text-primary" />
                      </div>
                      <div className="flex items-center justify-start md:justify-end">
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{t('university.period')}</p>
                        <FaCalendarAlt className="ml-2 text-gray-500" />
                      </div>
                      <div className="flex items-center justify-start md:justify-end">
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 italic">{t('university.specialization')}</p>
                        <FaCode className="ml-2 text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 relative pl-12 md:pl-12">
                  {/* Timeline dot for desktop */}
                  <div className="absolute left-4 md:left-0 top-6 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-900 hidden md:block"></div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 md:p-6 rounded-xl">
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {t('university.description')}
                    </p>
                    <div className="mt-4 md:mt-6 flex justify-center">
                      <Image 
                        src="/images/unipi-logo.png" 
                        alt="University of Piraeus" 
                        width={150} 
                        height={75}
                        className="rounded-lg w-32 md:w-auto"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* High School */}
            <motion.div 
              className="relative mt-16 md:mt-24"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 order-2 md:order-1 pl-12 md:pl-0">
                  {/* Timeline dot for mobile */}
                  <div className="absolute left-4 top-0 md:hidden w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-900 z-10"></div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 md:p-6 rounded-xl mt-6">
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                      {t('highschool.description')}
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-12 relative order-1 md:order-2 md:text-left pl-12 md:pl-12">
                  {/* Timeline dot for desktop */}
                  <div className="absolute left-4 md:left-0 top-0 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-900 hidden md:block"></div>
                  
                  <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg border-l-4 md:border-l-4 border-primary mt-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/10 p-2 md:p-3 rounded-full">
                        <FaSchool className="text-primary text-xl md:text-2xl" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-primary ml-3">{t('highschool.name')}</h3>
                    </div>
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex items-center">
                        <FaGraduationCap className="mr-2 text-gray-500" />
                        <p className="text-lg md:text-xl font-semibold">{t('highschool.degree')}</p>
                      </div>
                      <div className="flex items-center">
                        <FaAward className="mr-2 text-primary" />
                        <p className="text-base md:text-lg font-medium text-primary">{t('highschool.grade')}</p>
                      </div>
                      <div className="flex items-center">
                        <FaCalendarAlt className="mr-2 text-gray-500" />
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">{t('highschool.period')}</p>
                      </div>
                      <div className="flex items-center">
                        <FaCode className="mr-2 text-gray-500" />
                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 italic">{t('highschool.specialization')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 