"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { 
  FaJava, 
  FaNodeJs, 
  FaReact, 
  FaPython, 
  FaHtml5, 
  FaCss3Alt, 
  FaWordpress, 
  FaPhp, 
  FaDatabase,
  FaMicrosoft,
  FaCode,
  FaLayerGroup,
  FaCogs
} from 'react-icons/fa';
import { SiKotlin, SiJavascript, SiFlask } from 'react-icons/si';
import { TbBrandCSharp } from "react-icons/tb";
import { useState } from 'react';

export default function Skills() {
  const t = useTranslations('skills');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Κατηγορίες δεξιοτήτων
  const categories = [
    { id: 'languages', name: t('categories.languages'), icon: <FaCode /> },
    { id: 'frontend', name: t('categories.frontend'), icon: <FaReact /> },
    { id: 'backend', name: t('categories.backend'), icon: <FaNodeJs /> },
    { id: 'database', name: t('categories.database'), icon: <FaDatabase /> },
    { id: 'tools', name: t('categories.tools'), icon: <FaLayerGroup /> },
    { id: 'all', name: t('categories.all'), icon: null }
  ];

  const skills = [
    { name: 'java', icon: <FaJava size={40} className="text-red-500" />, level: 7, category: 'languages' },
    { name: 'nodejs', icon: <FaNodeJs size={40} className="text-green-500" />, level: 8, category: 'backend' },
    { name: 'react', icon: <FaReact size={40} className="text-blue-500" />, level: 8, category: 'frontend' },
    { name: 'python', icon: <FaPython size={40} className="text-yellow-500" />, level: 8, category: 'languages' },
    { name: 'csharp', icon: <TbBrandCSharp size={40} className="text-purple-500" />, level: 7, category: 'languages' },
    { name: 'kotlin', icon: <SiKotlin size={40} className="text-orange-500" />, level: 3, category: 'languages' },
    { name: 'wordpress', icon: <FaWordpress size={40} className="text-blue-400" />, level: 6, category: 'tools' },
    { name: 'php', icon: <FaPhp size={40} className="text-indigo-500" />, level: 5, category: 'backend' },
    { name: 'sql', icon: <FaDatabase size={40} className="text-gray-600" />, level: 8, category: 'database' },
    { name: 'html', icon: <FaHtml5 size={40} className="text-orange-600" />, level: 7, category: 'frontend' },
    { name: 'css', icon: <FaCss3Alt size={40} className="text-blue-600" />, level: 8, category: 'frontend' },
    { name: 'javascript', icon: <SiJavascript size={40} className="text-yellow-400" />, level: 8, category: 'languages' },
    { name: 'flask', icon: <SiFlask size={40} className="text-gray-600" />, level: 7, category: 'backend' },
    { name: 'powerapps', icon: <FaMicrosoft size={40} className="text-purple-600" />, level: 8, category: 'tools' },
    { name: 'powerautomate', icon: <FaCogs size={40} className="text-blue-700" />, level: 7, category: 'tools' },
    { name: 'ai', icon: <span className="text-4xl">🤖</span>, level: 6, category: 'tools' },
  ];

  // Φιλτράρισμα δεξιοτήτων βάσει της επιλεγμένης κατηγορίας
  const filteredSkills = activeCategory && activeCategory !== 'all' 
    ? skills.filter(skill => skill.category === activeCategory)
    : skills;

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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Χρώματα για τις μπάρες δεξιοτήτων ανάλογα με το επίπεδο
  const getSkillBarColor = (level: number) => {
    if (level >= 9) return 'bg-green-500';
    if (level >= 7) return 'bg-blue-500';
    if (level >= 5) return 'bg-yellow-500';
    return 'bg-orange-500';
  };

  // Λεκτική περιγραφή του επιπέδου
  const getSkillLevelText = (level: number) => {
    if (level >= 9) return t('levels.expert');
    if (level >= 7) return t('levels.advanced');
    if (level >= 5) return t('levels.intermediate');
    return t('levels.beginner');
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('title')}
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* Φίλτρα κατηγοριών */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all ${
                activeCategory === category.id 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon && <span>{category.icon}</span>}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          animate="show"
          key={activeCategory || 'all'} // Επανεκκίνηση του animation όταν αλλάζει η κατηγορία
        >
          {filteredSkills.map((skill) => (
            <motion.div 
              key={skill.name}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transform transition-all duration-300 ${
                hoveredSkill === skill.name ? 'scale-105 shadow-xl z-10' : ''
              }`}
              variants={item}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ y: -5 }}
            >
              <div className={`h-2 ${getSkillBarColor(skill.level)}`}></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {typeof skill.icon === 'string' ? (
                      <span className="text-4xl">{skill.icon}</span>
                    ) : (
                      skill.icon
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t(skill.name)}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{getSkillLevelText(skill.level)}</p>
                  </div>
                </div>
                
                <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className={`absolute top-0 left-0 h-full ${getSkillBarColor(skill.level)}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level * 10}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Μήνυμα όταν δεν υπάρχουν δεξιότητες στην επιλεγμένη κατηγορία */}
        {filteredSkills.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t('no_skills')}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
} 