import React, { useState } from 'react';
import Cards from '../Search/Cards';
import dishesData from '../Data/meals.json'; // Adjust the path to where the JSON file is located

const Food = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [msg, setMsg] = useState("Search and Get Recipe's");

    const handleInput = (event) => {
        setSearch(event.target.value);
    };

    const myFun = () => {
        if (search === "") {
            setMsg("Please Enter Something");
        } else {
            const filteredData = dishesData.meals.filter(meal =>
                meal.title.toLowerCase().includes(search.toLowerCase())
            );
            setData(filteredData);
            setMsg(filteredData.length > 0 ? "Your Search Result's" : "No Results Found");
        }
    };

    return (
        <>
            <h2 className='msg' style={{ textAlign: "center" }}>{msg}</h2>
            <div className='container'>
                <div className='searchBar'>
                    <input 
                        placeholder='Search Meals' 
                        type='text' 
                        onChange={handleInput} 
                        className='searchInput'
                    />
                    <button onClick={myFun} className='searchButton'>Search</button>
                </div>
                <div>
                    <Cards detail={data} />
                </div>
            </div>
        </>
    );
};

export default Food;
