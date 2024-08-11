import React from 'react';
import { useParams, Link } from 'react-router-dom';
import dishesData from '../Data/dishes.json'; // Ensure the path is correct
import '../Styles/Dishes.css'; // Import the CSS file

const Dishes = () => {
  const { stateId } = useParams(); // Retrieve the stateId from the URL
  const dishes = dishesData[stateId]; // Get the dishes based on the stateId

  return (
    <div className="dishes-container">
      <h1>-Dishes Categories-</h1>
      {dishes ? (
        <ul className="dish-list">
          {dishes.map((dish) => (
            <li key={dish.id} className="dish-card">
              <Link to={`/state/${stateId}/dishes/${dish.id}`}>
                <img src={dish.image} alt={dish.name} />
              </Link>
              <h2>{dish.title}</h2>
              <p>{dish.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-dishes-message">No dishes found for this state.</p>
      )}
    </div>
  );
};

export default Dishes;
