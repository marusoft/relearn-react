import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="left-container">
        <h2>Start Learning React</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          quasi quos, repellat voluptate esse Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Minima esse magni, aliquid illum iste
          pariatur.
        </p>
        <button>Learn More</button>
      </div>
      <div className="right-container">
        <img className="hero-image" src="/images/programming.jpg" alt="" />
      </div>
    </div>
  );
};
export default Hero;
