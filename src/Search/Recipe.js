import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Recipe.css';
import recipes from '../Data/m.json'; // Ensure this path is correct

const Recipe = () => {
  const [data, setData] = useState(null);
  const { meal } = useParams();

  useEffect(() => {
    console.log('Route parameter meal:', meal); // Debugging
    const fetchData = () => {
      const recipeData = recipes.find((item) => item.id === parseInt(meal, 10));
      console.log('Found recipe data:', recipeData); // Debugging
      setData(recipeData);
    };

    if (meal) {
      fetchData();
    }
  }, [meal]);

  return (
    <>
      {!data ? (
        "Not Found"
      ) : (
        <div className='msg'>
          <div className='detail-card'>
           <div className='detail-section'>
          <img src={data.image} alt={data.title} />
          </div>          </div>

            <h1>{data.title}</h1>
            <div className="detail-details">
            <p>{data.details}</p>
            <h3>Instructions:</h3>
            <p>{data.instructions}</p>
            </div>
            </div>
      )}
    </>
  );
};

export default Recipe;
