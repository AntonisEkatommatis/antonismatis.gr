"use client";

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { 
  FaArrowRight, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaJava, 
  FaDatabase, 
  FaGraduationCap, 
  FaCode, 
  FaLaptopCode, 
  FaServer, 
  FaUniversity,
  FaGitAlt
} from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

export default function Home() {
  const t = useTranslations('home');
  const tEducation = useTranslations('education');
  const tSkills = useTranslations('skills');
  const locale = useLocale();
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Κύριες δεξιότητες για προβολή στην αρχική σελίδα
  const topSkills = [
    { name: tSkills('python'), icon: <FaPython size={32} className="text-yellow-500" />, level: 7, category: 'languages' },
    { name: tSkills('git'), icon: <FaGitAlt size={32} className="text-red-500" />, level: 7, category: 'tools' },
    { name: tSkills('nodejs'), icon: <FaNodeJs size={32} className="text-green-500" />, level: 6, category: 'backend' },
    { name: tSkills('react'), icon: <FaReact size={32} className="text-blue-500" />, level: 6, category: 'frontend' },
    { name: tSkills('javascript'), icon: <SiJavascript size={32} className="text-yellow-400" />, level: 6, category: 'languages' },
    { name: tSkills('sql'), icon: <FaDatabase size={32} className="text-gray-600" />, level: 7, category: 'database' },
  ];

  // Κατηγορίες δεξιοτήτων
  const skillCategories = [
    { id: 'languages', name: tSkills('categories.languages'), icon: <FaCode size={24} /> },
    { id: 'frontend', name: tSkills('categories.frontend'), icon: <FaReact size={24} /> },
    { id: 'backend', name: tSkills('categories.backend'), icon: <FaServer size={24} /> },
    { id: 'database', name: tSkills('categories.database'), icon: <FaDatabase size={24} /> },
    { id: 'tools', name: tSkills('categories.tools'), icon: <FaLaptopCode size={24} /> },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section με παράλλαξη */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950"
      >
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ 
            backgroundImage: 'url(/hero-pattern.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }}
        />
        
        <div className="container mx-auto px-4 z-10 py-20">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between gap-12"
            style={{ opacity, y, scale }}
          >
            <motion.div 
              className="md:w-1/2 text-center md:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-blue-400"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {t('title')}
              </motion.h1>
              
              <motion.h2 
                className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {t('subtitle')}
              </motion.h2>
              
              <motion.div
                className="flex flex-wrap gap-3 justify-center md:justify-start mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {topSkills.slice(0, 3).map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-white dark:bg-gray-800 rounded-full px-4 py-2 flex items-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="mr-2">{skill.icon}</span>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                <Link 
                  href={`/${locale}/about`}
                  className="btn-primary"
                >
                  {t('cta')} <FaArrowRight className="ml-2" />
                </Link>
                
                <Link 
                  href={`/${locale}/contact`}
                  className="btn-secondary"
                >
                  {t('contact_button')}
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Φόντο με σχήματα */}
                <div className="absolute -z-10 w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-blue-300 to-indigo-300 dark:from-blue-600 dark:to-indigo-600 blur-2xl opacity-20 animate-pulse"></div>
                
                {/* Εικόνα προφίλ */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                  <Image
                    src="/profile.png"
                    alt="Antonis Ekatommatis"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                    className="z-10"
                  />
                </div>
                
                {/* Floating badges */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <FaGraduationCap className="text-primary text-2xl" />
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  <FaCode className="text-blue-500 text-2xl" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <div className="w-8 h-12 rounded-full border-2 border-gray-400 dark:border-gray-600 flex justify-center">
              <motion.div 
                className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Τμήμα Εκπαίδευσης */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {tEducation('title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {tEducation('subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Πανεπιστήμιο */}
            <motion.div 
              className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-2 bg-primary"></div>
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaUniversity className="text-primary text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {tEducation('university.name')}
                    </h3>
                    <p className="text-primary font-medium">
                      {tEducation('university.degree')} - {tEducation('university.grade')}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {tEducation('university.period')}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {tEducation('university.specialization')}
                </p>
              </div>
            </motion.div>

            {/* ΕΠΑΛ */}
            <motion.div 
              className="bg-gray-50 dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="h-2 bg-blue-500"></div>
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-blue-500/10 p-3 rounded-full mr-4">
                    <FaGraduationCap className="text-blue-500 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {tEducation('highschool.name')}
                    </h3>
                    <p className="text-blue-500 font-medium">
                      {tEducation('highschool.degree')} - {tEducation('highschool.grade')}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {tEducation('highschool.period')}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {tEducation('highschool.specialization')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Τμήμα Δεξιοτήτων */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {tSkills('title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {tSkills('description')}
            </p>
          </motion.div>

          {/* Κατηγορίες Δεξιοτήτων */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.id}
                className="bg-white dark:bg-gray-800 rounded-full px-4 py-2 flex items-center shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              >
                <span className="mr-2 text-primary">{category.icon}</span>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{category.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Κύριες Δεξιότητες */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {topSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="mb-4">{skill.icon}</div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">{skill.name}</h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full mt-2">
                  <motion.div 
                    className="bg-primary h-full rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level * 10}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href={`/${locale}/skills`}
              className="inline-flex items-center btn-primary"
            >
              {locale === 'el' ? 'Όλες οι δεξιότητες' : 'All Skills'} <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('more_info_title')}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t('more_info_text')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href={`/${locale}/contact`}
                className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {t('contact_button')}
              </Link>
              <Link 
                href={`/${locale}/experience`}
                className="inline-block bg-transparent text-white border-2 border-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                {locale === 'el' ? 'Επαγγελματική Εμπειρία' : 'Professional Experience'}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 