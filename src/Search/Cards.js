import React from 'react';
import { NavLink } from 'react-router-dom';

const Cards = ({ detail }) => {
  return (
    <div className='meals'>
      {
        !detail ? "Sorry Data Not Found" : detail.map((curItem, index) => {
          return (
            <div className='mealImg' key={curItem.id}>
              <img src={curItem.image} alt={curItem.title} />
              <p>{curItem.title}</p>
              <NavLink to={`/recipe/${curItem.id}`}>
                <button>Recipe</button>
              </NavLink>
            </div>
          );
        })
      }
    </div>
  );
}

export default Cards;
