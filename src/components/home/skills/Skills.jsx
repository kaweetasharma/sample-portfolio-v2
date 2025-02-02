import React from 'react';
import { skills } from '../../../Data.jsx';
import './skills.css';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="skills__header">
        <h2 className="section__title text-cs">Professional Skills</h2>
        <p className="section__subtitle">
          My <span> Talent</span>
        </p>
      </div>

      <div className="skills__container container grid">
        {skills.map(({ name, percentage, description }, index) => (
          <div className="skills__item" key={index}>
            <div className="skills__titles">
              <h3 className="skills__name">{name}</h3>
              <span className="skills__number">
                {percentage} <span>%</span>
              </span>
            </div>
            <p className="skills__description">{description}</p>
            <div className="skills__bar">
              <div
                className="skills__percentage"
                style={{ width: `${percentage}%` }}
              >
                <span className="skills__indicator"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
