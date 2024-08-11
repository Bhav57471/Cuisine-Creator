import React from 'react';
import { Link } from 'react-router-dom';
import  '../Styles/States.css';
import states from '../Data/state.json';
import Food from '../Search/Food';

function States() {
    return (
        <><div>
                <section className="Statecard" style={{ backgroundColor: "rgba(248, 166, 59, 0.952)" }}>
                    <div className="collectionsection">
                        <p style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                            Explore, cook, and cherish recipes co-created by our global community of food enthusiasts.
                        </p>
                    </div>

                    <div className="imagesection">
                        <img src="./Images/pic2.png" alt="Developer" />
                    </div>
                </section>

                <div>
            <Food />
        </div>

                <div className='states'>
                    <h1>-States Categories-</h1>
                    <div className="courses-list">
                        {states.map(state => (
                            <div key={state.id} className="Scard">
                                <Link to={`/state/${state.id}/dishes`}>
                                    <img src={state.image} className="card-img-top" alt={state.title} />
                                </Link>                    </div>
                        ))}
                    </div>
                </div>
                <br />
            </div></>
    );
}

export default States;