"use client";

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa';

export default function Contact() {
  const t = useTranslations('contact');
  const tEducation = useTranslations('education');
  const locale = useLocale();

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

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                      <FaEnvelope className="text-primary" size={36} />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{t('email')}</h2>
                    <a 
                      href="mailto:antonismatis@gmail.com" 
                      className="text-lg text-primary hover:underline"
                    >
                      antonismatis@gmail.com
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                      <FaGithub className="text-primary" size={36} />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">GitHub</h2>
                    <a 
                      href="https://github.com/AntonisEkatommatis" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-lg text-primary hover:underline flex items-center"
                    >
                      @AntonisEkatommatis
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                      <FaLinkedin className="text-primary" size={36} />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">LinkedIn</h2>
                    <a 
                      href="https://www.linkedin.com/in/antonis-ekatommatis-b9b103333/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-lg text-primary hover:underline flex items-center"
                    >
                      {locale === 'el' ? 'Αντώνης Εκατομμάτης' : 'Antonis Ekatommatis'}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                      <FaMapMarkerAlt className="text-primary" size={36} />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{t('location')}</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {locale === 'el' ? 'Χίος, Ελλάδα' : 'Chios, Greece'}
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 my-8"></div>

                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                      <FaUniversity className="text-primary" size={36} />
                    </div>
                  </div>
                  <div className="w-full">
                    <h2 className="text-2xl font-semibold mb-4">{t('education')}</h2>
                    
                    <div className="space-y-6">
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-primary">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold text-primary">
                            {tEducation('university.degree')} (7,61)
                          </h3>
                          <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {tEducation('university.period')}
                          </span>
                        </div>
                        <p className="text-lg font-semibold mt-1">
                          {tEducation('university.name')}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mt-1 italic">
                          {tEducation('university.specialization')}
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border-l-4 border-primary">
                        <div className="flex justify-between items-start">
                          <h3 className="text-xl font-bold text-primary">
                            {tEducation('highschool.degree')} (19,8)
                          </h3>
                          <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {tEducation('highschool.period')}
                          </span>
                        </div>
                        <p className="text-lg font-semibold mt-1">
                          {tEducation('highschool.name')}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mt-1 italic">
                          {tEducation('highschool.specialization')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 