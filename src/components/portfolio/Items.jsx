import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description, link } = projectItem;
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="portfolio__items card card-two"
            key={id}
          >
            <div className="portfolio__img-wrapper">
              <img
                src={img}
                alt={`${title} preview`}
                className="portfolio__img"
              />
            </div>
            <div style={{ padding: 12 }}>
              <span className="portfolio__category text-cs">{category}</span>
              <h3 className="portfolio__title">{title}</h3>
              <p className="portfolio__description">{description}</p>
              {link && (
                <a
                  href={link}
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See project
                  <FaArrowRight className="link__icon" />
                </a>
              )}
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
