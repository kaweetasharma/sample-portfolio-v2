import React, { useState } from 'react';
import List from './List';
import Items from './Items';
import { projects } from '../../Data';
import './portfolio.css';
import { AnimatePresence, motion } from 'framer-motion';

const allNavList = [
  'ALL',
  ...new Set(projects.map((project) => project.category)),
];

export const Portfolio = () => {
  const [projectItems, setMenuItems] = useState(projects);
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === 'ALL') {
      setMenuItems(projects);
      return;
    }
    const newProjectItems = projects.filter(
      (item) => item.category === category
    );
    setMenuItems(newProjectItems);
  };

  return (
    <section className="portfolio section" id="work">
      <motion.h2
        className="section__title text-cs"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Portfolio
      </motion.h2>
      <motion.p
        className="section__subtitle"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        My <span>Cases</span>
      </motion.p>

      <List
        list={allNavList}
        activeCategory={activeCategory}
        filterItems={filterItems}
      />

      <motion.div
        className="portfolio__container container grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatePresence>
          <Items projectItems={projectItems} />
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Portfolio;
