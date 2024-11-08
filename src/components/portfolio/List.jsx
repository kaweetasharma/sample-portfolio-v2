import React, { useState } from 'react';

const List = ({ list, filterItems }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="portfolio__list">
      {list.map((category, id) => {
        return (
          <button
            className={`portfolio__list-item text-cs ${
              active === id ? 'active-work' : ''
            }`}
            key={id}
            onClick={() => {
              setActive(id);
              filterItems(category);
            }}
            aria-pressed={active === id}
            aria-label={`Filter by ${category}`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default List;
