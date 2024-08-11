import React from 'react';
import '../Styles/About.css'; // Ensure you have this CSS file for styling

function About() {
    return (
        <div className="about-container">
            <div className="card" style={{backgroundColor:"rgba(248, 166, 59, 0.952)"}}>
                <div className="section">
                    <p className="intro-text">
                        Introducing Cuisine Creator:
                    </p>
                    <p className="bold-text">
                        A Curated Collection of Community-Crafted Recipes
                    </p>
                    <div className="description-text">
                        Explore a growing repository of culinary delights, meticulously organized and shared through GitHub contributions.
                    </div>
                </div>
            </div>

    <section className="aboutcard">
    <div className="collectionsection">
        <p style={{fontSize:"2rem",fontWeight:"bold"}}>Hello to all who love cooking!</p>
       <div> 
       Cuisine Creator is more than just a recipe website; it's a place where cooking enthusiasts can come together to share their favorite recipes without any annoying ads or fees — completely free.        
       </div>
       <br/>
       <div>
       Born from the belief that cooking should be distraction-free and without commercial intrusions, Cuisine Creator thrives on the simplicity of sharing recipes. No ads, no paywalls — just direct access to a treasure trove of dishes curated and cherished by an ever-growing community of food lovers.
       </div>
       </div>
       

      <div className="imagesection">
        <img src="./Images/abpic.jpg" alt="Developer" />
      </div>
    </section>



    <section className="aboutcard">
    <div className="Rightsection">
        <img src="./Images/abpic2.png" alt="Developer" />
      </div>

      <div className="Leftsection">
       <div style={{paddingTop:"20%"}}>  
       Cuisine Creator is your kitchen away from the kitchen — a place to discover, save, and share what's cooking. So what are you waiting for? Come join in, click through our recipes, and let's whip up some delicious journeys together at Cuisine Creator!        </div>
       </div>

    </section>

        </div> 
    );
}

export default About;
