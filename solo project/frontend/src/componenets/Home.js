import React from 'react';
import '../App.css';

const Home = () => {
  return (
    <div>
      <header>
        <h1>Welcome to our Girls Accessories Store!</h1>
        <p>Discover a wide range of stylish accessories for girls to complement their outfits.</p>
      </header>

      <section>
        <h2>Explore Our Collection</h2>
        <p>Explore our collection of accessories including jewelry, bags, hair accessories, and more.</p>
        {/* Add images or other components to showcase your collection */}
        <div className="collection-images">
          <img src="https://i.pinimg.com/564x/ab/bc/8e/abbc8e658741bd86cce49700dcd481ae.jpg" alt="Jewelry" />
          <img src="https://i.pinimg.com/564x/02/5b/da/025bdae20c2fa56900d16de95f212e9e.jpg" alt="Bags" />
          <img src="https://i.pinimg.com/564x/b4/77/ab/b477ab2b78e361ef822f296f5b207f68.jpg" alt="Hair Accessories" />
        </div>
      </section>
      <section>
        <h2>Featured Products</h2>
        <div className="featured-products">
          {/* Add your featured product components here */}
          <div className="product-card">
            <img src="https://i.pinimg.com/564x/4a/ac/7b/4aac7b3e478f17bab529ea14180bba7e.jpg" alt="Product 1" />
            <h3>Stylish Bracelet</h3>
            <p>Enhance your wrist with our latest bracelet collection.</p>
            <button>Shop Now</button>
          </div>
          {/* Add more product cards as needed */}
        </div>
      </section>

      

      <section>
        <h2>Express Your Style</h2>
        <p>Find the perfect accessories to express your style and enhance your look!</p>
        <button className="cta-button">Shop Now</button>
      </section>
    </div>
  );
};

export default Home;
