"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

export default function Certifications() {
  const t = useTranslations('certifications');

  const certifications = [
    { 
      name: 'english', 
      issuer: 'LRN',
      date: '2025',
      link: 'https://lrnglobal.org/lrn-level-1-certificate-in-esol-international-cef-b2/'
    },
    { 
      name: 'nodejs', 
      issuer: 'Udemy',
      date: '2025',
      link: 'https://www.udemy.com/course/nodejs-the-complete-guide/'
    },
    { 
      name: 'git', 
      issuer: 'Udemy',
      date: '2025',
      link: 'https://www.udemy.com/course/git-and-github-bootcamp/'
    },
    { 
      name: 'react', 
      issuer: 'Udemy',
      date: '2025',
      link: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

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

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {certifications.map((cert) => (
            <motion.div 
              key={cert.name}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              variants={item}
            >
              <div className="flex items-start">
                <div className="mr-4 text-primary mt-1">
                  <FaCertificate size={30} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t(cert.name)}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">
                    <span className="font-medium">{cert.issuer}</span> • {cert.date}
                  </p>
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline mt-2"
                    >
                      <span className="mr-1">View Certificate</span>
                      <FaExternalLinkAlt size={12} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 