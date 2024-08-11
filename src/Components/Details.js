import React from 'react';
import '../Styles/Details.css';
import { useParams } from 'react-router-dom'; // Ensure correct import
import dishesData from '../Data/dishes.json'; // Check if this path is correct

const Details = () => {
  const { stateId, dishId } = useParams(); 
  const dish = dishesData[stateId]?.find(d => d.id === parseInt(dishId, 10));

  if (!dish) {
    return <p>Dish not found.</p>;
  }

  return (
      <>
      <div className="detail-card">
      <div className="detail-section">
        <img src={dish.image} alt={dish.title} />
      </div>
    </div>
    <div>
        <div className="detail-details">
          <h1 style={{fontWeight:"bold"}}>{dish.title}</h1>
          <p>{dish.details}</p>
          <br/><br/>
          
          <h3 className="instructions-header">
      INSTRUCTIONS:
    </h3>

          <button>Step-by-Step</button><button>View All Steps</button>
          <p>{dish.instructions}</p>
        </div>
      </div></>

  );
};

export default Details;
