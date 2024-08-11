import React from 'react';
import '../Styles/Home.css';
import QASection from '../Components/QASection';


function Home() {
  return (
    <div>
      <section id="home" className="firstsection">
        <div className="leftsection">
          <p className="intro" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Cuisine Creator — Your Open Source Recipe Library</p>
          <p className="description-text">A community-driven kitchen where discovery and sharing of recipes come free from clutter. Cook, enjoy, and add your own flavors.</p>
          <button className="button"><a className='text' href="https://github.com/Bhav57471?tab=repositories">How to Contribute?</a></button>
          <button className="button"><a className='text' href="/recipes">Explore Recipes</a></button>
        </div>

        <div className="rightsection">
          <img src="https://Cuisine Creator.org/_image?href=%2F_astro%2Fhero-image.CQcK11UA.svg&f=svg" alt="Developer" />
        </div>
      </section>

      <div className="outer-card">
        <div className="section">
          <p style={{ fontSize: "1rem", textAlign: "center", lineHeight: "0", color: "#CC5500" }}>Discover, Cook, Cherish — Together</p>
          <p className='harvest'>Harvest the Best of Global Kitchens</p>
          <div style={{ lineHeight: "1.5", textAlign: "center", margin: "0 auto", maxWidth: "800px" }}>
            Cuisine Creator is a home of culinary exploration and shared passion for cooking. Browse, enjoy, and become part of our flavor-filled community by contributing your culinary art. No frills; just the essence of cooking.
          </div>

          <button className='github'><a className='text' href="https://github.com/Bhav57471?tab=repositories">Contribute with GitHub</a></button>
        </div>
      </div>


      <section >
        <div style={{ maxWidth: "1600px" }}>
          <QASection />
        </div>
      </section>


      <section className="card2">
        <div className="Rightsection">
          <img src="./Images/chef.png" alt="Developer" />
        </div>

        <div className="Leftsection">
          <p style={{ fontSize: "2rem", fontWeight: "bold" }}>Join Our Cooking Collective</p>
          <div>
            Cuisine Creator is more than just a recipe site — it's an open-source collaboration where every dish you find here is a gift from fellow food lovers. Have a favorite recipe you'd like to share? We welcome you to add your special touch to our growing collection.
          </div>
        </div>

      </section>

    </div>
  );
}

export default Home;