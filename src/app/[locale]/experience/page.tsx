"use client";

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { FaBriefcase, FaBuilding, FaCalendarAlt, FaCode, FaServer, FaDatabase, FaTools, FaLaptopCode, FaCogs, FaDesktop } from 'react-icons/fa';
import { ReactNode } from 'react';
import Image from 'next/image';

export default function Experience() {
  const t = useTranslations('experience');
  const locale = useLocale();

  // Δημιουργία των κειμένων ανάλογα με τη γλώσσα
  const translations = {
    el: {
      description: "Περιγραφή",
      responsibilities: "Αρμοδιότητες",
      technologies: "Τεχνολογίες",
      continuousGrowth: "Συνεχής Εξέλιξη",
      growthDescription: "Πάντα αναζητώ νέες ευκαιρίες για να διευρύνω τις γνώσεις και την εμπειρία μου στον τομέα της πληροφορικής.",
      responsibilitiesList: [
        'Ανάπτυξη και συντήρηση εφαρμογών web',
        'Διαχείριση βάσεων δεδομένων',
        'Υποστήριξη IT συστημάτων',
        'Αυτοματισμός επιχειρησιακών διαδικασιών',
        'Ανάπτυξη λύσεων για βελτίωση αποδοτικότητας'
      ]
    },
    en: {
      description: "Description",
      responsibilities: "Responsibilities",
      technologies: "Technologies",
      continuousGrowth: "Continuous Growth",
      growthDescription: "I am always looking for new opportunities to expand my knowledge and experience in the field of information technology.",
      responsibilitiesList: [
        'Web application development and maintenance',
        'Database management',
        'IT systems support',
        'Business process automation',
        'Development of efficiency-improving solutions'
      ]
    }
  };

  const currentTranslations = translations[locale as 'el' | 'en'];

  // Δημιουργία ενός πιο λεπτομερούς αντικειμένου για την εμπειρία
  const experiences = [
    {
      id: 'kokolias',
      title: t('kokolias.title'),
      company: t('kokolias.company'),
      period: t('kokolias.period'),
      description: t('kokolias.description'),
      skills: ['React', 'Node.js', 'SQL', 'Microsoft Power Apps', 'Microsoft Power Automate'],
      responsibilities: currentTranslations.responsibilitiesList,
      icon: <FaBriefcase size={24} />,
      color: 'bg-blue-500',
      logo: '/kokolias_logo.png'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const skillIcons: Record<string, ReactNode> = {
    'React': <FaCode className="text-blue-500" />,
    'Node.js': <FaServer className="text-green-500" />,
    'SQL': <FaDatabase className="text-orange-500" />,
    'Microsoft Power Apps': <FaLaptopCode className="text-purple-500" />,
    'Microsoft Power Automate': <FaCogs className="text-red-500" />
  };

  // Αντιστοίχιση εικονιδίων για τις αρμοδιότητες και στις δύο γλώσσες
  const getResponsibilityIcon = (responsibility: string): ReactNode => {
    if (locale === 'el') {
      switch (responsibility) {
        case 'Ανάπτυξη και συντήρηση εφαρμογών web':
          return <FaCode className="text-blue-500" />;
        case 'Διαχείριση βάσεων δεδομένων':
          return <FaDatabase className="text-orange-500" />;
        case 'Υποστήριξη IT συστημάτων':
          return <FaDesktop className="text-green-500" />;
        case 'Αυτοματισμός επιχειρησιακών διαδικασιών':
          return <FaCogs className="text-purple-500" />;
        case 'Ανάπτυξη λύσεων για βελτίωση αποδοτικότητας':
          return <FaTools className="text-red-500" />;
        default:
          return <FaCode className="text-gray-500" />;
      }
    } else {
      switch (responsibility) {
        case 'Web application development and maintenance':
          return <FaCode className="text-blue-500" />;
        case 'Database management':
          return <FaDatabase className="text-orange-500" />;
        case 'IT systems support':
          return <FaDesktop className="text-green-500" />;
        case 'Business process automation':
          return <FaCogs className="text-purple-500" />;
        case 'Development of efficiency-improving solutions':
          return <FaTools className="text-red-500" />;
        default:
          return <FaCode className="text-gray-500" />;
      }
    }
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('title')}
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {experiences.map((exp) => (
            <motion.div 
              key={exp.id}
              variants={item}
              className="mb-16 relative"
            >
              {/* Χρονολογία με εφέ */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -left-4 md:-left-32 top-0 hidden md:block"
              >
                <div className={`w-24 h-24 rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800`}>
                  <Image 
                    src={exp.logo} 
                    alt={exp.company} 
                    width={80} 
                    height={80} 
                    className="object-contain p-1"
                  />
                </div>
              </motion.div>

              {/* Κάρτα εμπειρίας */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl">
                {/* Επικεφαλίδα */}
                <div className={`${exp.color} h-2 w-full`}></div>
                
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center mb-4 md:mb-0">
                      <div className="mr-4 md:hidden">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                          <Image 
                            src={exp.logo} 
                            alt={exp.company} 
                            width={40} 
                            height={40} 
                            className="object-contain p-1"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
                          <FaBuilding className="mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-600 dark:text-gray-400 md:text-right">
                      <FaCalendarAlt className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      {currentTranslations.description}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      {currentTranslations.responsibilities}
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start bg-gray-50 dark:bg-gray-700/30 p-2 rounded-lg">
                          <span className="mr-2 mt-0.5 text-primary">
                            {getResponsibilityIcon(resp)}
                          </span>
                          <span className="text-gray-700 dark:text-gray-300">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      {currentTranslations.technologies}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <div 
                          key={skill} 
                          className="bg-gray-100 dark:bg-gray-700 px-3 py-1.5 rounded-full flex items-center"
                        >
                          <span className="mr-1.5">
                            {skillIcons[skill] || <FaCode className="text-gray-500" />}
                          </span>
                          <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 